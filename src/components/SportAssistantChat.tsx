import { type FormEvent, useEffect, useRef, useState } from 'react'
import type { SportContent, SportId } from '../types'
import { fetchClaudeReply } from '../lib/anthropicChat'
import { getSportAssistantReply } from '../lib/sportAssistantReply'
import { IconOrb, IconSend } from './ui/UiIcons'

function emptyAssistantPrompt(sportName: string, sportId: SportId): string {
  const prompts = [
    `Ask a question about ${sportName}.`,
    `What do you want to know?`,
    `Try asking about ${sportName}.`,
    `Ask about rules, form, or the story.`,
    `What should we look at?`,
    `Got a quick ${sportName} question?`,
    `Ask anything. Short answers, plain language.`,
    `What are you trying to follow?`,
  ]
  let n = 0
  for (let i = 0; i < sportId.length; i++) n += sportId.charCodeAt(i)
  return prompts[n % prompts.length]
}

type Msg = { role: 'user' | 'assistant'; text: string }

type Props = {
  sportId: SportId
  sport: SportContent
  variant: 'mobile-landing' | 'floating'
  formId?: string
}

const assistantSystem = (sport: SportContent) =>
  `You are Sports Talk: a clear, non-hallucinating sports explainer. Current topic: ${sport.name}. ` +
  `Use short paragraphs. If a score or recent result is not in the user message, say you are summarizing public storylines, not a live box score. ` +
  `No emojis. Keep answers under about 150 words unless the user asks for more.`

export function SportAssistantChat({ sportId, sport, variant, formId = 'sport-assistant-form' }: Props) {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  const runReply = async (thread: Msg[]) => {
    const last = thread[thread.length - 1]
    const userText = last?.role === 'user' ? last.text : ''
    setBusy(true)
    try {
      const text = await fetchClaudeReply({
        system: assistantSystem(sport),
        messages: thread,
      })
      setMessages((m) => [...m, { role: 'assistant', text }])
    } catch {
      const text = getSportAssistantReply(sportId, sport, userText)
      setMessages((m) => [...m, { role: 'assistant', text }])
    } finally {
      setBusy(false)
    }
  }

  const send = () => {
    const text = input.trim()
    if (!text || busy) return
    setInput('')
    setMessages((m) => {
      const next = [...m, { role: 'user' as const, text }]
      void runReply(next)
      return next
    })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send()
  }

  const base = variant === 'floating' ? 'asst-float' : 'asst-mobile'

  return (
    <div className={`${base} ${base}--claude`}>
      <div className={`${base}__thread`} ref={listRef} role="log" aria-live="polite">
        {messages.length === 0 ? (
          <div className={`${base}__empty`}>
            <div className={`${base}__mark`} aria-hidden>
              <IconOrb />
            </div>
            <p className={`${base}__emptytext`}>{emptyAssistantPrompt(sport.name, sportId)}</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`${base}__row ${base}__row--${msg.role}`}>
              {msg.role === 'assistant' ? (
                <div className={`${base}__avatar`} aria-hidden>
                  <IconOrb />
                </div>
              ) : null}
              <div className={`${base}__bubble`}>
                {msg.text}
              </div>
            </div>
          ))
        )}
        {busy ? (
          <div className={`${base}__row ${base}__row--assistant`}>
            <div className={`${base}__avatar`} aria-hidden>
              <IconOrb />
            </div>
            <div className={`${base}__bubble ${base}__bubble--typing`}>
              …
            </div>
          </div>
        ) : null}
      </div>
      <form id={formId} className={`${base}__form`} onSubmit={onSubmit}>
        <label htmlFor={`${formId}-input`} className="sr-only">
          Ask about {sport.name}
        </label>
        <div className={`${base}__composer`}>
          <textarea
            id={`${formId}-input`}
            className={`${base}__input`}
            rows={2}
            placeholder={`Message · ${sport.name}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                send()
              }
            }}
          />
          <button type="submit" className={`${base}__send`} disabled={busy} aria-label="Send">
            <IconSend />
          </button>
        </div>
        <p className={`${base}__hint`}>
          {import.meta.env.DEV
            ? 'Claude via Vite proxy when .env.local has ANTHROPIC_API_KEY.'
            : 'Claude when the host sets ANTHROPIC_API_KEY (see Vercel/Netlify in repo); otherwise local hints.'}
        </p>
      </form>
    </div>
  )
}
