/**
 * Anthropic calls go to same-origin `/api/anthropic/...`.
 * Local dev: Vite adds `x-api-key` from `.env.local`. Production: set `ANTHROPIC_API_KEY` on Vercel/Netlify (see `api/anthropic/v1/messages.ts`). Never use `VITE_*` for the secret.
 * Optional `VITE_ANTHROPIC_PROXY_BASE` if the proxy is on another origin.
 */
const ANTHROPIC_VERSION = '2023-06-01'

function anthropicBaseUrl(): string {
  if (import.meta.env.DEV) return '/api/anthropic'
  const explicit = import.meta.env.VITE_ANTHROPIC_PROXY_BASE as string | undefined
  if (explicit?.trim()) return explicit.replace(/\/$/, '')
  /** Same-origin proxy on Vercel/Netlify (see `api/` + vercel.json or netlify.toml). */
  return '/api/anthropic'
}

type Msg = { role: 'user' | 'assistant'; text: string }

export async function fetchClaudeReply(options: { system: string; messages: Msg[] }): Promise<string> {
  const base = anthropicBaseUrl()

  const model =
    (import.meta.env.VITE_ANTHROPIC_MODEL as string | undefined) || 'claude-sonnet-4-5-20250929'

  const messages = options.messages.map((m) => ({
    role: m.role,
    content: m.text,
  }))

  const res = await fetch(`${base}/v1/messages`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'anthropic-version': ANTHROPIC_VERSION,
    },
    body: JSON.stringify({
      model,
      max_tokens: 650,
      system: options.system,
      messages,
    }),
  })

  if (!res.ok) {
    const t = await res.text()
    throw new Error(`anthropic ${res.status}: ${t.slice(0, 200)}`)
  }

  const ct = res.headers.get('content-type') || ''
  const raw = await res.text()
  if (!ct.includes('application/json')) {
    throw new Error(
      `anthropic proxy returned non-JSON (${ct || 'no content-type'}). ` +
        `First bytes: ${raw.slice(0, 80).replace(/\s+/g, ' ')}`,
    )
  }

  let data: { content?: { type?: string; text?: string }[] }
  try {
    data = JSON.parse(raw) as { content?: { type?: string; text?: string }[] }
  } catch {
    throw new Error(`anthropic invalid JSON: ${raw.slice(0, 120)}`)
  }
  const block = data.content?.find((b) => b.type === 'text' && b.text)
  const text = block?.text?.trim()
  if (!text) throw new Error('empty_response')
  return text
}

export { ANTHROPIC_VERSION }
