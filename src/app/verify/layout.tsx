
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className={"min-h-svh"}>
        
        {children}
      </main>
    </SidebarProvider>
  )
}
