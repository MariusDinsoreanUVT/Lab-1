# Figma Authentication Interface Design

## Design Overview
A modern, responsive authentication interface designed in Figma with a two-panel layout (branding on left, form on right). The design includes reusable button components and consistent design tokens.

## Design Tokens

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #5c2a9d | Primary buttons, accents, borders |
| `--color-secondary` | #8e44ad | Gradient backgrounds, hover states |
| `--color-background` | #f5f7fa | Page background |
| `--color-surface` | #ffffff | Card/panel backgrounds |
| `--color-text-primary` | #333333 | Primary text |
| `--color-text-secondary` | #666666 | Secondary text |
| `--color-border` | #e0e0e0 | Form borders |
| `--color-success` | #27ae60 | Success states |
| `--color-error` | #e74c3c | Error states |
| `--color-warning` | #f39c12 | Warning states |

### Spacing Scale (8px base)
| Token | Value |
|-------|-------|
| `--spacing-xs` | 4px |
| `--spacing-sm` | 8px |
| `--spacing-md` | 16px |
| `--spacing-lg` | 24px |
| `--spacing-xl` | 32px |

### Typography
| Token | Value |
|-------|-------|
| `--font-family-base` | System fonts (iOS/Mac/Windows native) |
| `--font-size-xs` | 12px |
| `--font-size-sm` | 14px |
| `--font-size-base` | 16px |
| `--font-size-lg` | 18px |
| `--font-size-xl` | 24px |

### Borders & Shadows
| Token | Value |
|-------|-------|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--shadow-sm` | 0 2px 4px rgba(0,0,0,0.1) |
| `--shadow-md` | 0 4px 8px rgba(0,0,0,0.12) |
| `--shadow-lg` | 0 8px 16px rgba(0,0,0,0.15) |

## Reusable Components

### Button Component
**States:** Default, Hover, Focus, Active, Disabled

**Variants:**
- **Primary Button** (`.btn-primary`): Full-width, purple gradient background, white text
- **Secondary Button** (`.btn-secondary`): Outline style, purple border, transparent background
- **Social Button** (`.btn-social`): Light gray background for social login options

**CSS Class:** `.btn` + variant modifier

### Text Input Component
- Base styles: Full-width, 16px font, 8px border-radius
- Focus state: Purple border with subtle shadow (0 0 0 3px rgba(92, 42, 157, 0.1))
- Placeholder: Light gray text

### Form Group Component
- 16px bottom margin for spacing
- Label above input field
- Consistent padding and alignment

## Layout: Two-Panel Authentication Frame

### Desktop (≥768px)
- 50/50 grid split: Left panel (branding) | Right panel (form)
- Left panel visible with gradient background
- Right panel: centered form, max-width 400px

### Tablet/Mobile (<768px)
- Single column layout
- Left panel hidden
- Full-width form with padding

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: ≥ 768px
- Large: ≥ 1200px

## Component Instances in Main Frame

1. **Primary Button** (Sign In) - instances: 1
   - Reused across forms
   - Consistent styling and behavior

2. **Secondary Button** (Create Account) - instances: 1
   - Paired with primary button
   - Outline style variant

3. **Social Buttons** (Google, GitHub) - instances: 2
   - Reused component
   - Grid layout with gap

4. **Text Input Fields** - instances: 2
   - Email input
   - Password input

## CSS Export

The design tokens and component styles have been exported to `figma-auth.css` with:
- CSS Custom Properties (Variables) for all design tokens
- Reusable component classes
- Responsive breakpoints
- Consistent spacing and typography
- Accessible focus states

## Design System Benefits

1. **Consistency**: All elements use the same color palette, spacing, and typography
2. **Scalability**: New pages can use the same component system
3. **Accessibility**: Proper color contrast, focus states, and semantic HTML
4. **Maintainability**: Centralized design tokens for easy updates
5. **Responsiveness**: Mobile-first approach with flexible grid layouts

## Implementation

The authentication interface is implemented in `assets/figma-auth-demo.html` demonstrating:
- Full responsive design
- All reusable components
- Design tokens in action
- Proper semantic HTML structure
- CSS Grid and Flexbox layouts
