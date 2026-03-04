# Peer Review: Studio Carousel & Global Alignment

**Date:** March 4, 2026
**Author:** Claude (AI Pair Programmer)
**Reviewer request:** Romario Coffie
**Scope:** Batch 8 Mobile v9e–v9p

---

## Problem Definition

Romario's request across v9e–v9p sessions: make the homepage studio carousel work correctly across all viewports while maintaining global alignment consistency across all chrome layers (Nav, SubNav, Breadcrumbs) and page content. Specific issues:

1. Carousel cards clipped/overflowing at various breakpoints (524–767px especially)
2. Floating CTA missing on about section
3. SubNav "Overview" chip text off-center in active pill
4. Nav items cut off at 1024–1280px
5. Breadcrumbs misaligned with page titles
6. Section header misaligned with carousel (breakout approach)
7. Carousel flex min-content overflow at 524–767px

---

## Attempt Log

### v9e — Carousel Breakout (Failed)

Used `width: calc(100vw - 48px); margin-left: calc(-50vw + 50% + 24px)` to push carousel beyond `.inner` (680px). Created misalignment between header (in 680px `.inner`) and carousel (wider). Tested only at 900px.

### v9g — CTA Source Order Fix

Base `.mobileCta { display: none }` placed AFTER mobile media query → same specificity, later rule wins. Moved before both queries. Fixed for most sections; about still broken due to animation.

### v9h — SubNav Chip Centering (Failed)

`margin-left: -12px` on first chip inside `overflow-x: auto` parent. Negative margin clipped by scroll boundary. "Overview" text cut off.

### v9i — Carousel Symmetric Margins (Failed)

`.wrap margin: 0 -23px` + `.track padding: 0`. Both edges had gaps. `.page overflow-x: hidden` clips at padding-box inconsistently.

### v9j — CTA Animation Removal + Viewport Breakout

`animation: ctaFadeIn` with `fill-mode: both` kept CTA at `opacity: 0` if scoped `@keyframes` name didn't resolve. Removed animation. Changed carousel to `100vw` breakout.

### v9k — Content-Aligned Track Padding (Failed)

Track `padding-left: 23px/24px`. Header still at `.inner` position (110px from viewport at 900px) while carousel at viewport edge (24px). Visual mismatch.

### v9m — Container-Relative (Breakthrough)

Removed all breakout logic. Cards sized as % of container. Tablet 16:10 landscape. Header and carousel aligned inside `.inner`.

### v9n — Global Alignment Fix

Removed `chip:first-child { padding-left: 0 }`. Rewrote breadcrumbs to mirror `.rgrid` (not Nav). Added 1024–1280px compact desktop.

### v9o — Large Mobile Breakpoint + Breadcrumbs Longhand Bug

Added 524–767px breakpoint (70% width, 16:10). But missed: (a) flex min-content overflow issue in nested flex containers, (b) breadcrumbs used longhand `padding-top/bottom` which failed to preserve horizontal padding from other rules.

**Governance failure acknowledged:** Calculated dimensions but did NOT verify overflow containment chain. Did not check `min-width: auto` default on flex items propagating content width upward.

### v9p — Overflow Containment Fix (Current)

**Problem:** At 524–767px, `.track` (display:flex) contains cards whose total width exceeds container. Without `min-width: 0`, the flex minimum content size propagates UP through: `.track` → PhotoCarousel `.wrap` → `.mobileCarousel` → StudioMarketing `.wrap` (flex column). This can cause the carousel to expand beyond its allocated width.

**Fix:**
- StudioMarketing `.mobileCarousel`: `overflow: hidden; min-width: 0`
- PhotoCarousel `.wrap`: `overflow: hidden; min-width: 0`
- PhotoCarousel `.track`: `min-width: 0` (already has `overflow-x: auto`)

**Breadcrumbs fix:** Replaced longhand `padding-top`/`padding-bottom` with full shorthand at two mobile sub-ranges:
- `≤479px`: `padding: 10px 16px` (matches `.rgrid` 16px)
- `480–767px`: `padding: 10px 24px` (matches `.rgrid` 24px)

