import { useEffect, useState, useCallback } from 'react'
import RoomHero from './components/RoomHero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import { localizeAbout, localizeProjects, localizeSkills, localizeTalkPhrases, uiCopy } from './i18n'

const emptyContent = {
  about: {},
  talkPhrases: {},
  projects: [],
  skills: [],
  contact: {}
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolioLanguage') || 'tr')
  const [content, setContent] = useState(emptyContent)
  const [selected, setSelected] = useState(null)
  const [lightsOn, setLightsOn] = useState(true)
  const [talk, setTalk] = useState(0)
  const copy = uiCopy[language] || uiCopy.tr
  const about = localizeAbout(content.about, language)
  const localizedProjects = localizeProjects(content.projects, language)
  const localizedSkills = localizeSkills(content.skills, language)
  const talkPhrases = localizeTalkPhrases(content.talkPhrases, language)
  const selectedProject = selected
    ? localizedProjects.find((project) => project.num === selected.num) || selected
    : null

  // Editable portfolio content lives in public/data/content.json.
  useEffect(() => {
    fetch('/data/content.json')
      .then((res) => {
        if (!res.ok) throw new Error(`content.json -> HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setContent({ ...emptyContent, ...data }))
      .catch((error) => {
        console.error('Portfolio content could not be loaded.', error)
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolioLanguage', language)
    document.documentElement.lang = language
    document.title = copy.metaTitle
  }, [language, copy.metaTitle])

  useEffect(() => {
    setTalk(0)
  }, [language])

  // Rotate the speech-bubble text.
  useEffect(() => {
    const id = setInterval(
      () => setTalk((t) => (t + 1) % (talkPhrases.length || 1)),
      3600
    )
    return () => clearInterval(id)
  }, [talkPhrases])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div
      style={{
        fontFamily: "'Pixelify Sans', sans-serif",
        color: '#5a3a22',
        background: '#f3e2bd',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      <RoomHero
        talkText={talkPhrases[talk] || ''}
        language={language}
        copy={copy.hero}
        languageLabels={copy.language}
        onLanguageChange={setLanguage}
        lightsOn={lightsOn}
        onToggleLights={() => setLightsOn((v) => !v)}
        onGoProjects={() => scrollTo('projects')}
        onGoSkills={() => scrollTo('skills')}
      />
      <About copy={about} />
      <Projects projects={localizedProjects} copy={copy.projects} onOpen={setSelected} />
      <Skills skills={localizedSkills} copy={copy.skills} />
      <Contact contact={content.contact} copy={copy.contact} />
      {selectedProject && <ProjectModal project={selectedProject} copy={copy.modal} onClose={() => setSelected(null)} />}
    </div>
  )
}
