import { useState } from 'react'

// Contact buttons: Gmail, LinkedIn, phone.
const btn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 126,
  height: 86,
  borderRadius: 16,
  textDecoration: 'none'
}

export default function Contact({ contact, copy }) {
  const [showPhone, setShowPhone] = useState(false)
  const { email, linkedin, phone } = contact || {}
  const gmailHref = email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}` : undefined

  return (
    <section id="contact" style={{ width: 'calc(100% - 40px)', maxWidth: 1040, margin: '56px auto 0', padding: '0 0 18px', boxSizing: 'border-box' }}>
      {/* pill header */}
      <div style={{ display: 'flex', justifyContent: 'center',marginTop: 65, marginBottom: 52 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 78, background: '#edab97', border: '4px solid #b5705c', borderRadius: 18, padding: '0 58px', boxShadow: '0 5px 0 rgba(150,85,65,.3)' }}>
          <h2 style={{ fontSize: 'clamp(34px,3.4vw,40px)', fontWeight: 700, lineHeight: 1.05, color: '#6e3a2a', letterSpacing: 0 }}>{copy.title}</h2>
        </div>
      </div>

      <p style={{ fontSize: 'clamp(19px,2vw,22px)', lineHeight: 1.65, color: '#5e3c22', textAlign: 'center', margin: '0 auto 34px', maxWidth: 620, overflowWrap: 'anywhere', textWrap: 'pretty' }}>
        {copy.text}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 34, flexWrap: 'wrap' }}>
        {/* Mail */}
        <a className="contact-btn" href={gmailHref} target="_blank" rel="noopener noreferrer" title={email} aria-label={copy.mailAria} style={{ ...btn, background: '#efb6b0', border: '4px solid #bf7d74', boxShadow: '0 5px 0 rgba(150,80,70,.3)' }}>
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#8a4f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="M3 6l9 6.5L21 6" /></svg>
        </a>

        {/* LinkedIn */}
        <a className="contact-btn" href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ ...btn, background: '#c4d79c', border: '4px solid #87a85f', boxShadow: '0 5px 0 rgba(100,130,70,.3)' }}>
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#4a6a32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A5 5 0 0 1 16 8z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
        </a>

        {/* Phone */}
        <button type="button" className="contact-btn" onClick={() => setShowPhone(true)} title={phone} aria-label={copy.phoneAria} style={{ ...btn, cursor: 'pointer', background: '#aacfe0', border: '4px solid #6a93ab', boxShadow: '0 5px 0 rgba(70,100,120,.3)' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#36637e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 46 }}>
        <span style={{ fontFamily: "'Pixelify Sans'", fontWeight: 700, fontSize: 'clamp(13px,1.35vw,15px)', color: '#a07a52', letterSpacing: 0, textAlign: 'center' }}>{copy.footer}</span>
      </div>

      {showPhone && (
        <div onClick={() => setShowPhone(false)} style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(50,30,15,.45)', backdropFilter: 'blur(2px)' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: 440, maxWidth: 'calc(100vw - 40px)', background: '#fdf6e6', border: '5px solid #6b4226', borderRadius: 18, boxShadow: '0 12px 0 rgba(70,45,25,.35)', fontFamily: "'Pixelify Sans', sans-serif", overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', background: '#aacfe0', borderBottom: '4px solid #6b4226', padding: '10px 14px' }}>
              <button type="button" onClick={() => setShowPhone(false)} aria-label={copy.close} style={{ cursor: 'pointer', width: 32, height: 32, border: '3px solid #6b4226', borderRadius: 7, background: '#fff6e4', color: '#6b4226', fontWeight: 700, fontSize: 18, lineHeight: 1 }}>x</button>
            </div>
            <div style={{ padding: '28px 26px 32px', textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(19px,4.8vw,24px)', lineHeight: 1.45, color: '#4a2c16', fontWeight: 700, marginBottom: 14 }}>
                {copy.phoneText}
              </p>
              <p style={{ fontSize: 'clamp(24px,6vw,32px)', lineHeight: 1.2, color: '#36637e', fontWeight: 700, overflowWrap: 'anywhere' }}>
                {phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
