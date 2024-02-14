import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@/components";

import AOS from "aos";
export default function RootLayout() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
