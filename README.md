# UniWay — Almanya'da Eğitim Danışmanlık Platformu

UniWay is a Turkish-language student consulting website built for students who want to pursue higher education in Germany. It was founded by students currently studying in Germany, offering guidance based on real experience.

Live site: [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## Features

- **Home page** — Hero section, university logo carousel, services overview, timeline, Germany info bento grid
- **About Us** — Team story, stats strip, principles, vision, and CTA
- **Services**
  - Lisans (Bachelor's) — `/hizmetler/lisans`
  - Yüksek Lisans (Master's) — `/hizmetler/yuksek-lisans`
  - Almanca Eğitimi (coming soon)
- **FAQ (S.S.S.)** — Accordion-style frequently asked questions
- **Contact** — Split-panel contact form that sends emails via SMTP (Nodemailer)
- **Google Calendar booking** — All appointment buttons link directly to the team's booking page
- Fully **responsive** design (mobile + desktop)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | Heroicons v2 |
| Carousel | Swiper.js 11 |
| Email | Nodemailer 8 |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/zerobug-z/Student-Consultation-Website.git
cd Student-Consultation-Website
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
EMAIL_HOST=your_smtp_host
EMAIL_PORT=465
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_TO=recipient@example.com
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

---

## Project Structure

```
src/
└── app/
    ├── page.tsx                  # Home page
    ├── about-us/                 # About Us page
    ├── contact/                  # Contact page
    ├── sss/                      # FAQ page
    ├── hizmetler/
    │   ├── lisans/               # Bachelor's info page
    │   └── yuksek-lisans/        # Master's info page
    ├── api/contact/              # Email API route (Nodemailer)
    └── components/
        └── sections/
            ├── navbar.tsx
            ├── footer.tsx
            ├── hero.tsx
            ├── hizmetlerimiz.tsx
            ├── almanyaHakkinda.tsx
            ├── timeline.tsx
            ├── SSS.tsx
            └── form.tsx
```

---

## Deployment

The project is deployed on **Vercel**. Every push to the `main` branch triggers an automatic redeployment.

Make sure to add all environment variables from `.env.local` to your Vercel project settings under **Settings → Environment Variables**.

---

## Contact

**UniWay**
- Email: antonizarifoglu15@gmail.com
- Phone: +49 151 10443088
- Location: Darmstadt, Germany
