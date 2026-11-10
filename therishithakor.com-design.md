---
version: alpha
name: Tanmay Jain Personal Portfolio
description: A warm, minimal personal portfolio system with editorial typography and soft monochrome contrast.
colors:
  primary: "#1a1818"
  secondary: "#a4552c"
  tertiary: "#d5cdca"
  neutral: "#e8e4e0"
  surface: "#f4f1ee"
  on-surface: "#1a1818"
  muted: "#8e8783"
  border: "#e5e7eb"
  overlay: "#ffffffcc"
  shadow: "#000000"
  error: "#b42318"
typography:
  headline-display:
    fontFamily: Onest
    fontSize: 76px
    fontWeight: 600
    lineHeight: 91px
    letterSpacing: -1.52px
  headline-lg:
    fontFamily: Onest
    fontSize: 54.4px
    fontWeight: 600
    lineHeight: 65px
    letterSpacing: -1.904px
  headline-md:
    fontFamily: Onest
    fontSize: 34.4px
    fontWeight: 600
    lineHeight: 37.152px
    letterSpacing: -0.688px
  headline-sm:
    fontFamily: Onest
    fontSize: 18px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: Onest
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Onest
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  body-sm:
    fontFamily: Onest
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
  label-lg:
    fontFamily: Onest
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: Onest
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: Onest
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  nav-link:
    fontFamily: Onest
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 28px
  lg: 48px
  xl: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "48px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: "0px"
    height: "24px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "48px"
  chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  navbar-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.full}"
    padding: "0px"
  toast:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "12px 16px"
---

# Tanmay Jain Personal Portfolio

## Overview
This system feels intimate, polished, and quietly confident, with a soft editorial mood rather than a loud marketing voice. It suits a personal portfolio for a freelancer or creative technologist who wants to feel approachable but still highly professional. The page is spacious, calm, and centered around a strong hero presentation with subtle warmth in the background and accents.

## Colors
- **Primary (#1A1818):** The deep charcoal ink used for main headings, body copy, interactive text, and the strongest contrast moments. It gives the interface a refined, near-black tone without feeling harsh.
- **Secondary (#A4552C):** A restrained burnt sienna accent that can be used sparingly for emphasis, highlights, or personal branding moments. It adds warmth against the otherwise monochrome palette.
- **Tertiary (#D5CDCA):** A soft warm gray for borders, quiet UI outlines, and subdued button edges. It keeps surfaces delicate and understated.
- **Neutral (#E8E4E0):** The dominant page background and card base color. This is a warm stone-like neutral that makes the layout feel breathable and tactile.
- **Surface (#F4F1EE):** A lighter off-white layer for raised UI, popovers, or inputs when you need a slightly brighter separation from the main background.
- **On-surface (#1A1818):** The default readable text color on light surfaces. It should stay consistent with the primary ink tone for clarity.
- **Muted (#8E8783):** A softer gray for helper text, meta labels, and secondary navigation details like timestamps or status text.
- **Border (#E5E7EB):** A very light neutral border for cards, panels, and low-emphasis dividers when the design needs structure without visual weight.
- **Overlay (#FFFFFFCC):** A translucent white overlay for floating UI, glassy labels, or subtle softening above imagery.
- **Error (#B42318):** Reserved for validation, destructive actions, or system messaging; it should remain rare in this mostly calm palette.

## Typography
Onest is the sole typographic voice, which keeps the brand modern, human, and very readable. Headings use 600 weight with tight negative letter spacing for a compact, editorial presence; the large hero titles rely on dramatic scale and confident rhythm. Body and labels stay lighter in weight, with straightforward spacing and no decorative casing treatment, which keeps the interface clean and approachable.

- **headline-display / headline-lg:** Used for hero statements and the most prominent page titles. These should feel bold, condensed in rhythm, and visually anchored.
- **headline-md / headline-sm:** Used for supporting section headers, card titles, and strong in-page hierarchy.
- **body-lg / body-md / body-sm:** Used for descriptive copy, metadata, helper text, and smaller UI notes.
- **label-lg / label-md / label-sm / nav-link:** Used for navigation, buttons, chips, and compact interface text. Letter spacing remains neutral; there is no uppercase styling requirement visible in the source.

## Layout
The layout is fluid and open, with a large amount of negative space framing a centered hero composition. Content sits in a wide desktop canvas rather than a strict narrow container, and spacing expands generously between the top navigation, hero copy, and portrait area. Use a loose rhythm based on the spacing tokens: 8px for micro gaps, 16px for component padding, 28px for section separation, 48px for strong vertical breathing room, and 112px for major page whitespace.

Primary sections should feel horizontally balanced rather than stacked too tightly. Cards and overlays should use modest internal padding and avoid dense grid behavior; the design works best when elements have room to float.

## Elevation & Depth
Depth is created mostly through soft shadows, layering, and tonal separation rather than strong elevation systems. The interface uses subtle drop shadows on floating elements like the notepad-style hero card and the cookie banner, while the background remains flat and warm. Borders are light and secondary; they reinforce edges without making the UI feel boxy.

Use shadow contrast to imply hierarchy: stronger shadow for hero objects and modal-like surfaces, lighter or no shadow for simple cards and navigation items. This system should never feel glossy or heavy; depth is tactile, understated, and almost paper-like.

## Shapes
The shape language is soft and friendly, with rounded pills for most interactive elements and small, measured radii for cards and panels. Full rounding (`9999px`) is common for buttons, chips, and status pills, while cards sit at `8px` for a grounded but gentle feel. Overall, the design mixes organic roundness with editorial structure rather than sharp technical corners.

## Components
- **Buttons:** Primary buttons (`button-primary`) are dark-filled pills with light text, used for the strongest actions. Secondary buttons (`button-secondary`) are outlined or transparent pills for quieter actions. Tertiary buttons (`button-tertiary`) are text-only and should feel minimal. Keep button height at 48px with 8px 16px padding, and maintain a clear hover state through contrast changes rather than complex motion.
- **Cards:** Cards (`card`) use the neutral background, a 1px border, and 8px rounding. Padding should stay moderate at 16px, with very restrained or no shadow unless the card is meant to float above the page.
- **Inputs:** Inputs should resemble calm pill controls with `rounded.full`, light surface fills, and clear focus states. They should align visually with buttons so the interface feels consistent and cohesive.
- **Chips / Tags:** Chips (`chip`) are compact pills with dark fill and light text, suitable for labels like “My ability card.” Keep them small, legible, and unobtrusive.
- **Navbar links:** Navigation links (`navbar-link`) are plain, text-first elements with no background fill. They should remain lightweight and evenly spaced across the top row.
- **Toast / Banner surfaces:** Floating messages such as the cookie banner (`toast`) should use a dark surface with light text and a pill-like silhouette, preserving the site’s soft contrast language.
- **Hero presentation blocks:** Large statement panels should feel like stacked paper or notepad elements: light surface, deep shadow, rounded corners, and generous internal spacing.

## Do's and Don'ts
- Do keep the palette restrained and warm, with primary ink, neutral surfaces, and only occasional accent use.
- Do preserve the spacious desktop-first composition; let the hero breathe.
- Do use Onest consistently across headings, labels, navigation, and controls.
- Do favor pill buttons and soft corners to match the interface’s calm personality.
- Don't introduce saturated bright colors that break the subdued portfolio tone.
- Don't use heavy gradients, glassmorphism, or overly decorative shadows.
- Don't tighten spacing so much that the layout feels cramped or dense.
- Don't mix in a second type family unless there is a strong brand reason.