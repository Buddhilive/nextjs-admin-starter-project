# Next.js Admin Portal Starter Project

A modern, production-ready Admin Dashboard boilerplate built with **Next.js**, **React 19**, **Tailwind CSS v4**, **shadcn/ui** (with **@base-ui/react**), **Zustand**, and **Lucide Icons**.

> [!TIP]
> This project is configured and optimized for **[pnpm](https://pnpm.io/)** as the package manager (`pnpm@10.28.2`).

---

## 🚀 Features

- **⚡ Next.js & React 19** – Built with Next.js App Router for high performance and clean architecture.
- **🎨 Tailwind CSS v4 & shadcn/ui** – Modern, accessible design system with customizable components.
- **🌓 Dark & Light Mode** – Pre-configured theme provider powered by `next-themes` and a theme switcher toggle.
- **📱 Responsive Collapsible Sidebar** – Desktop & mobile collapsible navigation with team switcher, collapsible submenus, project lists, and user profile popover.
- **🍞 Dynamic Route Breadcrumbs** – Automatic URL-based breadcrumb generation with optional **Zustand** store integration for custom page titles and hierarchy.
- **🔐 Auth & Protected Layouts** – Sample login page with split-screen branding and route grouping (`(protected)`) for admin pages.
- **⚙️ Centralized Sidebar Data** – Simple configuration via `src/consts/sidebar-data.ts`.
- **🔤 Google Fonts** – Beautiful typography powered by Google Poppins font.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (protected)/          # Protected routes layout
│   │   ├── dashboard/        # Sample dashboard page
│   │   └── layout.tsx        # Dashboard shell with sidebar, header & dynamic breadcrumbs
│   ├── login/                # Sample authentication page
│   │   └── page.tsx
│   ├── globals.css           # Tailwind CSS v4 variables & styles
│   ├── layout.tsx            # Root layout with ThemeProvider & TooltipProvider
│   └── page.tsx              # Starter landing / home page
├── components/
│   ├── custom/
│   │   ├── dynamic-breadcrumb.tsx # Auto-generated & store-driven breadcrumb component
│   │   └── toggle-mode.tsx   # Theme mode switcher
│   ├── ui/                   # Reusable shadcn/ui components (Base UI)
│   ├── app-sidebar.tsx       # Main sidebar component wrapper
│   ├── login-form.tsx        # Login form card component
│   ├── nav-main.tsx          # Collapsible main navigation items
│   ├── nav-projects.tsx      # Projects navigation section
│   ├── nav-user.tsx          # User profile trigger & popup menu
│   └── team-switcher.tsx     # Team/Workspace selector dropdown
├── consts/
│   └── sidebar-data.ts       # Centralized sidebar menu & user config
├── lib/
│   └── utils.ts              # Class name merger (clsx + tw-merge)
└── stores/
    └── breadcrumb-store.ts   # Zustand store for dynamic breadcrumbs
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI & Primitives**: [@base-ui/react](https://base-ui.com/), [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📦 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 20+ recommended) and **`pnpm`** installed:

```bash
npm install -g pnpm
```

### 2. Install Dependencies

Install the project dependencies using `pnpm`:

```bash
pnpm install
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3033](http://localhost:3033) in your browser to access the application.

---

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Opening landing page with quick links and template overview |
| `/login` | Sample login screen with split visual layout |
| `/dashboard` | Admin dashboard with collapsible sidebar, dynamic breadcrumbs, and team switcher |

---

## 🍞 Dynamic Breadcrumbs

Breadcrumbs in the admin layout (`src/app/(protected)/layout.tsx`) are dynamic and automatically generated from the active route URL segments (e.g. `/dashboard/settings` &rarr; `Dashboard / Settings`).

### Customizing Breadcrumbs via Zustand

If a page needs custom breadcrumb labels or a tailored hierarchy, use `useBreadcrumbStore` from `@/stores/breadcrumb-store`:

```tsx
"use client"

import { useEffect } from "react"
import { useBreadcrumbStore } from "@/stores/breadcrumb-store"

export default function CustomPage() {
  const setBreadcrumbs = useBreadcrumbStore((state) => state.setBreadcrumbs)
  const resetBreadcrumbs = useBreadcrumbStore((state) => state.resetBreadcrumbs)

  useEffect(() => {
    setBreadcrumbs([
      { label: "Dashboard", href: "/dashboard" },
      { label: "User Management", href: "/dashboard/users" },
      { label: "Edit Profile" },
    ])

    return () => resetBreadcrumbs()
  }, [setBreadcrumbs, resetBreadcrumbs])

  return <div>Custom Page Content</div>
}
```

---

## ⚙️ Customization

### Modifying Sidebar Items & User Profile

Update `src/consts/sidebar-data.ts` to customize:
- User info (name, email, avatar)
- Teams list & logos
- Main navigation menus & collapsible sub-items
- Projects & quick links

```typescript
// src/consts/sidebar-data.ts
export const SIDEBAR_DATA = {
  user: {
    name: "Your Name",
    email: "user@example.com",
    avatar: "/avatars/avatar.jpg",
  },
  teams: [ ... ],
  navMain: [ ... ],
  projects: [ ... ],
};
```

---

## 📜 Available Scripts

- `pnpm dev` – Starts the development server on port `3033`.
- `pnpm build` – Creates an optimized production build.
- `pnpm start` – Starts the Next.js production server.
- `pnpm lint` – Runs ESLint across the codebase.
