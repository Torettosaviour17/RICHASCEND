// src/layouts/MainLayout.tsx
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar /> {/* exactly one instance */}
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
}
