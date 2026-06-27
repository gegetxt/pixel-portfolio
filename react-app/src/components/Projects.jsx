// Project grid. Cards open the ProjectModal on click.
// Tolerant to backend field naming: short|shortText.
export default function Projects({ projects, copy, onOpen }) {
  return (
    <section id="projects" style={{ width: 'calc(100% - 40px)', maxWidth: 1040, margin: '56px auto 0', padding: 0, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 52 }}>
        <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 70, background: '#e8a05f', border: '4px solid #8a5230', borderRadius: 14, padding: '0 38px', boxShadow: '0 5px 0 rgba(120,70,40,.35)' }}>
          <span style={{ position: 'absolute', left: -22, top: '50%', transform: 'translateY(-50%)', fontSize: 22, animation: 'sway 3s ease-in-out infinite' }}>🌿</span>
          <span style={{ position: 'absolute', right: -22, top: '50%', transform: 'translateY(-50%)', fontSize: 22, animation: 'sway 3s ease-in-out infinite .4s' }}>🌿</span>
          <h2 style={{ fontSize: 'clamp(30px,3.2vw,36px)', fontWeight: 700, lineHeight: 1.05, color: '#4a2c16', letterSpacing: 0 }}>{copy.title}</h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 290px),1fr))', alignItems: 'stretch', gap: 28 }}>
        {projects.map((p) => {
          const short = p.short ?? p.shortText ?? ''
          const tags = p.tags || []
          return (
            <button
              key={p.num + p.title}
              className="proj-card"
              onClick={() => onOpen(p)}
              aria-label={`${p.title} ${copy.openAria}`}
              style={{ height: '100%', textAlign: 'left', cursor: 'pointer', background: p.color, border: `3px solid ${p.border}`, borderRadius: 18, padding: 9, boxShadow: '0 6px 0 rgba(150,110,70,.28)', fontFamily: "'Pixelify Sans', sans-serif" }}
            >
              <div style={{ height: '100%', background: '#fdf6e6', border: `3px solid ${p.border}`, borderRadius: 12, padding: '20px 20px 18px', minHeight: 232, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: "'Silkscreen'", fontSize: 12, color: '#fff6e4', background: p.border, padding: '5px 8px', borderRadius: 8 }}>{p.num}</span>
                  <span style={{ fontSize: 17 }}>{p.star}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(20px,2vw,22px)', fontWeight: 700, color: '#4a2c16', lineHeight: 1.25, marginBottom: 12, overflowWrap: 'anywhere' }}>{p.title}</h3>
                <p style={{ fontSize: 'clamp(15px,1.5vw,17px)', lineHeight: 1.55, color: '#6e4a2c', opacity: .95, flex: 1, overflowWrap: 'anywhere', textWrap: 'pretty' }}>{short}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 15 }}>
                  {tags.slice(0, 3).map((t) => (
                    <span key={t} style={{ fontSize: 13, lineHeight: 1.2, color: '#5a3a22', background: p.color, border: `2px solid ${p.border}`, borderRadius: 8, padding: '4px 8px', overflowWrap: 'anywhere' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, marginTop: 16, color: p.border, fontSize: 15, fontWeight: 700 }}>
                  <span>{copy.details}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
