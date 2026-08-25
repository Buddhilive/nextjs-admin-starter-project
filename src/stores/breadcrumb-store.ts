import { create } from "zustand"

export interface BreadcrumbItemData {
  label: string
  href?: string
}

interface BreadcrumbState {
  customBreadcrumbs: BreadcrumbItemData[] | null
  setBreadcrumbs: (items: BreadcrumbItemData[] | null) => void
  resetBreadcrumbs: () => void
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  customBreadcrumbs: null,
  setBreadcrumbs: (items) => set({ customBreadcrumbs: items }),
  resetBreadcrumbs: () => set({ customBreadcrumbs: null }),
}))