**Governance verification:**
- LAW 1: Brace balance verified (28/28, 30/30, 30/30)
- LAW 1: Overflow chain verified — `.track overflow-x:auto` creates independent scroll context, `.wrap overflow:hidden` is safety net only
- LAW 1: Breadcrumbs alignment verified at 375px (32px) and 500px (40px) matching `.rgrid`
- LAW 5: 3 files modified, 0 created
- LAW 6: Desktop unaffected (carousel hidden ≥1024px)

---

## Key Failures & Lessons

### 1. Viewport breakout (v9e–v9k) — 6 iterations

Never break content out of container with `100vw`. Container-relative sizing is predictable.

### 2. Animation for visibility (v9i–v9j) — 2 iterations

`fill-mode: both` + scoped `@keyframes` = invisible element if name resolution fails. Use explicit CSS properties for visibility.

### 3. Negative margin in overflow container (v9h) — 1 iteration

`overflow-x: auto` clips negative margins at scroll boundary.

### 4. Flex min-content propagation (v9o–v9p) — 1 iteration

**The governance failure:** Calculated card dimensions but didn't audit the flex containment chain. Flex items default to `min-width: auto` — when a flex row (.track) contains content wider than its parent, the minimum content size propagates upward through ancestor flex containers. Fix: `min-width: 0` on every intermediate container + `overflow: hidden` as safety.

### 5. CSS longhand vs shorthand cascade (v9o) — 1 iteration

`padding-top`/`padding-bottom` used to override vertical components of a shorthand. In CSS modules, declaration order may not match source order. Always use full shorthand at every breakpoint.

### 6. Wrong alignment reference frame (v9e–v9n) — Multiple

Breadcrumbs sit in `.main-content` (scrollable). Must mirror `.rgrid` padding, not Nav (fixed chrome).

### 7. Single-breakpoint testing (throughout)

Always test at min, mid, and max of each breakpoint range. For aspect-ratio content, verify at extreme viewport heights too.

---

## Definitive Breakpoint Map

### PhotoCarousel Cards

| Range | Card % | Aspect | Max Height |
|---|---|---|---|
| ≤374px | 85% | 3:4 | 372px |
| 375–523px | 88% | 3:4 | 561px |
| 524–767px | 70% | 16:10 | 315px |
| 768–1023px | 58% | 16:10 | 246px |
| ≥1024px | bento grid | — | — |

### Chrome (Nav, SubNav) — Fixed position

| Range | Padding |
|---|---|
| >1280px | 28px |
| 1024–1280px | 20px |
| 768–1023px | 24px |
| ≤767px | 16px |

### Content (Breadcrumbs, .rgrid) — Inside .main-content

| Range | Padding | .main-content adds | Total from viewport |
|---|---|---|---|
| <480px | 16px | 16px | 32px |
| 480–767px | 24px | 16px | 40px |
| 768–1023px | clamp(24,4vw,48) | 0 | clamp |
| 1024–1439px | clamp(24,4vw,64) | 0 | clamp |
| 1440px+ | 64px | 0 | 64px |

### Overflow Containment Chain (Carousel)

| Layer | Property | Purpose |
|---|---|---|
| .mobileCarousel | overflow:hidden; min-width:0 | Prevent flex min-content upward propagation |
| PhotoCarousel .wrap | overflow:hidden; min-width:0 | Safety — contain any overflow |
| .track | overflow-x:auto; min-width:0 | Horizontal scroll context for cards |

---

## Files Modified (v9e–v9p)

| File | Times Modified |
|---|---|
| PhotoCarousel.module.css | 9 |
| StudioMarketing.module.css | 8 |
| HomeViewer.module.css | 5 |
| SubNav.module.css | 5 |
| Breadcrumbs.module.css | 6 |
| Nav.module.css | 2 |
| About.module.css | 2 |
| GalleryViewer.module.css | 1 |
| page.module.css (case study) | 1 |
