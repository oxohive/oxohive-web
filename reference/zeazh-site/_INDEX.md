# Zeazh Website — Content Extraction

**Source:** https://zeazhsite-git-main-sheikxms-projects.vercel.app/
**Extracted:** 2026-08-20
**Stack:** Next.js (App Router) on Vercel
**Purpose:** reference material for the Erlytrix site build

## Files

| File | Route | Status |
|---|---|---|
| `home.txt` | `/` | 200 — main landing page, largest |
| `showcase.txt` | `/showcase` | 200 — portfolio / project work |
| `internship.txt` | `/internship` | 200 — internship program |
| `meeting.txt` | `/meeting` | 200 — booking / consultation |
| `career__fullstackdeveloperintern.txt` | `/career/fullstackdeveloperintern` | 200 — job listing |
| `career__fullstackdeveloperintern__apply.txt` | `/career/fullstackdeveloperintern/apply` | 200 — application form |
| `career__ui-ux-developer-intern.txt` | `/career/ui-ux-developer-intern` | **404 — broken** |
| `career__content-writing-intern.txt` | `/career/content-writing-intern` | **404 — broken** |
| `privacypolicy.txt` | `/privacypolicy` | 200 |
| `tos.txt` | `/tos` | 200 |
| `_ALL-PAGES.txt` | — | all of the above concatenated |

## Notes

- Two career routes are linked from the nav on every page but return 404.
  Only the Full Stack Developer Intern listing actually resolves.
- Probed and confirmed absent (404): `/career`, `/about`, `/contact`,
  `/services`, `/blog`, `/team`, `/pricing`, `/courses`, `/lms`, `/terms`,
  `/faq`, `/portfolio`, `/work`, `/products`.
- Nav labels "Services" and "Course" are anchors/external, not routes.
- External links found: `zeazh.com`, `learning.zeazh.com/lms/courses`,
  `instagram.com/zeazhofficial`, `linkedin.com/company/zeazh`.
- Extraction preserves heading levels (`#`..`######`), list items, and
  image alt text as `[image: ...]`. Scripts, styles and SVG stripped.
