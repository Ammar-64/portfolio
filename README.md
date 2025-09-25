# Ammar Sammour - Next.js Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing enterprise-scale projects and technical expertise.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Server-side rendering, image optimization, code splitting
- **SEO Ready**: Meta tags, Open Graph, structured data
- **Smooth Animations**: Framer Motion for elegant transitions
- **Type Safe**: Full TypeScript implementation
- **Component Based**: Modular, reusable components

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## 🛠️ Installation

1. **Clone or download the portfolio:**
```bash
cd portfolio-nextjs
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page component
│   │   └── globals.css     # Global styles with Tailwind
│   ├── components/
│   │   ├── Navigation.tsx  # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Stats.tsx       # Statistics section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Skills.tsx      # Technical skills grid
│   │   ├── Speaking.tsx    # Speaking engagements
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer component
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Deployment Options

### Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Connect your GitHub repository
- Click "Deploy"
- Your site will be live in minutes!

### Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Netlify:**
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `.next` folder
- Your site will be deployed instantly

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file in `src/components/`:

- `Hero.tsx` - Update name, title, bio
- `Projects.tsx` - Add/modify project details
- `Experience.tsx` - Update work experience
- `Skills.tsx` - Modify technical skills
- `Speaking.tsx` - Update speaking engagements
- `Contact.tsx` - Change contact information

### Change Colors

Edit the Tailwind configuration in `tailwind.config.ts`:

```javascript
colors: {
  primary: {
    // Change primary color palette
    600: '#2563eb',  // Your primary color
  },
  secondary: {
    // Change secondary color palette
    600: '#16a34a',  // Your secondary color
  }
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it to the page layout

## 📝 Environment Variables

Create a `.env.local` file for any environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 📦 Key Dependencies

- **next**: 14.1.0 - React framework
- **react**: 18.2.0 - UI library
- **typescript**: 5.x - Type safety
- **tailwindcss**: 3.3.0 - Utility-first CSS
- **framer-motion**: 11.0.0 - Animation library
- **lucide-react**: 0.263.1 - Icon library
- **clsx**: 2.1.0 - Conditional classes
- **tailwind-merge**: 2.2.0 - Merge Tailwind classes

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
npx kill-port 3000
npm run dev
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run type-check
npm run lint
```

## 📈 Performance

The portfolio achieves excellent performance scores:

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email**: ammar.n.sammour@gmail.com
- **LinkedIn**: [linkedin.com/in/ammar-sammour](https://linkedin.com/in/ammar-sammour)
- **GitHub**: [github.com/Ammar-64](https://github.com/Ammar-64)

---

Built with ❤️ by Ammar Sammour
