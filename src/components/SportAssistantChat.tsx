import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import type { SportContent, SportId } from '../types'
import { fetchClaudeReply } from '../lib/anthropicChat'
import { getSportAssistantReply } from '../lib/sportAssistantReply'
import { AssistantFormattedText } from './AssistantFormattedText'
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

  useEffect(() => {
    onCompleteRef.current = onComplete
    onProgressRef.current = onProgress
  }, [onComplete, onProgress])

  useEffect(() => {
    if (!active) return
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

  const shown = active ? Math.min(n, text.length) : text.length
  return <AssistantFormattedText text={text.slice(0, shown)} />
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
  /** Desktop panel: flex to available height and let the thread grow */
  embeddedInDesktopPanel?: boolean
  formId?: string
}

const assistantSystem = (sport: SportContent) =>
  [
    'You are the Sports Talk in-app assistant. Answers appear in a small chat panel—readers want **scannable structure**, not essay paragraphs.',
    '',
    `Sport context: **${sport.name}**. Stay anchored there unless the user clearly changes topic.`,
    '',
    '## Output format (required unless they only need a one-line yes/no)',
    '- Use **Markdown**: section titles on their own line as `## Section name` (2–4 sections for a normal answer). For a small sub-heading inside a section, use `###` sparingly.',
    '- Under each `##` section, use **2–4 short bullet lines** (`- `). Each bullet = one idea, one line, plain language. Avoid bullets longer than ~120 characters—split into two bullets instead.',
    '- **No long prose blocks.** Do not write more than two non-bullet sentences in a row. If you are tempted to write a paragraph, break it into bullets under a new `##` section.',
    '- Default length: about **90–130 words total**. If they explicitly ask to go deeper (“ELI5”, “explain every step”, “longer”), you may stretch to ~220 words but **keep the same section + bullet pattern**.',
    '- Put the **most important takeaway** in the first section (title like `## Quick answer` or `## Bottom line`) with 2 bullets max.',
    '',
    '## Accuracy',
    '- Never invent scores, stats, dates, injuries, trades, or lineups. If unknown or not in the thread, say so in one bullet.',
    '- You do not have live games. If they ask for “right now” without pasting details, explain generally and say it is not a live report.',
    '- Ambiguous question → one short clarifying question in a `###` or final `- ` bullet, or state your assumption in one line.',
    '',
    '## Style',
    '- No emojis, hashtags, or “as an AI”. No filler openers—start with structured content.',
    '- Friendly, direct, confident. Use **bold** sparingly inside bullets for key terms only.',
  ].join('\n')

export function SportAssistantChat({
  sportId,
  sport,
  variant,
  embeddedInDesktopPanel = false,
  formId = 'sport-assistant-form',
}: Props) {
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
  const rootClass =
    embeddedInDesktopPanel && variant === 'floating'
      ? `${base} ${base}--claude ${base}--in-panel`
      : `${base} ${base}--claude`

  return (
    <div className={rootClass}>
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
                    key={`${i}-${i === streamRevealIdx}`}
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
