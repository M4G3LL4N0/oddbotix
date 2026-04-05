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
            opacity: 0.8,
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
          }}
        >
          OddBotix
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            opacity: 0.8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Experimental Robotics
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
