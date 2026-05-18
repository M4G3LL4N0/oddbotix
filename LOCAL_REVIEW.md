# Local review — oddbotix

**Live:** https://oddbotix.noaerth.com  
**Status:** DEMO — sample data; not production metrics.

## Quick start

```bash
cd /Users/joshuadavis/startups/oddbotix
pnpm install   # if needed
pnpm dev
```

## Routes to inspect

| Route | What to verify |
|-------|----------------|
| `/` | Hero, OBX systems preview, investor-safe positioning |
| `/systems` | OBX-1 through OBX-5 product lines |
| `/applications` | Use-case clarity |
| `/technology` | Capabilities without overclaiming deployment |
| `/investors` | Deck links; no fake traction metrics |
| `/contact` | Working form or mailto |

## Acceptance criteria

- [ ] Answers in 10s: what, who, pain, action, trust
- [ ] Mobile nav usable; no broken layout
- [ ] Demo/sample outputs clearly labeled
- [ ] No fake customer counts, revenue, or compliance claims
- [ ] `pnpm build` passes locally

## Proof loop (fastest validation)

1. Run the primary demo flow once end-to-end with sample data.
2. Capture one screenshot or export for review.
3. Note one hypothesis to test with a real user this week.

## Limitations

- Public metrics are illustrative unless marked PROVEN in `startupjourney.md`.
- High-stakes decisions require human professional review where applicable.
