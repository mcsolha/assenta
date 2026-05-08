import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="md:grid md:grid-cols-[232px_1fr] min-h-screen">
      <Sidebar />
      <main className="px-6 py-8 md:px-10 md:pb-16 max-w-[1200px]">
        <Outlet />
      </main>
    </div>
  );
}
