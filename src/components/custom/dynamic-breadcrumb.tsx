"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useBreadcrumbStore } from "@/stores/breadcrumb-store"

function formatSegment(segment: string): string {
  return segment
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function DynamicBreadcrumb() {
  const pathname = usePathname()
  const { customBreadcrumbs } = useBreadcrumbStore()

  // Generate breadcrumbs from pathname if no custom ones are set
  const items = React.useMemo(() => {
    if (customBreadcrumbs && customBreadcrumbs.length > 0) {
      return customBreadcrumbs
    }

    const segments = pathname.split("/").filter(Boolean)

    if (segments.length === 0) {
      return [{ label: "Home", href: "/" }]
    }

    // Build cumulative URLs
    return segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      return {
        label: formatSegment(segment),
        href,
      }
    })
  }, [pathname, customBreadcrumbs])

  if (!items || items.length === 0) {
    return null
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <React.Fragment key={item.href || index}>
              <BreadcrumbItem className={index === 0 && !isLast ? "hidden md:block" : ""}>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={item.href || "#"} />}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator className={index === 0 ? "hidden md:block" : ""} />
              )}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
