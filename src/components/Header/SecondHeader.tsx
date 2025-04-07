import { useState } from "react";
import { useTheme } from "@/components/Theme/Theme";

import { Bird, ShoppingCart, User, Sun, Moon } from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function SecondHeader() {
  const [navBar, setNavBar] = useState<boolean>(false);
  const [dark, setDark] = useState(
    localStorage.getItem("black-bird-theme") === "dark"
  );
  const { setTheme } = useTheme();

  function toggleDark() {
    setDark(!dark);
  }

  function makeItAppear() {
    setNavBar(!navBar);
  }
  return (
    <header>
      <div className="main-container flex items-center justify-between p-2">
        <Link to={"/"}>
          <div className="flex items-center justify-between gap-1 cursor-pointer text-[var(--primary)]">
            <Bird />
            <h1 className="text-2xl font-bold">BlackBird</h1>
          </div>
        </Link>
        <div className="w-2/3">
          <Input
            type="search"
            placeholder="Search for products"
            className="h-12 p-4 rounded-xl"
          />
        </div>
        <div className="flex items-center gap-4">
          {navBar ? (
            <div className="bg-slate-200 absolute right-0 top-14 w-52">
              <ul className="flex flex-col gap-2">
                <li className="py-2 text-[var(--primary)] cursor-pointer hover:text-[var(--secondary)] flex items-center justify-center duration-150">
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
                <li>
                  <User className="py-2 cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                </li>
                <li>
                  <ShoppingCart className="py-2 cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                </li>
              </ul>
            </div>
          ) : (
            <ul className="md:flex items-center gap-4 hidden">
              <li className="text-[var(--primary)] cursor-pointer hover:text-[var(--secondary)] flex items-center justify-center duration-150">
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
              <li>
                <User className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
              </li>
              <li>
                <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
              </li>
            </ul>
          )}
          <div
            onClick={makeItAppear}
            className="flex flex-col gap-1 md:hidden cursor-pointer px-2 items-center justify-between"
          >
            <span className="bg-black w-8 h-1"></span>
            <span className="bg-black w-8 h-1"></span>
            <span className="bg-black w-8 h-1"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
