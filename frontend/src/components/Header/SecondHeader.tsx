import { useEffect, useState } from "react";
import { useTheme } from "@/components/Theme/Theme";

import { Bird, ShoppingCart, User, Sun, Moon, OctagonX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  resetCart,
} from "@/store/productSlice";
import { menuIcon } from "@/assets";

function SecondHeader() {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const productData = useAppSelector(
    (state: RootState) => state.product?.products
  );
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    let price: number = 0;
    productData.map((product) => {
      price += product.quantity * product.price;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  return (
    <header className="bg-[var(--foreground)] h-14 fixed top-0 left-0 right-0 z-50">
      <div className="main-container flex items-center justify-between p-2 lg:p-0 ">
        <Link to={"/"}>
          <div className="flex items-center justify-between gap-1 cursor-pointer text-[var(--primary)]">
            <Bird />
            <h1 className="text-2xl font-bold">BlackBird</h1>
          </div>
        </Link>
        <div>
          <div className="flex lg:hidden relative">
            <Drawer>
              <DrawerTrigger className="cursor-pointer">
                <div>
                  <img src={menuIcon} alt="" />
                </div>
                <div className="absolute top-3 left-4 w-full h-full flex flex-col items-start justify-center gap-2">
                  <span className="bg-[var(--primary)] w-6 h-6 rounded-full">
                    6
                  </span>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="dark:text-primary">
                    Navigation Mneu
                  </DrawerTitle>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer dark:text-primary">
                          Home
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:text-primary">
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("advantages");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Advantages
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("categories");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Categories
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("products");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Products
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("announce");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Announce
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("electronic");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Electronic Products
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("market");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Market
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element = document.getElementById("men");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Men Products
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("women");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Women Products
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink
                              onClick={() => {
                                const element =
                                  document.getElementById("brands");
                                element?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="hover:bg-transparent dark:hover:text-secondary"
                            >
                              Featured Brands
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer dark:text-primary">
                          Pages
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:text-primary">
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              <Link to={"/"}>Home</Link>
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              <Link to={"/products"}>Products</Link>
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              <Link to={"/cart"}>Cart</Link>
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer dark:text-primary">
                          Full Screen Menu
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:text-primary">
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Link
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer dark:text-primary">
                          Pages
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:text-primary">
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Link
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer dark:text-primary">
                          User Account
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:text-primary">
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Market
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Gadget
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Fashion
                            </NavigationMenuLink>
                          </div>
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Electronics
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer dark:text-primary">
                          Vendor Account
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="dark:text-primary">
                          <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                            <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                              Link
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </DrawerHeader>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <ul className="hidden lg:flex items-center gap-6 text-primary">
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">
                      Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:text-primary">
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element =
                              document.getElementById("advantages");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Advantages
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element =
                              document.getElementById("categories");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Categories
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element = document.getElementById("products");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Products
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element = document.getElementById("announce");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Announce
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element =
                              document.getElementById("electronic");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Electronic Products
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element = document.getElementById("market");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Market
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element = document.getElementById("men");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Men Products
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element = document.getElementById("women");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Women Products
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink
                          onClick={() => {
                            const element = document.getElementById("brands");
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:bg-transparent dark:hover:text-secondary"
                        >
                          Featured Brands
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">
                      Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:text-primary">
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          <Link to={"/"}>Home</Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          <Link to={"/products"}>Products</Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          <Link to={"/cart"}>Cart</Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">
                      Full Screen Menu
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:text-primary">
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Link
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">
                      Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:text-primary">
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Link
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">
                      User Account
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:text-primary">
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Market
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Gadget
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Fashion
                        </NavigationMenuLink>
                      </div>
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Electronics
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer">
                      Vendor Account
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:text-primary">
                      <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)] dark:hover:bg-transparent dark:hover:text-secondary duration-300 rounded-sm">
                        <NavigationMenuLink className="hover:bg-transparent dark:hover:text-secondary">
                          Link
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {navBar ? (
            <div className="bg-[var(--foreground)] rounded-md absolute right-0 top-14 w-52">
              <ul className="flex flex-col gap-2 p-4 lg:p-0">
                <li className="text-[var(--primary)] cursor-pointer hover:text-[var(--secondary)] flex items-center lg:justify-center hover:translate-x-2 duration-150">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className="cursor-pointer"
                      onClick={toggleDark}
                    >
                      {dark && (
                        <div
                          onClick={() => setTheme("light")}
                          className="flex items-center gap-2"
                        >
                          {" "}
                          <Sun /> <p className="flex lg:hidden">Light</p>
                        </div>
                      )}
                      {!dark && (
                        <div
                          onClick={() => setTheme("dark")}
                          className="flex items-center gap-2"
                        >
                          {" "}
                          <Moon /> <p className="flex lg:hidden">Dark</p>
                        </div>
                      )}
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </li>
                <li className="flex items-center gap-2 cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] hover:translate-x-2 duration-150">
                  <User className="" />
                  <p className="flex lg:hidden">User Account</p>
                </li>
                <Drawer direction="right">
                  <DrawerTrigger>
                    <li className="flex items-center gap-2 cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] hover:translate-x-2 duration-150">
                      <ShoppingCart className="" />
                      <p className="flex lg:hidden">Cart</p>
                    </li>
                  </DrawerTrigger>
                  <DrawerContent className="overflow-y-scroll overflow-x-hidden">
                    <DrawerHeader>
                      <DrawerTitle className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                          <span className="text-[var(--secondary)] font-bold">
                            {productData.length} items
                          </span>
                        </div>
                        <div>
                          <OctagonX
                            onClick={() => dispatch(resetCart())}
                            className="cursor-pointer text-[var(--secondary)] hover:text-[var(--primary)] duration-150"
                          />
                        </div>
                      </DrawerTitle>
                    </DrawerHeader>
                    {productData.map((product) => (
                      <div className="flex items-center justify-between gap-3 p-4">
                        <div>
                          <img
                            src={`${import.meta.env.VITE_BASE_URL}${
                              product.image.url
                            }`}
                            alt={product.title}
                            className="w-26 h-28"
                          />
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="font-bold text-lg text-[var(--primary)] tracking-wide">
                            {product.title}
                          </p>

                          <p className="text-sm text-[var(--secondary)]">
                            <span>{product.quantity}</span> *{" "}
                            <span>{product.price}</span> = ${" "}
                            <span>{product.quantity * product.price}</span>
                          </p>
                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() =>
                                dispatch(
                                  incrementQuantity({
                                    id: product.id,
                                    quantity: product.quantity,
                                    title: product.title,
                                    price: product.price,
                                    description: product.description,
                                    rate: product.rate,
                                    category: product.category,
                                    image: product.image,
                                  })
                                )
                              }
                              variant="outline"
                              className="cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                            >
                              +
                            </Button>
                            <span>{product.quantity}</span>
                            <Button
                              onClick={() =>
                                dispatch(
                                  decrementQuantity({
                                    id: product.id,
                                    quantity: product.quantity,
                                    title: product.title,
                                    price: product.price,
                                    description: product.description,
                                    rate: product.rate,
                                    category: product.category,
                                    image: product.image,
                                  })
                                )
                              }
                              variant="outline"
                              className="cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                            >
                              -
                            </Button>
                          </div>
                        </div>
                        <div className="cursor-pointer text-[var(--secondary)] hover:text-[var(--primary)] duration-150">
                          <OctagonX
                            onClick={() => dispatch(removeFromCart(product.id))}
                          />
                        </div>
                      </div>
                    ))}
                    <DrawerFooter>
                      <Link to={"/checkout"}>
                        <Button className="w-full h-[2.7rem] cursor-pointer text-md font-bold dark:text-card-foreground duration-200">
                          Checkout Now ($ {totalAmt})
                        </Button>
                      </Link>
                      <DrawerClose>
                        <Link to={"/cart"}>
                          <Button
                            variant={"outline"}
                            className="w-full h-[2.7rem] text-md cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                          >
                            View Cart
                          </Button>
                        </Link>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </ul>
            </div>
          ) : (
            <ul className="hidden lg:flex items-center gap-4">
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
              <Drawer direction="right">
                <DrawerTrigger>
                  <li className="flex items-center">
                    <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                    <span className="bg-primary text-card-foreground rounded-full h-6 w-6 font-bold">
                      {productData.length}
                    </span>
                  </li>
                </DrawerTrigger>
                <DrawerContent className="overflow-y-scroll overflow-x-hidden">
                  <DrawerHeader>
                    <DrawerTitle className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                        <span className="text-[var(--secondary)] font-bold">
                          {productData.length} items
                        </span>
                      </div>
                      <div>
                        <OctagonX
                          onClick={() => dispatch(resetCart())}
                          className="cursor-pointer text-[var(--secondary)] hover:text-[var(--primary)] duration-150"
                        />
                      </div>
                    </DrawerTitle>
                  </DrawerHeader>
                  {productData.map((product) => (
                    <div className="flex items-center justify-between gap-3 p-4">
                      <div>
                        <img
                          src={`${import.meta.env.VITE_BASE_URL}${
                            product.image.url
                          }`}
                          alt={product.title}
                          className="w-26 h-28"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-bold text-lg text-[var(--primary)] tracking-wide">
                          {product.title}
                        </p>

                        <p className="text-sm text-[var(--secondary)]">
                          <span>{product.quantity}</span> *{" "}
                          <span>{product.price}</span> = ${" "}
                          <span>{product.quantity * product.price}</span>
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() =>
                              dispatch(
                                incrementQuantity({
                                  id: product.id,
                                  quantity: product.quantity,
                                  title: product.title,
                                  price: product.price,
                                  description: product.description,
                                  rate: product.rate,
                                  category: product.category,
                                  image: product.image,
                                })
                              )
                            }
                            variant="outline"
                            className="cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                          >
                            +
                          </Button>
                          <span>{product.quantity}</span>
                          <Button
                            onClick={() =>
                              dispatch(
                                decrementQuantity({
                                  id: product.id,
                                  quantity: product.quantity,
                                  title: product.title,
                                  price: product.price,
                                  description: product.description,
                                  rate: product.rate,
                                  category: product.category,
                                  image: product.image,
                                })
                              )
                            }
                            variant="outline"
                            className="cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                          >
                            -
                          </Button>
                        </div>
                      </div>
                      <div className="cursor-pointer text-[var(--secondary)] hover:text-[var(--primary)] duration-150">
                        <OctagonX
                          onClick={() => dispatch(removeFromCart(product.id))}
                        />
                      </div>
                    </div>
                  ))}
                  <DrawerFooter>
                    <Link to={"/checkout"}>
                      <Button className="w-full h-[2.7rem] cursor-pointer text-md font-bold dark:text-card-foreground duration-200">
                        Checkout Now ($ {totalAmt})
                      </Button>
                    </Link>
                    <DrawerClose>
                      <Link to={"/cart"}>
                        <Button
                          variant={"outline"}
                          className="w-full h-[2.7rem] text-md cursor-pointer text-[var(--secondary)] hover:bg-[var(--secondary)]/20 duration-200"
                        >
                          View Cart
                        </Button>
                      </Link>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </ul>
          )}
          <div
            onClick={makeItAppear}
            className="flex flex-col gap-1 lg:hidden cursor-pointer px-2 items-center justify-between"
          >
            <span className="bg-[var(--primary)] w-8 h-1"></span>
            <span className="bg-[var(--primary)] w-8 h-1"></span>
            <span className="bg-[var(--primary)] w-8 h-1"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
