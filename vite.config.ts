import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { ProxyOptions } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (mode === 'development' && !env.ANTHROPIC_API_KEY?.trim()) {
    console.warn(
      '\n[sportstalk] ANTHROPIC_API_KEY is missing. Claude replies use local hints only.\n' +
        '→ Copy .env.example to .env.local and add a key from https://console.anthropic.com/settings/keys\n' +
        '→ If a key was ever leaked, create a new key and revoke the old one.\n',
    )
  }

  const anthProxy: ProxyOptions = {
    target: 'https://api.anthropic.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
    configure: (proxy) => {
      proxy.on('proxyReq', (req) => {
        const key = env.ANTHROPIC_API_KEY
        if (key) {
          req.setHeader('x-api-key', key)
        }
        req.setHeader('anthropic-version', '2023-06-01')
      })
    },
  }

  return {
    plugins: [react()],
    server: {
      host: true,
      port: 5173,
      proxy: {
        // ESPN site API — public scoreboards (dev-only proxy to avoid CORS; prod hits ESPN directly).
        '/api/espn': {
          target: 'https://site.api.espn.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/espn/, ''),
        },
        // Claude: never ship API keys to the client; the dev server adds x-api-key.
        '/api/anthropic': anthProxy,
      },
    },
  }
})
