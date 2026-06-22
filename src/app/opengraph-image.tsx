import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Chandana S. Gowda · Senior Business Analyst'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f3ecdf',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: '#2e5a49',
              color: '#e9c879',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 38,
              fontWeight: 600,
            }}
          >
            CG
          </div>
          <div style={{ fontSize: 28, color: '#b07a2e', letterSpacing: 4 }}>
            SENIOR BUSINESS ANALYST
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, color: '#2e2620', lineHeight: 1.1 }}>
            Chandana S. Gowda
          </div>
          <div style={{ fontSize: 34, color: '#6b5d4f', marginTop: 24, maxWidth: 900 }}>
            Turning complex data into clear, defensible recommendations.
          </div>
        </div>

        <div style={{ fontSize: 26, color: '#8a7a66' }}>chandanasgowda.com</div>
      </div>
    ),
    { ...size }
  )
}
