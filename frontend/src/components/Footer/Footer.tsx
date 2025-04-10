import { Bird, Facebook, Instagram, X, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="bg-[var(--foreground)] pb-8 pt-4">
        <div className="main-container grid grid-cols-4 gap-18 p-2">
          <div>
            <div className="flex items-center gap-1 pb-2 text-[var(--primary)]">
              <Bird />
              <h1 className="text-2xl font-bold">BlackBird</h1>
            </div>
            <p className="text-sm leading-6 text-[var(--secondary)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <Button
                variant="ghost"
                className="bg-[var(--secondary)] hover:bg-[var(--muted)] hover:text-[var(--primary)] duration-150 cursor-pointer"
              >
                <Link to={"/"}> Shop Now </Link>
              </Button>
              <Button
                variant="ghost"
                className="bg-[var(--secondary)] hover:bg-[var(--muted)] hover:text-[var(--primary)] duration-150 cursor-pointer"
              >
                <Link to={"/"}> Send Message </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-[var(--primary)] font-bold">
              About Us
            </h2>
            <ul className="flex flex-col gap-2 w-3/4">
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Careers
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Our Stores
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Our Cares
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Terms & Conditions
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-[var(--primary)]">
              Customer Care
            </h2>
            <ul className="flex flex-col gap-2 w-3/4">
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Help Center
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Track Orders
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Corporate & Bulk Purchasing
                </li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] text-sm duration-150">
                  Returns & Refunds
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-[var(--primary)]">
              Contact Us
            </h2>
            <p className="text-sm text-[var(--secondary)]">
              70 Washington Square South, New York, NY 10012, United States
            </p>
            <p className="text-sm text-[var(--secondary)]">
              Email: uilib.help@gmail.com
            </p>
            <p className="text-sm text-[var(--secondary)]">
              Phone: +1 (212) 555-1234
            </p>
            <div className="flex items-center gap-4">
              <X className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] duration-150" />
              <Instagram className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] duration-150" />
              <Facebook className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] duration-150" />
              <Youtube className="cursor-pointer text-[var(--secondary)] hover:text-[var(--accent)] duration-150" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
