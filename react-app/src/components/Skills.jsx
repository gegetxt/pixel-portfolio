// Pinned sticky-note skill cards.
export default function Skills({ skills, copy }) {
  return (
    <section id="skills" style={{ width: 'calc(100% - 40px)', maxWidth: 1120, margin: '56px auto 0', padding: 0, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 54 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 70, background: '#a8c5d6', border: '4px solid #5a7f96', borderRadius: 14, padding: '0 38px', boxShadow: '0 5px 0 rgba(70,100,120,.35)' }}>
          <h2 style={{ fontSize: 'clamp(30px,3.2vw,36px)', fontWeight: 700, lineHeight: 1.05, color: '#22414f', letterSpacing: 0 }}>{copy.title}</h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 300px),320px))', justifyContent: 'center', alignItems: 'stretch', gap: '48px 42px' }}>
        {skills.map((s) => (
          <div
            key={s.title}
            className="skill-card"
            style={{ position: 'relative', height: 280, background: s.color, borderRadius: 6, padding: '36px 32px 38px', boxShadow: '0 12px 20px rgba(120,90,60,.25)', transform: `rotate(${s.tilt})` }}
          >
            <span style={{ position: 'absolute', left: '50%', top: -12, transform: 'translateX(-50%)', width: 24, height: 24, borderRadius: '50%', background: s.pin, boxShadow: '0 4px 5px rgba(0,0,0,.3), inset -2px -2px 0 rgba(0,0,0,.15), inset 2px 2px 0 rgba(255,255,255,.5)' }} />
            <h3 style={{ fontSize: 'clamp(22px,2.2vw,25px)', fontWeight: 700, color: '#4a3018', marginBottom: 16, borderBottom: '2px dashed rgba(90,58,34,.4)', paddingBottom: 10, lineHeight: 1.2 }}>{s.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {(s.items || []).map((it) => (
                <span key={it} style={{ fontSize: 'clamp(15px,1.5vw,16px)', lineHeight: 1.25, color: '#4a3018', background: 'rgba(255,255,255,.48)', borderRadius: 7, padding: '5px 11px' }}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
