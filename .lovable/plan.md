

## Plan: Telegram.org-style card backgrounds

Telegram.org uses a distinctive card style: cards with subtle gradient backgrounds (soft blue-to-purple, teal-to-blue tones), slight glassmorphism, and smooth radial glows — giving a premium, futuristic feel against a dark background.

### What will change

**1. Add utility classes to `src/index.css`**
- Add reusable gradient card background utilities:
  - `.card-gradient-blue` — soft blue-cyan radial gradient
  - `.card-gradient-purple` — blue-to-purple gradient
  - `.card-gradient-teal` — teal-to-cyan gradient
  - `.card-gradient-dark` — subtle dark with inner glow
- Add a subtle inner glow/noise texture overlay effect via `::before` pseudo-element

**2. Update card sections with gradient backgrounds**

| Section | File | Current style | New style |
|---------|------|--------------|-----------|
| FeaturesGrid | `FeaturesGrid.tsx` | `bg-card` flat | Alternating gradient backgrounds per card with subtle radial glow |
| UseCases | `UseCases.tsx` | `bg-card` flat | Gradient cards with colored glow blobs matching icon theme |
| TrustSection | `TrustSection.tsx` | `bg-card` flat | Soft gradient cards |
| PricingSection | `PricingSection.tsx` | `bg-card` flat | Gradient backgrounds, popular card gets brighter gradient |
| LeadMagnet | `LeadMagnet.tsx` | `bg-card` flat | Rich gradient with stronger glow |
| TelegramPosts | `TelegramPosts.tsx` | `bg-card` flat | Subtle gradient cards |
| AboutSection | `AboutSection.tsx` | `bg-card` flat | Gradient factoid cards |
| CTASection | `CTASection.tsx` | `bg-card` flat | Enhanced gradient |
| HowItWorks | `HowItWorks.tsx` | `bg-card` flat | Gradient placeholder card |

**3. Approach**
- Use CSS `background: radial-gradient(...)` and `linear-gradient(...)` with project's primary/secondary HSL colors at very low opacity (5-15%)
- Add subtle border glow on hover using `box-shadow` with primary color
- Keep existing border styling but enhance with `border-white/5` or `border-primary/10` overlays
- Cards will have a "frosted" layered gradient feel: dark base + colored radial spots in corners

**Files to modify**: `src/index.css` + all 9 section components listed above.

