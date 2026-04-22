/**
 * Dev: Vite proxies /api/anthropic → api.anthropic.com with ANTHROPIC_API_KEY (see vite.config).
 * Production: set up the same path on your host or the client falls back to rules-based replies.
 */
const ANTHROPIC_VERSION = '2023-06-01'

function anthropicBaseUrl(): string {
  if (import.meta.env.DEV) return '/api/anthropic'
  const b = import.meta.env.VITE_ANTHROPIC_PROXY_BASE as string | undefined
  return b?.replace(/\/$/, '') || ''
}

type Msg = { role: 'user' | 'assistant'; text: string }

export async function fetchClaudeReply(options: { system: string; messages: Msg[] }): Promise<string> {
  const base = anthropicBaseUrl()
  if (!base) {
    throw new Error('no_proxy')
  }

  const model =
    (import.meta.env.VITE_ANTHROPIC_MODEL as string | undefined) || 'claude-sonnet-4-5-20250929'

  const messages = options.messages.map((m) => ({
    role: m.role,
    content: m.text,
  }))

  const res = await fetch(`${base}/v1/messages`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      model,
      max_tokens: 1200,
      system: options.system,
      messages,
    }),
  })

  if (!res.ok) {
    const t = await res.text()
    throw new Error(`anthropic ${res.status}: ${t.slice(0, 200)}`)
  }

  const json = (await res.json()) as {
    content?: { type?: string; text?: string }[]
  }
  const block = json.content?.find((b) => b.type === 'text' && b.text)
  const text = block?.text?.trim()
  if (!text) throw new Error('empty_response')
  return text
}

export { ANTHROPIC_VERSION }
