# HW2 Project - Final Verification Guide

## 📋 Pre-Submission Checklist

### Step 1: Local Testing (Before Pushing to GitHub)

#### Open in Browser
1. Navigate to your project folder in file explorer
2. Right-click on `index.html` → Open with → Your browser
3. Verify the homepage loads correctly

#### Navigation Test
- [ ] Click "Home" link → returns to index.html
- [ ] Click "CV" → CV.html loads
- [ ] Click "Contact Me" → contact.html loads
- [ ] Click "Chatbot" → chatbot.html loads with questions
- [ ] Click "Universities" → universities.html loads
- [ ] Click "Overview" → overview.html loads with Grid layout
- [ ] Click "Card" → card.html loads
- [ ] Click "Specificity" → specificity.html loads
- [ ] All links use "active" class correctly

#### Page Content Verification

**index.html**
- [ ] Header displays with hero gradient
- [ ] Two tables visible (skills + portfolio)
- [ ] Profile image displays
- [ ] Inline CSS visible on image (border, border-radius)

**CV.html**
- [ ] Header displays
- [ ] Skill cards show in grid layout
- [ ] Featured project card styled differently
- [ ] "Cybersecurity" card has special styling

**contact.html**
- [ ] Contact form displays with all fields
- [ ] Form fields are interactive
- [ ] Messages table shows below form
- [ ] Table has proper styling

**chatbot.html**
- [ ] Hero header displays
- [ ] Chat container shows first question
- [ ] Input field and submit button visible
- [ ] Try answering "a" to first question → see feedback
- [ ] Questions cycle through
- [ ] Chat scrolls automatically

**overview.html**
- [ ] Profile section displays with image and description
- [ ] Skills section shows in grid (4 columns on desktop)
- [ ] Projects section shows 4+ cards
- [ ] Featured project (Security Audit Tool) has different styling
- [ ] Contact section shows 4 items
- [ ] Responsive: Resize browser → layout adapts

**card.html**
- [ ] Personal card displays centered
- [ ] Image, name, specialization, email, GitHub links visible
- [ ] Professional styling applied

**specificity.html**
- [ ] Four paragraphs display with different styles
- [ ] Paragraph D (with ID + class) has unique orange styling
- [ ] h1 appears in red (internal CSS overrides external)
- [ ] Internal `<style>` rules applied correctly

**universities.html**
- [ ] Data table loads with university data
- [ ] Filter input works
- [ ] CSV export button present

