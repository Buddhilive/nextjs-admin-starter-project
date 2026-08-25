import { AppSidebar } from "@/components/app-sidebar";
import { DynamicBreadcrumb } from "@/components/custom/dynamic-breadcrumb";
import { ModeToggle } from "@/components/custom/toggle-mode";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                        />
                        <DynamicBreadcrumb />
                    </div>
                    <div className="flex items-center gap-2 px-4">
                        <ModeToggle />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}