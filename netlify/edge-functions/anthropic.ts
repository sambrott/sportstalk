/** Netlify Edge (Deno): /api/anthropic/* → api.anthropic.com — set ANTHROPIC_API_KEY in site env. */

const ALLOW_PREFIX = 'v1/'

export default async function anthropicEdge(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'content-type, anthropic-version',
      },
    })
  }

  if (request.method !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  const url = new URL(request.url)
  const m = /^\/api\/anthropic\/(.+)$/.exec(url.pathname)
  const pathSuffix = m?.[1] || ''
  if (!pathSuffix.startsWith(ALLOW_PREFIX)) {
    return json(403, { error: 'Forbidden path' })
  }

  const key = Deno.env.get('ANTHROPIC_API_KEY')?.trim()
  if (!key) {
    return json(503, { error: 'ANTHROPIC_API_KEY not configured on Netlify' })
  }

  const body = await request.text()
  const upstream = await fetch(`https://api.anthropic.com/${pathSuffix}`, {
    method: 'POST',
    headers: {
      'content-type': request.headers.get('content-type') || 'application/json',
      'x-api-key': key,
      'anthropic-version': request.headers.get('anthropic-version') || '2023-06-01',
    },
    body,
  })

  const text = await upstream.text()
  const ct = upstream.headers.get('content-type') || 'application/json'
  return new Response(text, { status: upstream.status, headers: { 'content-type': ct } })
}

function json(status: number, data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
