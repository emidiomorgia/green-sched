import  { type ReactNode } from "react";

export function UnauthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        {children}
      </div>
    </div>
  );
}
