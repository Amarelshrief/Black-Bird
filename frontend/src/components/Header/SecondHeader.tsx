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

function SecondHeader() {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const productData = useAppSelector(
    (state: RootState) => state.product.products
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
    <header className="bg-[var(--foreground)] h-14">
      <div className="main-container flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center justify-between gap-1 cursor-pointer text-[var(--primary)]">
            <Bird />
            <h1 className="text-2xl font-bold">BlackBird</h1>
          </div>
        </Link>
        {/* <div className="w-2/3">
          <Input
            type="search"
            placeholder="Search for products"
            className="h-12 p-4 rounded-xl"
          />
        </div> */}
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
                <Drawer direction="right">
                  <DrawerTrigger>
                    <li>
                      <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                    </li>
                  </DrawerTrigger>
                  <DrawerContent className="">
                    <DrawerHeader>
                      <DrawerTitle>
                        <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                      </DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter className="">
                      <Button className="h-[2.7rem] cursor-pointer">
                        Checkout
                      </Button>
                      <DrawerClose>
                        <Link to={"/products"}>
                          <Button
                            variant={"outline"}
                            className="w-full h-[2.7rem] cursor-pointer"
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
              <Drawer direction="right">
                <DrawerTrigger>
                  <li className="flex items-center">
                    <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
                    <span className="bg-[var(--primary)] rounded-full h-6 w-6 text-[var(--input)] font-bold">
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
                    <Button className="h-[2.7rem] cursor-pointer text-md font-bold duration-200">
                      Checkout Now ($ {totalAmt})
                    </Button>
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
