import Sidebar from "@/components/SideBar";
import TopBar from "@/components/TopNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <TopBar/>

      <main className="ml-[242px] min-h-screen">
        {children}
      </main>
    </div>
  );
}