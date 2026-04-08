import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const alt = 'OddBotix - Experimental Robotics'
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            width: '150%',
            height: '150%',
            background: 'radial-gradient(circle at center, #111111 0%, #000000 70%)',
            opacity: 0.9,
            filter: 'blur(0.5px)',
          }}
        />
        
        {/* Main title */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1,
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 0 30px rgba(34,211,238,0.7)'
          }}
        >
          <span style={{ 
            background: 'linear-gradient(90deg, #fff, #a5f3fc)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            ODDBOTIX
          </span>
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: '#a5f3fc',
            letterSpacing: '0.05em',
            position: 'relative',
            zIndex: 1,
            marginTop: 12,
            textTransform: 'uppercase'
          }}
        >
          Motion Intelligence Systems
        </div>
        
        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)',
            opacity: 0.2,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
