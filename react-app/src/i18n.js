export const uiCopy = {
  tr: {
    metaTitle: 'Gizem Gündüz | Pixel Portfolyo',
    language: {
      aria: 'Dil seçimi',
      tr: 'Türkçe',
      en: 'İngilizce'
    },
    hero: {
      badge: 'PORTFOLYO',
      role: 'Fullstack Geliştirici',
      roomAlt: "Gizem'in cozy çalışma odası — konuşan kız ve kedi animasyonu",
      projectsAria: 'Projelerime git',
      skillsAria: 'Yeteneklerime git',
      lightsAria: 'Işıkları aç/kapat',
      scrollHint: '↓ ekrana, notlara ya da ışıklara tıkla — ya da kaydır ↓'
    },
    projects: {
      title: 'Projelerim',
      details: 'Detayları gör',
      openAria: 'detaylarını aç'
    },
    skills: {
      title: 'Yeteneklerim'
    },
    contact: {
      title: 'İletişim',
      text: 'Bir projede çalışmak, sohbet etmek ya da sadece selam vermek için kapım açık!',
      footer: 'kahve ve piksellerle - gizem 2026',
      mailAria: 'Gmail ile mail gönder',
      phoneAria: 'Telefon numarasını göster',
      phoneText: 'Beni bu numaradan arayabilirsiniz:',
      close: 'Kapat'
    },
    modal: {
      title: 'Proje detayı',
      close: 'Kapat',
      technologies: 'Teknolojiler',
      live: 'Canlı Demo'
    }
  },
  en: {
    metaTitle: 'Gizem Gündüz | Pixel Portfolio',
    language: {
      aria: 'Language selector',
      tr: 'Turkish',
      en: 'English'
    },
    hero: {
      badge: 'PORTFOLIO',
      role: 'Fullstack Developer',
      roomAlt: "Gizem's cozy work room — animated talking character and cat",
      projectsAria: 'Go to my projects',
      skillsAria: 'Go to my skills',
      lightsAria: 'Turn the lights on or off',
      scrollHint: '↓ tap the screen, notes, or lights — or scroll ↓'
    },
    projects: {
      title: 'My Projects',
      details: 'View details',
      openAria: 'open details'
    },
    skills: {
      title: 'Skills'
    },
    contact: {
      title: 'Contact',
      text: 'My door is open for project ideas, a quick chat, or just a friendly hello.',
      footer: 'made with coffee & pixels - gizem 2026',
      mailAria: 'Send an email with Gmail',
      phoneAria: 'Show phone number',
      phoneText: 'You can call me at:',
      close: 'Close'
    },
    modal: {
      title: 'Project details',
      close: 'Close',
      technologies: 'Technologies',
      live: 'Live Demo'
    }
  }
}

const localizedValue = (value, language) => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] ?? value.tr ?? value.en ?? ''
  }

  return value ?? ''
}

export const localizeAbout = (about = {}, language) => ({
  title: localizedValue(about.title, language),
  text: localizedValue(about.text, language)
})

export const localizeProjects = (projects = [], language) =>
  projects.map((project) => ({
    ...project,
    title: localizedValue(project.title, language),
    short: localizedValue(project.short, language),
    desc: localizedValue(project.desc, language)
  }))

export const localizeSkills = (skills = [], language) =>
  skills.map((skill) => ({
    ...skill,
    title: localizedValue(skill.title, language)
  }))

export const localizeTalkPhrases = (phrases = {}, language) => {
  if (Array.isArray(phrases)) return phrases
  return phrases[language] ?? phrases.tr ?? phrases.en ?? []
}
