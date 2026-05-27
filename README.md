# Space Tourism Website

My solution to the [Frontend Mentor Space Tourism challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

[Live Site](https://space-tourism-website-eta-ten.vercel.app/)

---

## Stack

- React + Vite
- Tailwind CSS
- React Router v6

---

## Structure

public/
└── assets/
├── destination/
├── crew/
├── technology/
└── shared/

src/
├── components/
│   ├── Layout.jsx        # Shared navbar + outlet for all pages
│   ├── Navbar.jsx        # Active link state, glassmorphism, logo line
│   └── PageTransition.jsx
├── pages/
│   ├── home/
│   ├── destination/
│   ├── crew/
│   └── technology/
└── data.json


Images sit in `public/assets` so they can be referenced directly from `data.json` using root-relative paths like `/assets/destination/image-moon.png` — no imports needed.

---

## Features

- Tab switching with fade animation on Destination, Crew and Technology pages
- All content rendered dynamically from `data.json` — nothing hardcoded
- Navbar persists across all pages using a shared Layout and React Router's `<Outlet />`
- Active page indicated by a border on the nav link using `NavLink` and `isActive`
- Glassmorphism navbar with `backdrop-blur`
- Crew image fades into the background using a gradient overlay
- Mobile sidebar slides in from the right

---

## Run locally

```bash
git clone https://github.com/Brian9975/space-tourism-website.git
cd space-tourism-website
npm install
npm run dev

```

---

## Acknowledgements

- Challenge design by [Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)
- Built by [Brian Kariuki](https://brian-kariuki.vercel.app)
