const options = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'GB' }
]

function PixelFlag({ code }) {
  if (code === 'tr') {
    return (
      <svg width="28" height="20" viewBox="0 0 34 24" aria-hidden="true" shapeRendering="crispEdges">
        <rect width="34" height="24" fill="#5b2b2b" />
        <rect x="2" y="2" width="30" height="20" fill="#d91f31" />
        <rect x="9" y="7" width="3" height="10" fill="#fff6e4" />
        <rect x="12" y="5" width="5" height="3" fill="#fff6e4" />
        <rect x="12" y="16" width="5" height="3" fill="#fff6e4" />
        <rect x="15" y="8" width="3" height="2" fill="#fff6e4" />
        <rect x="15" y="14" width="3" height="2" fill="#fff6e4" />
        <rect x="13" y="8" width="4" height="8" fill="#d91f31" />
        <rect x="16" y="10" width="2" height="4" fill="#d91f31" />
        <rect x="23" y="7" width="2" height="3" fill="#fff6e4" />
        <rect x="21" y="10" width="6" height="2" fill="#fff6e4" />
        <rect x="23" y="12" width="2" height="3" fill="#fff6e4" />
        <rect x="20" y="8" width="2" height="2" fill="#fff6e4" />
        <rect x="26" y="8" width="2" height="2" fill="#fff6e4" />
        <rect x="20" y="13" width="2" height="2" fill="#fff6e4" />
        <rect x="26" y="13" width="2" height="2" fill="#fff6e4" />
      </svg>
    )
  }

  return (
    <svg width="28" height="20" viewBox="0 0 34 24" aria-hidden="true" shapeRendering="crispEdges">
      <rect width="34" height="24" fill="#22304c" />
      <rect x="2" y="2" width="30" height="20" fill="#254a8f" />
      <polygon points="2,2 7,2 32,17 32,22 27,22 2,7" fill="#fff6e4" />
      <polygon points="32,2 27,2 2,17 2,22 7,22 32,7" fill="#fff6e4" />
      <polygon points="2,3 5,3 32,19 32,22 29,22 2,6" fill="#c93643" />
      <polygon points="32,3 29,3 2,19 2,22 5,22 32,6" fill="#c93643" />
      <rect x="14" y="2" width="6" height="20" fill="#fff6e4" />
      <rect x="2" y="9" width="30" height="6" fill="#fff6e4" />
      <rect x="16" y="2" width="2" height="20" fill="#c93643" />
      <rect x="2" y="11" width="30" height="2" fill="#c93643" />
    </svg>
  )
}

export default function LanguageSwitch({ language, labels, onChange }) {
  return (
    <div
      aria-label={labels.aria}
      role="group"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fff6e4', border: '3px solid #8a5230', borderRadius: 12, padding: 4, boxShadow: '0 4px 0 rgba(120,70,40,.28)' }}
    >
      {options.map((option) => {
        const active = language === option.code
        const title = labels[option.code]

        return (
          <button
            key={option.code}
            className="language-btn"
            type="button"
            aria-label={title}
            aria-pressed={active}
            onClick={() => onChange(option.code)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 42,
              minHeight: 30,
              cursor: 'pointer',
              background: active ? '#e8a05f' : '#fdf6e6',
              border: `2px solid ${active ? '#8a5230' : '#cB9a6a'}`,
              borderRadius: 8,
              color: active ? '#4a2c16' : '#7a5636',
              fontFamily: "'Pixelify Sans', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              lineHeight: 1,
              padding: '3px 6px',
              boxShadow: active ? 'inset 0 2px 0 rgba(255,255,255,.25)' : 'none'
            }}
          >
            <PixelFlag code={option.code} />
          </button>
        )
      })}
    </div>
  )
}
