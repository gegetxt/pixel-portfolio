// The cozy room hero: animated GIF + speech bubble + invisible hotspots.
// Hotspots: monitor -> projects, sticky notes -> skills, string lights -> toggle.
import LanguageSwitch from './LanguageSwitch'

const dot = (delay) => ({
  width: 6, height: 6, borderRadius: '50%', background: '#b88a5a',
  display: 'inline-block', animation: `dotBlink 1.2s ease-in-out infinite ${delay}`
})

const hotspot = {
  position: 'absolute', background: 'transparent', border: 'none',
  outline: 'none', borderRadius: 10, cursor: 'pointer', padding: 0, zIndex: 6
}

const heroGap = 18
const heroMaxWidth = 1040
const roomHeight = 'min(calc(66.667vw - 26.667px), 693px, calc(100vh - 174px))'
const pixelFont = "'Pixelify Sans', sans-serif"

export default function RoomHero({ talkText, language, copy, languageLabels, onLanguageChange, lightsOn, onToggleLights, onGoProjects, onGoSkills }) {
  return (
    <section style={{ position: 'relative', width: 'calc(100% - 40px)', maxWidth: heroMaxWidth, margin: '0 auto', padding: '16px 0 0', boxSizing: 'border-box' }}>
      {/* top name bar */}
      <div className="hero-topline" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 56, marginBottom: heroGap }}>
        <div className="hero-language" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
          <LanguageSwitch language={language} labels={languageLabels} onChange={onLanguageChange} />
        </div>
        <div className="hero-title-wrap" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 clamp(84px, 11vw, 112px)', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 15, maxWidth: '100%', background: '#e8a05f', border: '4px solid #8a5230', borderRadius: 17, padding: '11px 24px', boxShadow: '0 5px 0 rgba(120,70,40,.35)', textAlign: 'center' }}>
            <span style={{ fontFamily: "'Silkscreen'", fontSize: 12, letterSpacing: 0, color: '#fff3df', background: '#c47a3e', padding: '6px 10px', borderRadius: 8, border: '2px solid #8a5230' }}>{copy.badge}</span>
            <span style={{ fontFamily: pixelFont, fontWeight: 700, fontSize: 'clamp(21px,3.8vw,34px)', color: '#4a2c16', lineHeight: 1, whiteSpace: 'nowrap' }}>Gizem Gündüz</span>
            <span style={{ fontFamily: pixelFont, fontWeight: 600, fontSize: 'clamp(13px,1.9vw,17px)', color: '#5e3c22', opacity: .85, lineHeight: 1 }}>· {copy.role}</span>
          </div>
        </div>
      </div>

      {/* room frame */}
      <div style={{ position: 'relative', width: '100%', height: roomHeight, border: '6px solid #6b4226', borderRadius: 18, overflow: 'hidden', boxShadow: '0 12px 0 rgba(90,55,30,.3), 0 0 0 3px #f8edd0 inset', lineHeight: 0 }}>
        <img src="/room-anim.gif" alt={copy.roomAlt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />

        {/* LIGHTS OFF: cool dim overlay */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(28,22,54,.42), rgba(18,14,42,.6))', mixBlendMode: 'multiply', transition: 'opacity .55s ease', opacity: lightsOn ? 0 : 1 }} />

        {/* LIGHTS ON: warm string-light glow */}
        <div style={{ position: 'absolute', left: '55%', top: '1%', width: '44%', height: '20%', pointerEvents: 'none', background: 'radial-gradient(ellipse at center, rgba(255,206,110,.6), transparent 70%)', animation: 'glowPulse 3.4s ease-in-out infinite', mixBlendMode: 'screen', transition: 'opacity .55s ease', opacity: lightsOn ? 1 : 0 }} />
        {/* LIGHTS ON: soft warm room wash */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 80% 16%, rgba(255,190,90,.28), transparent 45%)', mixBlendMode: 'screen', transition: 'opacity .55s ease', opacity: lightsOn ? 1 : 0 }} />

        {/* dust motes */}
        <div style={{ position: 'absolute', left: '30%', top: '60%', width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,240,200,.9)', animation: 'mote 7s linear infinite' }} />
        <div style={{ position: 'absolute', left: '48%', top: '70%', width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,240,200,.8)', animation: 'mote 9s linear infinite 1.5s' }} />
        <div style={{ position: 'absolute', left: '20%', top: '65%', width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,240,200,.7)', animation: 'mote 8s linear infinite 3s' }} />

        {/* GIRL talking bubble — the tail is anchored over the hair-part. */}
        <div className="talk-anchor" style={{ position: 'absolute', right: '19.5%', top: '26.5%', width: 0, height: 0, zIndex: 5 }}>
          <div className="talk-bubble" style={{ position: 'absolute', left: 0, bottom: 11, transform: 'translateX(-50%)', maxWidth: 'min(390px, calc(100vw - 64px))', width: 'max-content', background: '#fff6e4', color: '#5a3a22', border: '4px solid #8a5230', borderRadius: 16, padding: '12px 16px', boxShadow: '0 5px 0 rgba(120,70,40,.3)', whiteSpace: 'nowrap' }}>
            <span className="talk-content" style={{ display: 'inline-flex', alignItems: 'center', fontSize: 'clamp(15px,1.65vw,18px)', fontWeight: 600, lineHeight: 1.35, whiteSpace: 'nowrap' }}>
              <span>{talkText}</span>
              <span className="talk-dots" style={{ display: 'inline-flex', flex: '0 0 auto', gap: 4, marginLeft: 6, verticalAlign: 'middle' }}>
                <span style={dot('0s')} />
                <span style={dot('.2s')} />
                <span style={dot('.4s')} />
              </span>
            </span>
            <span className="talk-tail" style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 16, height: 16, background: '#fff6e4', borderRight: '4px solid #8a5230', borderBottom: '4px solid #8a5230' }} />
          </div>
        </div>

        {/* HOTSPOT: Monitor -> Projects */}
        <button onClick={onGoProjects} aria-label={copy.projectsAria} style={{ ...hotspot, left: '56.5%', top: '33%', width: '23%', height: '25%' }} />
        {/* HOTSPOT: Sticky notes -> Skills */}
        <button onClick={onGoSkills} aria-label={copy.skillsAria} style={{ ...hotspot, left: '55%', top: '13%', width: '18.5%', height: '18%' }} />
        {/* HOTSPOT: String lights -> toggle on/off */}
        <button onClick={onToggleLights} aria-label={copy.lightsAria} style={{ ...hotspot, left: '58%', top: '2%', width: '40%', height: '13%' }} />
      </div>

      {/* scroll hint */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: `${heroGap}px 0` }}>
        <span style={{ display: 'block', width: 'min(100%, calc(100vw - 96px))', fontFamily: pixelFont, fontWeight: 700, fontSize: 'clamp(15px,1.65vw,18px)', letterSpacing: 0, lineHeight: 1.5, color: '#8a5230', opacity: .9, textAlign: 'center', overflowWrap: 'anywhere', textWrap: 'balance' }}>{copy.scrollHint}</span>
      </div>
    </section>
  )
}
