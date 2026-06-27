export default function About({ copy }) {
  return (
    <section style={{ width: 'calc(100% - 40px)', maxWidth: 1040, margin: '0 auto', padding: 0, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 28, background: '#fbf1d6', border: '5px solid #cB9a6a', borderRadius: 22, padding: 'clamp(22px,4vw,28px)', boxShadow: '0 8px 0 rgba(150,110,70,.22)' }}>
        <img src="/avatar.png" alt="Gizem avatar" style={{ width: 140, height: 'auto', flex: 'none', filter: 'drop-shadow(0 5px 0 rgba(150,110,70,.25))', animation: 'cozyBob 4s ease-in-out infinite' }} />
        <div style={{ flex: '1 1 360px', minWidth: 0 }}>
          <h2 style={{ fontSize: 'clamp(30px,3.4vw,36px)', fontWeight: 700, color: '#4a2c16', marginBottom: 12, lineHeight: 1.15, overflowWrap: 'anywhere' }}>{copy.title}</h2>
          <p style={{ fontSize: 'clamp(18px,2vw,20px)', lineHeight: 1.75, color: '#5e3c22', overflowWrap: 'anywhere', textWrap: 'pretty' }}>
            {copy.text}
          </p>
        </div>
      </div>
    </section>
  )
}
