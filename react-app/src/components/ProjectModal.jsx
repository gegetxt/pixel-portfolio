// "Cozy Planner" project detail modal.
// Tolerant to backend field naming: desc|description, short|shortText.
export default function ProjectModal({ project, copy, onClose }) {
  const p = project
  const desc = p.desc ?? p.description ?? p.short ?? p.shortText ?? ''
  const tags = p.tags || []

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, boxSizing: 'border-box', background: 'rgba(50,30,15,.55)', backdropFilter: 'blur(2px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: 700, maxWidth: 'calc(100vw - 40px)', minWidth: 0, maxHeight: 'calc(100vh - 40px)', boxSizing: 'border-box', background: '#fdf6e6', border: '5px solid #6b4226', borderRadius: 18, boxShadow: '0 14px 0 rgba(70,45,25,.4)', overflow: 'auto', animation: 'popIn .22s ease', fontFamily: "'Pixelify Sans', sans-serif" }}
      >
        {/* title bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: p.border, padding: '12px 16px', borderBottom: '4px solid #6b4226' }}>
          <span style={{ color: '#fff6e4', fontWeight: 700, fontSize: 18, lineHeight: 1, textShadow: '0 2px 0 rgba(70,45,25,.28)' }}>{copy.title}</span>
          <button onClick={onClose} aria-label={copy.close} style={{ cursor: 'pointer', width: 32, height: 32, border: '3px solid #6b4226', borderRadius: 7, background: '#fff6e4', color: '#6b4226', fontWeight: 700, fontSize: 18, lineHeight: 1 }}>x</button>
        </div>

        {/* body */}
        <div style={{ padding: 'clamp(24px,4vw,34px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ fontFamily: "'Silkscreen'", fontSize: 14, color: '#fff6e4', background: p.border, padding: '5px 10px', borderRadius: 8 }}>{p.num}</span>
            <span style={{ fontSize: 18 }}>{p.star}</span>
          </div>
          <h3 style={{ fontSize: 'clamp(26px,3.2vw,32px)', fontWeight: 700, color: '#4a2c16', lineHeight: 1.2, marginBottom: 18, overflowWrap: 'anywhere' }}>{p.title}</h3>
          <p style={{ fontSize: 'clamp(17px,2vw,19px)', lineHeight: 1.75, color: '#5e3c22', marginBottom: 24, overflowWrap: 'anywhere', textWrap: 'pretty' }}>{desc}</p>

          <div style={{ fontSize: 16, fontWeight: 700, color: '#a07a52', letterSpacing: 0, marginBottom: 10 }}>{copy.technologies}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 26 }}>
            {tags.map((t) => (
              <span key={t} style={{ maxWidth: '100%', fontSize: 15, color: '#5a3a22', background: p.color, border: `2px solid ${p.border}`, borderRadius: 8, padding: '6px 12px', overflowWrap: 'anywhere' }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a className="modal-action" href={p.github} target="_blank" rel="noopener noreferrer" style={{ flex: '1 1 180px', minWidth: 0, textAlign: 'center', textDecoration: 'none', background: '#cbb3d4', border: '4px solid #8a6ba0', borderRadius: 12, padding: '13px 14px', boxShadow: '0 4px 0 rgba(110,80,130,.3)', fontWeight: 700, fontSize: 16, color: '#42295a' }}>GitHub</a>
            {p.live && (
              <a className="modal-action" href={p.live} target="_blank" rel="noopener noreferrer" style={{ flex: '1 1 180px', minWidth: 0, textAlign: 'center', textDecoration: 'none', background: '#b5c98f', border: '4px solid #7a945a', borderRadius: 12, padding: '13px 14px', boxShadow: '0 4px 0 rgba(100,120,70,.3)', fontWeight: 700, fontSize: 16, color: '#3a4a22' }}>{copy.live}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
