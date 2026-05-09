/**
 * POST /api/anthropic/v1/messages → forwards to api.anthropic.com (same path suffix).
 * Set ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables for Production
 * (and Preview if you test there). Redeploy after adding or changing the key.
 *
 * Default Node.js runtime so `process.env` matches dashboard env (Edge can omit vars in some setups).
 */
const ALLOW_PREFIX = 'v1/'

export default async function handler(request: Request): Promise<Response> {
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
  const pathSuffix = url.pathname.replace(/^\/api\/anthropic\/?/, '')
  if (!pathSuffix.startsWith(ALLOW_PREFIX)) {
    return json(403, { error: 'Forbidden path' })
  }

  const key = process.env.ANTHROPIC_API_KEY?.trim()
  if (!key) {
    return json(503, {
      error: 'ANTHROPIC_API_KEY missing',
      hint: 'Add it in Vercel → Settings → Environment Variables, then Redeploy.',
    })
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
