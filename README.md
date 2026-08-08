# HuFF-1000 — publicera som PWA

## Vad det här är
En färdig Vite + React-app med PWA-stöd (installerbar på hemskärmen, ikon, offline-cache).
Allt du behöver för att lägga upp den på GitHub och publicera via Vercel.

## Steg 1 — Skapa konton (gratis)
1. github.com → skapa konto
2. vercel.com → skapa konto (logga in med GitHub, går snabbast)

## Steg 2 — Lägg upp koden på GitHub
1. Gå till github.com → **New repository**
2. Namnge den t.ex. `huff1000-app` → Create repository
3. Ladda upp alla filer i den här mappen (dra och släpp fungerar i GitHubs webbgränssnitt under "uploading an existing file")

## Steg 3 — Koppla till Vercel
1. Logga in på vercel.com → **Add New Project**
2. Välj ditt `huff1000-app`-repo från GitHub
3. Vercel känner automatiskt igen att det är ett Vite-projekt — lämna inställningarna som de är
4. Tryck **Deploy**

Efter ett par minuter får du en länk typ `huff1000-app.vercel.app` — det är din riktiga, fristående webbadress. Testa att öppna den och lägga till på hemskärmen.

## Steg 4 — Egen domän (valfritt)
1. Köp en domän hos t.ex. Loopia, One.com eller Namecheap (~100–150 kr/år)
2. I Vercel: Project → Settings → Domains → lägg till din domän
3. Vercel visar exakt vilka DNS-poster (CNAME/A-record) du ska lägga in hos din domänleverantör
4. Kan ta upp till några timmar innan det slår igenom

## Att uppdatera appen i framtiden
1. Be Claude om ändringen (som vanligt)
2. Ladda upp den uppdaterade `src/App.jsx` till samma GitHub-repo (ersätt filen)
3. Vercel bygger och publicerar automatiskt inom någon minut — samma länk visar nya innehållet

## Filstruktur
```
huff1000-pwa/
├── index.html          ← startsida, kopplar in manifest + service worker
├── package.json        ← beroenden (React, Tailwind, Vite)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── manifest.json   ← PWA-metadata (namn, ikon, färger)
│   ├── sw.js            ← service worker (offline-cache)
│   └── icons/           ← app-ikoner i olika storlekar
└── src/
    ├── main.jsx         ← startpunkt
    ├── App.jsx          ← själva HuFF-1000-appen
    └── index.css        ← Tailwind
```

## Att tänka på
- Lagringen (senaste val av ålder/tema) sparas nu i webbläsarens `localStorage` istället för Claudes lagrings-API, så det fungerar utanför Claude
- Ikonerna är genererade från er klubblogga med röd bakgrund (#7A1620)
