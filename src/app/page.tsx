import Link from "next/link"
import {
  GalleryVerticalEndIcon,
  LayoutDashboardIcon,
  LogInIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  PaletteIcon,
} from "lucide-react"
import { ModeToggle } from "@/components/custom/toggle-mode"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GalleryVerticalEndIcon className="size-4" />
            </div>
            <span className="text-base sm:text-lg">Admin Portal Starter</span>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1.5")}
            >
              <LogInIcon className="size-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "gap-1.5")}
            >
              <LayoutDashboardIcon className="size-4" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Subtle Background Glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
            <div className="h-[320px] w-[600px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/15" />
          </div>

          <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm mb-6">
              <SparklesIcon className="size-3.5 text-primary" />
              Next.js + Shadcn UI + Tailwind CSS
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Next.js Admin Portal{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Starter Template
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              A modern, production-ready admin dashboard boilerplate featuring responsive
              collapsible sidebars, authenticated routes, theme switching, and pre-built components.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto gap-2 px-6 h-11 text-base shadow-sm"
                )}
              >
                <LayoutDashboardIcon className="size-5" />
                <span>Go to Dashboard</span>
                <ArrowRightIcon className="size-4 opacity-70" />
              </Link>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto gap-2 px-6 h-11 text-base"
                )}
              >
                <LogInIcon className="size-5" />
                <span>View Login Page</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="border-t bg-muted/30 py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <LayoutDashboardIcon className="size-5" />
                </div>
                <h2 className="font-semibold text-lg">Collapsible Sidebar</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Full-featured sidebar with nested menus, keyboard shortcuts, and responsive mobile drawer support.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <ShieldCheckIcon className="size-5" />
                </div>
                <h2 className="font-semibold text-lg">Auth & Protected Routes</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pre-configured login layout with split-screen branding and route grouping for protected layouts.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <PaletteIcon className="size-5" />
                </div>
                <h2 className="font-semibold text-lg">Dark & Light Themes</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built-in theme switching with system detection, smooth transitions, and persistent theme state.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Next.js Admin Starter. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
