# AGENTS.md

## Project overview
This repository is a static marketing website for Trust Legal Corporate, built with React, TypeScript, Vite, and Tailwind CSS. The app is designed as a premium legal-services brand experience with a heritage-minimalism aesthetic.

Key technologies:
- React 19 + TypeScript
- Vite for dev/build
- Tailwind CSS v4
- shadcn-style UI primitives under `client/src/components/ui`
- Wouter for client-side routing
- Express server for static hosting in production

## Important directories
- `client/src/App.tsx` — app shell and route setup
- `client/src/pages/` — page components for the website
- `client/src/components/` — shared UI and layout components
- `client/src/index.css` — global styles and design tokens
- `client/src/contexts/` — theme/context providers
- `server/index.ts` — static server used in production build
- `shared/` — shared constants or utilities

## Working conventions
- Prefer small, reusable React components and straightforward TypeScript types.
- Keep UI consistent with the established legal-brand aesthetic: restrained palette, elegant typography, generous whitespace, and understated hover/focus states.
- Use Tailwind utility classes for styling rather than ad hoc CSS when possible.
- Follow the existing component naming pattern used in the project (`PascalCase` for components, kebab-case for utility files where appropriate).
- Do not add unnecessary libraries or framework churn. Keep modifications minimal and targeted.
- Preserve mobile-first responsiveness and accessibility.

## Brand and design requirements
- Brand colors should stay anchored to deep navy, warm gold accents, off-white backgrounds, and charcoal content text.
- Typography and spacing should feel premium and professional, not startup-heavy.
- Avoid loud animations, heavy gradients, or cluttered layouts.
- Respect reduced-motion preferences and keep interaction feedback subtle.

## Commands
From the repository root:
- `pnpm install` — install dependencies
- `pnpm dev` — run Vite dev server
- `pnpm build` — production build; also bundles the Express server
- `pnpm check` — TypeScript validation
- `pnpm format` — format project files

## Validation
Before considering a change complete:
- run the relevant validation command for the edited area
- prefer `pnpm check` for TypeScript issues when making code changes
- if a UI change is broad, validate the app still builds with `pnpm build`

## Routing and app behavior
- The app uses client-side routing with Wouter.
- The server serves the built static app and falls back to `index.html` for unknown client routes.
- Keep route paths and page components coherent with the existing marketing-site navigation.

## Avoid
- Replacing the project with a generic starter template.
- Adding backend complexity unless the task explicitly requires it.
- Breaking the static-site deployment model or production server assumptions.
- Introducing heavy dependency changes without clear justification.

## Notes for future agents
This project is a polished brand site rather than a CRUD app. Favor visual fidelity, content structure, spacing, and brand consistency over feature sprawl. If a task is ambiguous, prefer the legal-services design language already established in the existing pages and styling system.
