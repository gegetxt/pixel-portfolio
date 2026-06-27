# Cozy Pixel Portfolio — React frontend

Vite + React port of Gizem's room-themed portfolio. All content
(projects, skills, contact, speech-bubble phrases) is loaded from a
Spring Boot backend, with bundled sample data as a fallback so the UI
still renders while the API is down.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
```

In dev, requests to `/api/*` are proxied to `http://localhost:8080`
(see `vite.config.js`), so no CORS setup is needed. Start your Spring
Boot app on port 8080 and the frontend picks it up automatically.

For production, set `VITE_API_BASE` (see `.env.example`) to your
deployed API base, e.g. `https://api.gizem.dev/api`.

## Project structure

```
src/
  api.js              fetch helpers (fetchProjects/Skills/Contact/TalkPhrases)
  sampleData.js       fallback content + the canonical JSON shapes
  App.jsx             loads data, holds state (lights, modal, bubble timer)
  components/
    RoomHero.jsx      animated room, speech bubble, clickable hotspots
    About.jsx
    Projects.jsx      project grid -> opens ProjectModal
    Skills.jsx
    Contact.jsx       mail / linkedin / phone buttons
    ProjectModal.jsx  "Cozy Planner" detail window
public/
  room-anim.gif       room animation
  avatar.png          about-section avatar
```

## API contract (what the Spring Boot backend must return)

### `GET /api/projects` → `ProjectDto[]`
```jsonc
{
  "num": "01",
  "star": "⭐",                 // "" if none
  "color": "#f6cdd0",           // card fill
  "border": "#cf8e94",          // card border / accent
  "title": "XCardia — ...",
  "short": "kısa açıklama",     // card text  (JSON key: short OR shortText)
  "desc": "uzun açıklama",      // modal text (JSON key: desc  OR description)
  "tags": ["Python", "FastAPI"],
  "github": "https://github.com/...",
  "live": null                  // string URL or null
}
```

### `GET /api/skills` → `SkillDto[]`
```jsonc
{
  "title": "Frontend",
  "color": "#f6c2c8",           // note background
  "pin": "#d96a7e",             // pushpin color
  "tilt": "-3deg",              // CSS rotation
  "items": ["React.js", "Redux"]
}
```

### `GET /api/contact` → `ContactDto`
```jsonc
{
  "email": "gizemgunduz77@gmail.com",
  "linkedin": "https://www.linkedin.com/in/gizem-g-4b48a1245/",
  "phone": "0506 198 25 30"
}
```

### `GET /api/talk-phrases` → `string[]`
```json
["kod yazıyorum ☕", "hoş geldin!", "projelerime göz at →"]
```

## Spring Boot DTO note

`short` and `desc` are awkward in Java (`short` is a reserved word).
Use `shortText` / `description` as record components and map them to the
JSON keys the frontend prefers:

```java
public record ProjectDto(
    String num, String star, String color, String border, String title,
    @JsonProperty("short") String shortText,
    @JsonProperty("desc")  String description,
    List<String> tags, String github, String live
) {}
```

(The frontend also reads `shortText` / `description` directly, so either
naming works.)

Presentation-only fields (`color`, `border`, `tilt`, `pin`) can live in
the DB or be assigned in the backend — whatever you prefer. Keeping them
server-side means the theme is fully data-driven.
