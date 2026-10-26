# ADORA TECH — Digital Studio Website

Production-quality, responsive website for **ADORA TECH**, a digital product studio crafting exceptional websites, mobile apps, and custom software.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **GSAP (ScrollTrigger & Flip animation orchestration)**.

---

## Brand Aesthetic & Creative Direction

- **Main Background**: `#081B19` (Deep emerald green-black)
- **Elevated Surfaces**: `#102A26` / `#153833`
- **Primary Typography**: `#F1F3EB` (Soft ivory)
- **Muted Typography**: `#A4B7AF`
- **Neon Mint Accent**: `#8DE0C1`
- **Warm Copper Accent**: `#D5A17D`
- **Subtle Borders**: `rgba(164, 183, 175, 0.16)`

---

## Key Features & Motion Architecture

1. **Signature Opening Sequence**:
   - Begins with the ADORA TECH logo centered on a deep emerald canvas with ambient mint and copper halo glow.
   - Smoothly measures element coordinates dynamically and animates flight directly to its resting place in the fixed header.
   - Session-aware (`sessionStorage.getItem('adora_intro_seen_v1')`): Plays once per session and renders immediately on repeat visits.
   - Includes accessible **"Skip intro"** control (`Esc` key and clickable button) with safe focus management.
   - Automatically bypasses animation if `prefers-reduced-motion` is detected.

2. **Refined Header & Mobile Navigation**:
   - Fixed header with seamless integration into hero, transitioning to translucent backdrop blur on scroll (`scrollY > 24px`).
   - Accessible drawer navigation for mobile devices with focus trap, Escape dismissal, and smooth link staggers.

3. **Hero Section**:
   - Large editorial typography with subtle gradient accents.
   - Breathing neon ring emblem inspired by the circular "O" motif.
   - Desktop mouse parallax micro-movement (disabled on touch devices).

4. **Capabilities (Services)**:
   - Three cards: *Websites*, *Mobile Apps*, and *Custom Software*.
   - Bespoke iconography, deliverable checklists, and direct project type pre-fill buttons.

5. **Selected Work (Concept Studies)**:
   - Authentic interface mockups crafted in CSS/SVG:
     - **Aura Spatial Design**: Editorial architecture platform.
     - **Pulse Health Companion**: Biometric recovery & cadence mobile interface.
     - **Nexus Fleet Cloud**: Real-time dispatch & operations telemetry dashboard.
   - Transparently labeled as **Concept project** in accordance with honesty guidelines.
   - Accessible modal preview dialog with full keyboard navigation and focus restoration.

6. **Process**:
   - 4-step structured methodology: *Discover*, *Design*, *Build*, *Launch*.
   - Horizontal desktop progression and vertical mobile timeline.

7. **About**:
   - Grounded brand vision and 3 core design principles.
   - Geometric vector ring composition echoing the neon emblem.

8. **Contact Form & Honest Backend**:
   - Persistent accessible labels and client-side validation.
   - Dedicated Next.js App Router API endpoint (`/api/contact`) with honeypot spam protection.
   - **Honest delivery feedback**: Clearly identifies unconfigured email environments and offers a quick "Copy enquiry text" action.
   - Fully configurable with live email delivery via `RESEND_API_KEY`.

---

## Local Development & Configuration

### Prerequisites
- Node.js 18+ (Node 24 tested)
- npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables (Optional)
To enable live email dispatch for the contact form, create a `.env.local` file:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_NOTIFICATION_EMAIL=your_inbox@example.com
```
Without these variables, the form operates in honest demonstration mode, validating all inputs and providing copy-to-clipboard functionality.
