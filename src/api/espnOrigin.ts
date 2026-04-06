/** Same origin strategy as useLiveScores — dev proxy avoids CORS; prod hits ESPN directly. */
export const ESPN_ORIGIN = import.meta.env.DEV ? '/api/espn' : 'https://site.api.espn.com'
