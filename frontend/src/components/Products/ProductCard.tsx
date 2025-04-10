import { Button } from "../ui/button";
import { Product } from "@/Pages/Products";
import { Rating } from "react-simple-star-rating";

function ProductCard(props: Product) {
  return (
    <div className="">
      <div className="gap-8 mt-8">
        <div className="flex flex-col gap-4 p-6 rounded-xl h-full shadow-2xl">
          <div className="w-full h-full">
            <img
              src={`${import.meta.env.VITE_BASE_URL}${props.image.url}`}
              alt={props.title}
              className="hover:scale-105 duration-300 cursor-pointer bg object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl text-[var(--secondary)] font-bold">
              {props.title}
            </p>
            <p className="text-[var(--secondary)] font-bold">${props.price}</p>
            <p className="text-[var(--secondary)] text-sm text-center leading-6">
              {props.description}
            </p>
            <p className="flex items-center justify-center">
              <Rating
                initialValue={5}
                className="relative bottom-[2px] w-full"
                iconsCount={5}
                readonly={true}
                SVGclassName={`inline-block`}
                allowFraction={true}
                size={22}
              />
            </p>
            <p className="text-sm font-bold text-[var(--secondary)]">
              {props.category}
            </p>
            <Button
              variant="outline"
              className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 hover:text-[var(--input)] duration-200 cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
