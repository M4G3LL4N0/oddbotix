# Project Recovery Notes

## Startup Identity
- Startup name: OddBotix
- Project folder: /Users/joshuadavis/startups/oddbotix
- Domain: oddbotix.com
- One-line description: Experimental robotics venture building motion-intelligent systems for environments where conventional machines fail.
- Category: Robotics / Motion Intelligence / Deep Tech
- Stage: demo_ready

## Product Vision
- Target user: Industrial infrastructure operators, defense and security teams, disaster response organizations, subterranean infrastructure operators, strategic robotics partners, and deep-tech investors.
- Core problem: Conventional robots fail in constrained, hazardous, irregular, subterranean, or operationally complex environments because familiar movement models are too brittle.
- Core solution: OddBotix builds mission-oriented robotic systems with abnormal locomotion, adaptive machine movement, and motion intelligence.
- Differentiation: OddBotix starts from movement constraints and environment complexity rather than generic robotics archetypes.
- MVP goal: Premium investor-ready product website showing the system family, technology thesis, applications, and strategic narrative.
- Long-term vision: Build a motion stack spanning robotic systems, adaptive body logic, simulation-to-field learning, deployment telemetry, motion policy libraries, and future licensing or OEM opportunities.

## Website/App Structure
- Main routes: /, /about, /applications, /careers, /contact, /deck, /investor-memo, /investor-summary, /investors, /mission, /partners, /platform, /press, /roadmap, /systems, /systems/obx-1, /systems/obx-2, /systems/obx-3, /systems/obx-4, /systems/obx-5, /technology, /thesis
- Key components: Local page-level BackgroundLayers helpers, local card/row helper components, app/footer.tsx.
- Data/content files: Content is currently embedded in route files. No separate data directory.
- API routes: None after cleanup.
- Auth/database needs: None for current MVP.

## Design Direction
- Visual style: Dark cinematic robotics skunkworks aesthetic with navy/black backgrounds, glass panels, subtle cyan/violet/orange accents, precise borders, and strong hierarchy.
- Tone: Premium, technical, restrained, investor-grade, and deep-tech.
- Layout principles: Generous spacing, clean primary navigation, responsive card grids, strong page endings, and CTA consistency.
- Brand notes: Preserve OddBotix, OBX taxonomy, motion intelligence framing, and Noaerth portfolio positioning. Avoid toy robotics, generic SaaS, dashboards, and unverified hardware claims.

## What Was Preserved
- Useful pages: Full route set for homepage, about, mission, systems, OBX detail pages, technology, platform, applications, investor pages, partners, careers, roadmap, press, contact, deck, and Open Graph image.
- Useful components: Local BackgroundLayers pattern, footer, local card rows and page helper components.
- Useful copy: Movement intelligence thesis, OBX system family, deep-tech robotics positioning, platform story.
- Useful assets: Existing public SVG assets plus added grid.svg and grid-pattern.svg background assets.
- Useful technical decisions: Next.js App Router, TypeScript, Tailwind CSS, framer-motion, lucide-react, pnpm lockfile, self-contained pages, no shadcn dependency.

## What Was Fixed
- Build issues: Production build passed after source hardening and dependency cleanup.
- TypeScript issues: Typecheck passed.
- Dependency issues: Removed unused Supabase dependency and stale backend placeholder surface. pnpm is the only package manager.
- Routing issues: Removed unused placeholder checkout API route. Homepage is now native content instead of a full-page external iframe.
- Design/content issues: Strengthened homepage, softened unverifiable claims, repaired dead CTA buttons, aligned investor/press/career/system copy with OddBotix product truth, added missing grid assets, and improved metadata/root handling.

## What Was Removed
- Generated artifacts: node_modules, .next, .turbo, .vercel/cache, dist/build-style outputs if present, caches, logs, empty folders.
- Duplicate files: npm lockfiles are absent; package-lock.json remains deleted.
- Broken code: Removed placeholder checkout API route and unused Supabase client.
- Unused dependencies: @supabase/supabase-js.
- Large files: No source/public/content files over 25 MB remained after cleanup.

## Current Build Status
- pnpm install: Passed before final cleanup. Re-run required because node_modules was intentionally removed.
- pnpm lint: Passed.
- pnpm typecheck: Passed via pnpm type-check.
- pnpm build: Passed.
- Vercel readiness: Ready for manual Vercel deployment after fresh pnpm install and pnpm build.

## Manual Deploy Command
cd /Users/joshuadavis/startups/oddbotix
pnpm install
pnpm build
vercel --prod

## Return-Later Commands
cd /Users/joshuadavis/startups/oddbotix
pnpm install
pnpm build

## Next Best Tasks
1. Add stronger product visuals and system comparison sections without adding fragile dependencies.
2. Create Tailwind-only motion/system diagrams for technology and platform pages.
3. Tighten OBX detail pages into a consistent premium template.
4. Add real prototype media or clearly labeled concept visuals when available.
5. Integrate OddBotix into the Noaerth portfolio site once that repo context is available.

## Autobuilder Guardrails
- Do not: Add shadcn imports, missing shared aliases, auth/database, ecommerce, fake telemetry, fake hardware claims, automatic deployment, or npm.
- Preserve: OddBotix name, OBX system family, motion intelligence thesis, premium dark robotics aesthetic, pnpm setup, and foundation files.
- Improve next: Product concreteness, visual proof, system comparison, metadata, CTA consistency, and investor narrative precision.
- Avoid drift toward: Generic SaaS, consumer toy robotics, fake dashboards, vague AI startup copy, or unrelated Noaerth automation content.