#### Form Testing
1. Navigate to contact.html
2. Fill out contact form:
   - [ ] Enter full name
   - [ ] Enter email
   - [ ] Enter phone (optional)
   - [ ] Select date
   - [ ] Enter age
   - [ ] Enter website (optional)
   - [ ] Upload file (optional)
   - [ ] Select favorite color
   - [ ] Select subject
   - [ ] Enter message
   - [ ] Select "How did you hear about me" radio button
   - [ ] Click Send → form processes (note: won't actually send without backend)

#### Responsive Design Test
1. Open Developer Tools (F12)
2. Click "Toggle device toolbar" (mobile icon)
3. Test at different breakpoints:
   - [ ] Mobile (375px): Single column, stacked layout
   - [ ] Tablet (768px): Two columns for grids
   - [ ] Desktop (1024px): Multi-column layouts
   - [ ] Large (1200px+): Full spacing
4. Verify:
   - [ ] Navigation adapts
   - [ ] Text sizes adjust
   - [ ] Images scale properly
   - [ ] Buttons remain clickable
   - [ ] No horizontal scrolling (except for extra-wide content)

#### CSS & Styling Verification
- [ ] All pages use consistent purple color scheme (#5c2a9d)
- [ ] All pages have same header/footer styling
- [ ] Hover effects work on links and buttons
- [ ] Tables have alternating row colors
- [ ] Focus states visible on form inputs
- [ ] Shadows and borders render correctly

#### JavaScript Interactivity
**Chatbot:**
- [ ] Questions display on page load
- [ ] User can type in input field
- [ ] Clicking "Trimite" (or pressing Enter) submits
- [ ] Bot responds with feedback (correct/incorrect)
- [ ] Next question appears automatically
- [ ] Questions cycle after reaching end
- [ ] Chat scrolls to show latest messages
- [ ] Input clears after each submit

#### Links & External Resources
- [ ] Email link works: `mailto:marius.dinsorean@e-uvt.ro`
- [ ] GitHub link opens (target="_blank"): https://github.com/MariusDinsoreanUVT
- [ ] All internal links functional
- [ ] No broken links (404 errors)

#### Image Verification
- [ ] Profile image (Marius.jpg) displays on all pages
- [ ] Image has proper alt text
- [ ] Image renders at correct size

---

### Step 2: Browser Compatibility Testing

Test in each browser if possible:
- [ ] Chrome - All features work
- [ ] Firefox - All features work
- [ ] Safari - All features work (if available)
- [ ] Edge - All features work

---

### Step 3: GitHub Repository Setup

#### Repository Created & Initialized
```bash
# If not already done:
git init
git add .
git commit -m "HW2: CSS fundamentals, responsive layouts, Figma design, JavaScript interactivity"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/HW2-REPO.git
git push -u origin main
```

#### GitHub Pages Configuration
1. Go to repository Settings
2. Find "GitHub Pages" section
3. Set source to "Deploy from a branch"
4. Select branch: main
5. Select folder: / (root)
6. Click "Save"
7. Wait 1-2 minutes for site to deploy
8. Note the URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

### Step 4: GitHub Pages Live Site Testing

After GitHub Pages deploys (wait 1-2 minutes):

1. Visit your GitHub Pages URL
   - [ ] Homepage loads
   - [ ] All CSS and styling visible
   - [ ] Images display (check Network tab for loading)

2. Test all navigation
   - [ ] All links work on live site
   - [ ] Page transitions smooth
   - [ ] Current page indicator works

3. Test interactivity
   - [ ] Chatbot works on live site
   - [ ] Forms are interactive
   - [ ] Hover effects visible

4. Check Console
   - [ ] Open DevTools → Console
   - [ ] No JavaScript errors (should be clean)
   - [ ] No 404 errors for resources

5. Test on Mobile (via DevTools)
   - [ ] Responsive layout works
   - [ ] Touch interactions work
   - [ ] All pages accessible on mobile

---

### Step 5: File Verification

#### All Required Files Present
```
project/
├── index.html ✓
├── CV.html ✓
├── contact.html ✓
├── card.html ✓
├── chatbot.html ✓
├── chatbot.css ✓
├── chatbot.js ✓
├── universities.html ✓
├── specificity.html ✓
├── specificity.txt ✓
├── overview.html ✓
├── styles.css ✓
├── CV.css ✓
├── card.css ✓
├── universities.css ✓
├── overview.css ✓
├── figma-auth.css ✓
├── style.css ✓
├── universities.js ✓
├── validation.js ✓
├── Marius.jpg ✓
├── README.md ✓
├── HW2_COMPLETION_CHECKLIST.md ✓
└── assets/
    ├── figma-auth-demo.html ✓
    └── figma-design-documentation.md ✓
```

#### File Content Verification
- [ ] All HTML files have proper DOCTYPE
- [ ] All HTML files have `<meta charset="UTF-8">`
- [ ] All HTML files have `<meta name="viewport">`
- [ ] All HTML files have skip link
- [ ] All HTML files have navigation menu
- [ ] All CSS files use CSS variables for design tokens
- [ ] figma-auth.css contains color and spacing tokens
- [ ] chatbot.js has question bank array
- [ ] specificity.txt has complete answers

---

### Step 6: Validation (HTML & CSS)

#### HTML Validation
Go to https://validator.w3.org/ for each file:
1. Upload each HTML file
2. Verify: **0 errors, 0 warnings**
3. Files to validate:
   - [ ] index.html ✓
   - [ ] CV.html ✓
   - [ ] contact.html ✓
   - [ ] card.html ✓
   - [ ] chatbot.html ✓
   - [ ] universities.html ✓
   - [ ] overview.html ✓
   - [ ] specificity.html ✓

#### CSS Validation
Go to https://jigsaw.w3.org/css-validator/ for each file:
1. Upload each CSS file
2. Verify: **0 errors, 0 warnings** (some browser-specific warnings are OK)
3. Files to validate:
   - [ ] styles.css ✓
   - [ ] CV.css ✓
   - [ ] card.css ✓
   - [ ] chatbot.css ✓
   - [ ] universities.css ✓
   - [ ] overview.css ✓
   - [ ] figma-auth.css ✓
   - [ ] style.css ✓

---

### Step 7: Accessibility Check

Using browser DevTools Lighthouse:
1. Open any page in browser
2. Press F12 → DevTools
3. Click "Lighthouse" tab
4. Click "Analyze page load"
5. Check results:
   - [ ] Accessibility score: 85+
   - [ ] Best practices: 85+
   - [ ] Performance: 75+

Manual accessibility checks:
- [ ] All images have alt text
- [ ] All form inputs have labels
- [ ] All links have descriptive text
- [ ] Color contrast is sufficient
- [ ] Page navigable with keyboard (Tab key)
- [ ] Focus states visible

---

### Step 8: Final Submission Verification

Before submitting, confirm:

#### Code Quality
- [ ] No commented-out code left
- [ ] No test/temporary files present
- [ ] Proper file organization
- [ ] Consistent indentation and formatting

#### Documentation
- [ ] README.md is complete and accurate
- [ ] HW2_COMPLETION_CHECKLIST.md is filled out
- [ ] Design documentation is clear
- [ ] All comments in code are helpful

#### Functionality
- [ ] All pages load correctly
- [ ] All links work (both internal and external)
- [ ] All forms are interactive
- [ ] JavaScript works without errors
- [ ] Responsive design works
- [ ] GitHub Pages deployment works

#### Requirements Met
- [x] HW1 requirements maintained (4 pages, tables, forms, semantic HTML)
- [x] CSS specificity exercise (specificity.html + specificity.txt)
- [x] Responsive layout (overview.html with Grid/Flexbox/Media Queries)
- [x] Figma design (figma-auth.css + design tokens)
- [x] JavaScript interactivity (chatbot with DOM manipulation)
- [x] Consistent navigation across all pages
- [x] Validation passed (HTML + CSS)
- [x] Published on GitHub Pages
- [x] All files present and organized

---

## 🚀 Submission Checklist

When ready to submit, provide:
- [ ] **GitHub Repository URL**: `https://github.com/YOUR_USERNAME/YOUR_REPO`
- [ ] **GitHub Pages Live URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- [ ] **Confirmation**: All requirements met and tested

---

## 📞 Quick Troubleshooting

### Pages don't load
- Verify file names match links exactly (case-sensitive on some systems)
- Check that all files are in the same directory
- Verify no typos in href attributes

### Images don't display
- Confirm Marius.jpg is in the project root folder
- Check image filename case matches (Marius.jpg)
- In DevTools, check Network tab to see if image loads

### CSS doesn't apply
- Verify stylesheet links are correct: `<link rel="stylesheet" href="filename.css">`
- Check that CSS file names match (case-sensitive)
- Verify CSS files are in the same directory as HTML
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### Chatbot doesn't work
- Verify chatbot.js is linked: `<script src="chatbot.js"></script>`
- Check browser console for JavaScript errors (F12 → Console)
- Verify question array is properly formatted in chatbot.js

### GitHub Pages not deploying
- Verify repository is public
- Check Settings → Pages is enabled
- Wait 1-2 minutes after pushing
- Check that index.html is in root directory

---

**Good luck with your submission!** 🎉
