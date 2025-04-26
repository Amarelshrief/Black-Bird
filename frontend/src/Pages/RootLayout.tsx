import Footer from "@/components/Footer/Footer";
import { ScrollRestoration, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme/Theme";
import Headers from "@/components/Header/Headers";

function RootLayout() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="black-bird-theme">
        <Headers />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
      <ScrollRestoration />
    </>
  );
}

export default RootLayout;
