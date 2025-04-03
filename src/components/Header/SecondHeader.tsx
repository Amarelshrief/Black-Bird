import { ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";

function SecondHeader() {
  return (
    <header>
      <div className="main-container flex items-center justify-between p-2">
        {/* <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#bb6b59] duration-150">
          <ShoppingBag />
          <p>E-Commerce</p>
        </div> */}
        <div className="w-2/3">
          <Input
            type="search"
            placeholder="Search for products"
            className="h-12 p-4 rounded-xl"
          />
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart className="cursor-pointer hover:text-[#bb6b59] duration-150" />
          <User className="cursor-pointer hover:text-[#bb6b59] duration-150" />
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
