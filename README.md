# 🚀 Alejo Rostata — Full Stack Software Engineer & Team Lead Portfolio

![Alejo Rostata Portfolio](https://portfolio-orpin-six-31.vercel.app/og-image.jpg)

Bespoke, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Tiptap Rich Text Editor**, **Resend API**, and **GoatCounter Analytics**.

**Live Site**: [https://portfolio-orpin-six-31.vercel.app/](https://portfolio-orpin-six-31.vercel.app/)

---

## 🌟 Key Highlights & Features

- **💼 Senior Leadership Focus**: Built for showcasing nearly a decade of experience across full-stack engineering, microservices, mobile apps, and engineering team leadership (KPIs, PAF, 1-on-1 mentorship).
- **🌍 7-Locale Internationalization (i18n)**: Seamless live language switching across **English**, **Spanish (Español)**, **German (Deutsch)**, **Japanese (日本語)**, **Korean (한국어)**, **Chinese (中文)**, and **Filipino**.
- **✍️ Tiptap Rich Text Compose**: Integrated email compose field with formatting toolbar (Bold, Italics, Code, Headings, Bullet/Numbered Lists, Quotes, Divider Lines, Links, and Inline Image Pasting/Insertion).
- **📎 Multi-File Attachment System**: Supports up to 5 safe file attachments (PDF, DOCX, PNG, JPG, TXT up to 10MB total) with real-time file size validation and individual removal controls.
- **📬 Resend Email API**: Production contact form delivery with customized headers (`X-Entity-Ref-ID`, `Auto-Submitted: no`) configured for direct Gmail **Primary** inbox routing.
- **📊 Real-Time GoatCounter Analytics**: Authenticated live visitor counter querying GoatCounter's `/api/v0/stats/total` API.
- **🛡️ 100% WCAG AAA Accessibility**: Fully keyboard navigable, high-contrast dark/light modes, WAI-ARIA 1.2 dialog semantics, zero unlinked label warnings, and screen reader skip links (`<SkipLink>`).
- **📱 100% Mobile Responsive**: Perfectly tuned for all viewport sizes (320px to 4K displays).

---

## 🛠 Tech Stack Matrix

### Core & Frameworks
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Rich Text Engine**: [Tiptap Core](https://tiptap.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Email Delivery**: [Resend API](https://resend.com/)
- **Analytics**: [GoatCounter](https://www.goatcounter.com/)
- **Deployment**: [Vercel](https://vercel.com/)

### Experience & Featured Engineering Technologies
- **Languages & Frameworks**: Java (Spring Boot), C# / .NET, PHP / Laravel, Node.js / Express, Python, Next.js, Vue.js, React, React Native, Flutter, Electron.js.
- **Databases & Caching**: Supabase (PostgreSQL), MariaDB, MySQL, CouchDB, PouchDB, Redis, Liquibase.
- **APIs & Cloud Integrations**: REST APIs, GraphQL, Twilio API, Google Maps API, Stripe Payments, Resend Email API, AWS Services, Docker, Nginx, Janus WebRTC, RabbitMQ.
- **DevOps & Delivery Tools**: Git, Jira, Jenkins CI/CD, JFrog, Gradle.
- **Leadership & Methodology**: Engineering Team Leadership, Team KPIs Management, Performance Appraisal Frameworks (PAF), 1-on-1 Mentorship, Agile Scrum.

---

## 📂 Project Architecture

```
portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Resend email API with attachment processing & custom headers
│   │   └── visitors/route.ts     # Authenticated GoatCounter stats API route
│   ├── globals.css               # Base Tailwind CSS, Tiptap styles & custom focus rings
│   ├── layout.tsx                # MetadataBase, OpenGraph tags, ThemeProvider & LanguageProvider
│   ├── page.tsx                  # Main portfolio single-page application layout
│   ├── robots.ts                 # Robots.txt route handler
│   └── sitemap.ts                # Dynamic sitemap.xml route handler
├── components/
│   ├── ContactSection.tsx        # Contact form with Tiptap compose & 5-file attachment dropzone
│   ├── EducationLeadership.tsx   # Master of Science degree & leadership achievements
│   ├── ExperienceSection.tsx     # Career progression timeline (~10 years)
│   ├── Footer.tsx                # Footer with live GoatCounter stats & quick links
│   ├── Header.tsx                # Navigation header with locale selector & theme toggle
│   ├── HeroSection.tsx           # Hero section with interactive console widget
│   ├── ProjectsSection.tsx       # Filterable showcase of SaaS & enterprise projects
│   ├── ResumeModal.tsx           # Fullscreen PDF resume viewer with download & share CTAs
│   ├── RichTextEditor.tsx        # Customized Tiptap rich text compose component
│   └── SkillsSection.tsx         # Interactive matrix of 30+ categorized technical skills
├── context/
│   ├── LanguageContext.tsx       # Global i18n locale context provider
│   └── ThemeContext.tsx          # Light/dark mode theme context provider
├── data/
│   ├── cvData.ts                 # Master technical data, experiences, projects & skills
│   ├── localizedCvData.ts        # Dynamic localization helper functions
│   └── translations/             # Locale dictionaries (en, es, de, ja, ko, zh, fil)
├── public/                       # Static assets, PDF resume & 1200x630 OpenGraph social image
└── types/                        # TypeScript schemas for i18n & portfolio data models
```

---

## 🚀 Environment Setup & Deployment

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/alejorostata/portfolio.git
cd portfolio
pnpm install
```

### 2. Configure Environment Variables (`.env.local`)

```env
RESEND_API_KEY=your_resend_api_key_here
GOATCOUNTER_API_TOKEN=your_goatcounter_token_here
```

### 3. Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Type Verification

```bash
pnpm build
```

---

## 📜 License

MIT © [Alejo Rostata](https://portfolio-orpin-six-31.vercel.app/)
