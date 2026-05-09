/**
 * POST /api/anthropic/v1/messages → https://api.anthropic.com/v1/messages
 *
 * Static path (no catch-all) so Vercel always maps this URL to a Node function.
 * Set ANTHROPIC_API_KEY in the host dashboard (Production + Preview), then redeploy.
 */
export default {
  async fetch(request: Request): Promise<Response> {
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

    const key = process.env.ANTHROPIC_API_KEY?.trim()
    if (!key) {
      return json(503, {
        error: 'ANTHROPIC_API_KEY missing',
        hint: 'Add it in Vercel → Settings → Environment Variables, then Redeploy.',
      })
    }

    const body = await request.text()
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
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
  },
}

function json(status: number, data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
