import Footer from "@/components/Footer/Footer";
import MainHeader from "@/components/Header/MainHeader";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme/Theme";

function RootLayout() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="black-bird-theme">
        <MainHeader />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
