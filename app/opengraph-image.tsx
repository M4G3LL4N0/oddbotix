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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #4f46e5, #9333ea)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          OddBotix
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 300,
            color: '#ffffffaa',
            letterSpacing: '-0.025em',
          }}
        >
          Experimental Robotics
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
