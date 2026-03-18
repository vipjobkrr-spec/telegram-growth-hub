

## Plan: Enhanced hover glow effect for cards

The current `.card-tg-hover` already exists but is subtle (30px box-shadow at 15% opacity, border at 25%). To match the Telegram.org premium hover style, we need a more pronounced, layered glow effect.

### Changes

**1. `src/index.css` — Enhance `.card-tg-hover`**

Replace the current hover styles with a richer, multi-layered effect:
- Add `transition` for `transform` (slight lift on hover)
- Multi-layered `box-shadow`: inner glow + outer glow + spread
- Brighter border color transition (primary at 40%)
- Slight `translateY(-2px)` lift
- Add variant hover glows that match each card gradient type (blue cards glow blue, purple glow purple, teal glow teal)

**Specific CSS:**
- `.card-tg-hover:hover` — outer glow `0 0 40px -10px` + inner `0 0 15px -5px inset` at primary color, border at 40% opacity, translateY(-2px)
- `.card-tg-blue.card-tg-hover:hover` — blue-tinted glow
- `.card-tg-purple.card-tg-hover:hover` — purple-tinted glow  
- `.card-tg-teal.card-tg-hover:hover` — teal-tinted glow

**Only file modified:** `src/index.css` (lines 102-108)

