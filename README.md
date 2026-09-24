# Ben du Toit — Portfolio

Stack: React + TypeScript + Tailwind CSS (Vite).

## Run locally

```
npm install
npm run dev
```

## Build for production

```
npm run build
```

Output goes to `dist/`. Deploy `dist/` to Vercel, Netlify, or any static host.

## Before you publish — remaining items

- **Screenshots**: `src/components/SelectedWork.tsx` currently doesn't render the project screenshots even though `src/data/projects.ts` has them wired up — decide whether to bring the `<img>` back in.
- **StockAura GitHub link**: currently points at your GitHub profile — update to the exact repo URL if it differs.
- **FurTherapy live demo**: no link is shown since it isn't currently live. Add one back into `src/data/projects.ts` (the `demo` field) once it's redeployed.

## Notes on content decisions

- "Currently Building" features **FurTherapy** (in progress), and **StockAura** is presented as feature-complete in Selected Work — this reflects your latest project status rather than the original brief's assumption that StockAura was the current build. Swap these back if you'd rather feature StockAura as the active build.
- Only StockAura and FurTherapy get full case studies, since they're your most substantial, real projects. Your other projects (TicketFlow, MediTrack, Job Tracker) aren't included since you're no longer developing them — happy to add lightweight entries for these if you want them mentioned somewhere.
