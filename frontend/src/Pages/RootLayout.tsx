import Footer from "@/components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme/Theme";
import Headers from "@/components/Header/Headers";

function RootLayout() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="black-bird-theme">
        <Headers />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
