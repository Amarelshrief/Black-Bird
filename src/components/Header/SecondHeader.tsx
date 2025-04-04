import { Bird, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";

function SecondHeader() {
  return (
    <header>
      <div className="main-container flex items-center justify-between p-2">
        <div className="flex items-center justify-between gap-1 cursor-pointer text-[var(--primary)]">
          <Bird />
          <h1 className="text-2xl font-bold">BlackBird</h1>
        </div>
        <div className="w-2/3">
          <Input
            type="search"
            placeholder="Search for products"
            className="h-12 p-4 rounded-xl"
          />
        </div>
        <div className="flex items-center gap-4">
          <User className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
          <ShoppingCart className="cursor-pointer text-[var(--primary)] hover:text-[var(--secondary)] duration-150" />
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
