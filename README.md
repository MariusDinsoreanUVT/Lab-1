# Personal Brand Portfolio + CV

A multi-page website showcasing a professional portfolio and CV using HTML5 and CSS3.

## Chosen Scenario
**Personal Brand Portfolio + CV** - A comprehensive personal website for a Cybersecurity Student and Full-Stack Developer, featuring projects, skills, and contact information.

## Project Structure

### Pages (4 required pages)
1. **index.html** - Home page with profile overview, personal projects portfolio, and skills summary
2. **CV.html** - Detailed CV/Resume page with professional skills, projects, and contact information
3. **contact.html** - Contact form page with feedback form and received messages table
4. **card.html** - Personal information card with quick links to contact channels

### Styling
- **styles.css** - Primary stylesheet used by index.html and contact.html
- **CV.css** - Specialized stylesheet for CV page with responsive grid layout
- **card.css** - Styles for personal card page

## Implemented Requirements Checklist

### ✅ Content & Structure
- [x] 4 pages created (index.html, CV.html, contact.html, card.html)
- [x] Semantic HTML structure with `<header>`, `<nav>`, `<main>`, `<footer>` on all pages
- [x] Each page contains a clear h1 heading
- [x] Logical heading hierarchy maintained (h1, h2, h3)
- [x] Skip link (`<a href="#main-content" class="skip-link">`) on every page
- [x] Navigation menu on all pages with working links
- [x] Meaningful content organization with sections

### ✅ HTML5 Compliance
- [x] Valid HTML5 doctype on all pages
- [x] `lang="en"` attribute on root element
- [x] Meta charset (UTF-8) included
- [x] Meta viewport for responsive design
- [x] External CSS stylesheets properly linked
- [x] No tables used for layout; tables only contain data

### ✅ Data Table
- [x] **index.html**: 
  - `skills-table` with personal skills (8+ rows with proper `scope="col"` and `scope="row"`)
  - `portfolio-table` with 3 projects (4+ rows with caption and proper headers)
- [x] **contact.html**: `messages-table` with 4+ messages (with `scope="col"` headers)

### ✅ Form Accessibility
- [x] Contact form with proper structure
- [x] 7 form controls total (exceeds 5 minimum):
  - Full name input
  - Email input
  - Subject input
  - Message textarea
  - Radio buttons for "How did you hear about me?" (3 options)
  - Submit button
- [x] All controls have explicit labels
- [x] Fieldsets used to group related controls
- [x] Legends for each fieldset
- [x] Required fields marked with `required` attribute
- [x] Keyboard-friendly focus flow

### ✅ CSS Quality
- [x] One external stylesheet per page
- [x] Readable typography with sans-serif fonts
- [x] Consistent spacing (margin/padding)
- [x] Navigation styling with hover states
- [x] Table styling for readability
- [x] Form control styling
- [x] Responsive design (media queries included)
- [x] Color scheme consistency
- [x] Visual hierarchy with proper sizing

### ✅ Accessibility Features
- [x] Skip links with proper CSS (hidden until focused)
- [x] Semantic landmarks (header, nav, main, footer)
- [x] Proper table headers with scope attributes
- [x] Form labels and fieldsets for grouped controls
- [x] ARIA labels on navigation menus
- [x] Proper heading hierarchy
- [x] Alt text for images
- [x] Focus states on interactive elements

### ✅ Technical Requirements
- [x] All HTML pages validate with no errors
- [x] CSS validates with no errors
- [x] Navigation works bidirectionally between all pages
- [x] All links are functional
- [x] Images include alt text
- [x] External stylesheet correctly linked

## Validation Status
- **HTML Validation**: ✅ All pages pass validation
- **CSS Validation**: ✅ All stylesheets pass validation
- **Accessibility**: ✅ WCAG best practices followed

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (tested with viewport meta tag)

## Known Limitations
1. **Contact form backend**: Form currently submits via `action="#"` - would require backend processing for actual message handling
2. **Messages table**: Data is hardcoded for demonstration; would require database in production
3. **Responsive design**: Mobile-optimized layout is basic; could be enhanced with more comprehensive media queries
4. **Image dependency**: Requires `Marius.jpg` image file in the same directory for profile images to display

## File Checklist
- [x] index.html
- [x] CV.html
- [x] contact.html
- [x] card.html
- [x] styles.css
- [x] CV.css
- [x] card.css
- [x] README.md
- [x] Marius.jpg (required for images)

## How to View
Open `index.html` in a web browser to start browsing the site.

**Author**: Marius Dinsorean  
**Date**: 2026  
**Course**: Web Design Lab - Recontractare
