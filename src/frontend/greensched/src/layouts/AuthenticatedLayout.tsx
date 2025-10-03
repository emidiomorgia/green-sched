import { type ReactNode } from "react";

export function AuthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        {/* Sidebar */}
        <ul>
          <li>Dashboard</li>
          <li>Altro menu</li>
        </ul>
      </aside>
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
