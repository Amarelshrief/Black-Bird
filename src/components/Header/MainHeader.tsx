import { useState } from "react";
import { Bird, Facebook, Instagram, Sun, Moon, X } from "lucide-react";
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
    <header className="bg-[var(--primary)] pb-2">
      <div className="main-container flex items-center justify-between p-2">
        <Link to={"/"}>
          <div className="flex items-center justify-between gap-1 cursor-pointer">
            <Bird />
            <h1 className="text-2xl font-bold">BlackBird</h1>
          </div>
        </Link>
        <div>
          <ul className="flex items-center gap-6">
            <li className="text-2xl cursor-pointer hover:text-[#bb6b59] flex items-center justify-center duration-150">
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
              <li className="text-2xl cursor-pointer hover:text-[#bb6b59] flex items-center justify-center duration-150">
                <X />
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-2xl cursor-pointer hover:text-[#bb6b59] flex items-center justify-center duration-150">
                <Facebook />
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-2xl cursor-pointer hover:text-[#bb6b59] flex items-center justify-center duration-150">
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
