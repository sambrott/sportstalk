import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import type { SportContent, SportId } from '../types'
import { fetchClaudeReply } from '../lib/anthropicChat'
import { getSportAssistantReply } from '../lib/sportAssistantReply'
import { IconOrb, IconSend } from './ui/UiIcons'

/** ms between each revealed character (snappy, chat-app feel) */
const TYPEWRITER_MS = 11

function StreamText({
  text,
  active,
  onComplete,
  onProgress,
}: {
  text: string
  active: boolean
  onComplete?: () => void
  onProgress?: () => void
}) {
  const [n, setN] = useState(() => (active ? 0 : text.length))
  const onCompleteRef = useRef(onComplete)
  const onProgressRef = useRef(onProgress)
  onCompleteRef.current = onComplete
  onProgressRef.current = onProgress

  useEffect(() => {
    if (!active) {
      setN(text.length)
      return
    }
    setN(0)
    if (text.length === 0) {
      onCompleteRef.current?.()
      return
    }
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      const next = Math.min(i, text.length)
      setN(next)
      onProgressRef.current?.()
      if (next >= text.length) {
        window.clearInterval(id)
        onCompleteRef.current?.()
      }
    }, TYPEWRITER_MS)
    return () => window.clearInterval(id)
  }, [text, active])

  return <>{text.slice(0, n)}</>
}

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
  [
    'You are the Sports Talk in-app assistant. Your job is to answer the user’s sports questions in a way that feels clear, human, and easy to skim.',
    '',
    `Context: the user is browsing content about **${sport.name}**. Keep examples and explanations anchored to that sport unless they clearly switch topic.`,
    '',
    'How to answer:',
    '- Default to **short, plain-language** replies: about 3–6 sentences, or two tight paragraphs at most. If they ask for more depth (“explain like I’m new”, “go deeper”), you may go longer.',
    '- Lead with **the direct answer** or the one thing they need to know. Avoid filler openers like “Great question” or “Absolutely”.',
    '- Use **simple structure**: short sentences, optional bullet list only when it genuinely helps (rules, steps, or comparisons).',
    '- Include **concrete explanations** (how a rule works, what a term means, why something matters) rather than hype or vague summaries.',
    '',
    'Accuracy and limits:',
    '- **Never invent** scores, stats, dates, injuries, trades, starting lineups, or broadcast details. If something is missing from the conversation or you are not sure, say so plainly.',
    '- You **do not** have live games or real-time data. If they ask what is happening “right now” and they have not pasted any details, explain the concept in general terms and note you are not reporting a live result.',
    '- If the question is ambiguous, **ask one short clarifying question** or state your assumption in one line.',
    '',
    'Style:',
    '- No emojis, no hashtags, no “as an AI”.',
    '- Tone: friendly, direct, confident but not preachy.',
  ].join('\n')

export function SportAssistantChat({ sportId, sport, variant, formId = 'sport-assistant-form' }: Props) {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [streamRevealIdx, setStreamRevealIdx] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const scrollThreadSmooth = useCallback(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [])

  const scrollThreadAuto = useCallback(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'auto' })
  }, [])

  useEffect(() => {
    scrollThreadSmooth()
  }, [messages, busy, scrollThreadSmooth])

  const runReply = async (thread: Msg[]) => {
    const last = thread[thread.length - 1]
    const userText = last?.role === 'user' ? last.text : ''
    setBusy(true)
    try {
      const text = await fetchClaudeReply({
        system: assistantSystem(sport),
        messages: thread,
      })
      const assistantIndex = thread.length
      setMessages((m) => [...m, { role: 'assistant' as const, text }])
      setStreamRevealIdx(assistantIndex)
    } catch {
      const text = getSportAssistantReply(sportId, sport, userText)
      const assistantIndex = thread.length
      setMessages((m) => [...m, { role: 'assistant' as const, text }])
      setStreamRevealIdx(assistantIndex)
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
      <div
        className={`${base}__thread`}
        ref={listRef}
        role="log"
        aria-live="polite"
        aria-busy={busy || streamRevealIdx !== null}
      >
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
                {msg.role === 'assistant' ? (
                  <StreamText
                    text={msg.text}
                    active={i === streamRevealIdx}
                    onComplete={() => setStreamRevealIdx(null)}
                    onProgress={scrollThreadAuto}
                  />
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))
        )}
        {busy ? (
          <div className={`${base}__row ${base}__row--assistant`}>
            <div className={`${base}__avatar`} aria-hidden>
              <IconOrb />
            </div>
            <div className={`${base}__bubble ${base}__bubble--typing`} aria-label="Assistant is typing">
              <span className="typing-ellipsis" aria-hidden>
                <span className="typing-ellipsis__dot" />
                <span className="typing-ellipsis__dot" />
                <span className="typing-ellipsis__dot" />
              </span>
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
      </form>
    </div>
  )
}
