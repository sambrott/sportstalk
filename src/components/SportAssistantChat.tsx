import { type FormEvent, useEffect, useRef, useState } from 'react'
import type { SportContent, SportId } from '../types'
import { getSportAssistantReply } from '../lib/sportAssistantReply'

type Props = {
  sportId: SportId
  sport: SportContent
  variant: 'mobile-landing' | 'floating'
  /** id for aria */
  formId?: string
}

export function SportAssistantChat({ sportId, sport, variant, formId = 'sport-assistant-form' }: Props) {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([])
  const [input, setInput] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }])
    const reply = getSportAssistantReply(sportId, sport, text)
    setMessages((m) => [...m, { role: 'assistant', text: reply }])
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send()
  }

  const base = variant === 'floating' ? 'asst-float' : 'asst-mobile'

  return (
    <div className={`${base}`}>
      <div className={`${base}__messages`} ref={listRef} role="log" aria-live="polite">
        {messages.length === 0 ? (
          <p className={`${base}__empty`}>
            Answers are demo-only and use your selected sport ({sport.name}). No account required.
          </p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`${base}__msg ${base}__msg--${msg.role}`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>
      <form id={formId} className={`${base}__form`} onSubmit={onSubmit}>
        <label htmlFor={`${formId}-input`} className="sr-only">
          Ask about {sport.name}
        </label>
        <textarea
          id={`${formId}-input`}
          className={`${base}__input`}
          rows={variant === 'floating' ? 2 : 3}
          placeholder={`Ask about ${sport.name}…`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
        />
        <button type="submit" className={`${base}__send`}>
          Send
        </button>
      </form>
    </div>
  )
}
