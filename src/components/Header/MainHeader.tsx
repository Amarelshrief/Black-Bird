import { useState } from "react";
import { Facebook, Instagram, Sun, Moon, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/Theme/Theme";

function MainHeader() {
  const [dark, setDark] = useState(
    localStorage.getItem("black-bird-theme") === "dark"
  );
  const { setTheme } = useTheme();

  function toggleDark() {
    setDark(!dark);
  }
  return (
    <header className="bg-[var(--foreground)] pb-2">
      <div className="main-container flex items-center justify-between p-2">
        <h2 className="text-xl text-[var(--primary)] font-bold">
          Free Express Shipping
        </h2>
        <div>
          <ul className="flex items-center gap-6 text-[var(--primary)]">
            <li className="text-2xl cursor-pointer hover:text-[var(--secondary)] flex items-center justify-center duration-150">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="cursor-pointer"
                  onClick={toggleDark}
                >
                  {dark && <Sun onClick={() => setTheme("light")} />}
                  {!dark && <Moon onClick={() => setTheme("dark")} />}
                </DropdownMenuTrigger>
              </DropdownMenu>
            </li>
            {/* <li>EN</li> */}
            <Link to={"/"}>
              <li className="text-2xl cursor-pointer hover:text-[var(--secondary)] flex items-center justify-center duration-150">
                <X />
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-2xl cursor-pointer hover:text-[var(--secondary)] flex items-center justify-center duration-150">
                <Facebook />
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-2xl cursor-pointer hover:text-[var(--secondary)] flex items-center justify-center duration-150">
                <Instagram />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
