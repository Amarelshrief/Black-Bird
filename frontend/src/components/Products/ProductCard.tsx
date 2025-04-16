import { Product } from "@/Pages/Products";
import { Rating } from "react-simple-star-rating";
import { addToCart } from "@/store/productSlice";
import { Button } from "../ui/button";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { ShoppingCart } from "lucide-react";

function ProductCard(props: Product) {
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="gap-8 mt-8 rounded-2xl">
        <div className="flex flex-col gap-4 p-6 rounded-xl h-[50%] md:h-full shadow-2xl">
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-full h-full">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${props.image.url}`}
                  alt={props.title}
                  className="hover:scale-105 duration-300 cursor-pointer bg object-cover md:h-[25rem]"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${props.image.url}`}
                    alt={props.title}
                    className="w-[40rem] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <DialogHeader className="">
                    <DialogTitle className="text-xl font-bold text-[var(--primary)]">
                      {props.title}
                    </DialogTitle>
                    <p>Price: ${props.price}</p>
                    <DialogDescription>{props.description}</DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center gap-2 text-[var(--input)] cursor-pointer duration-200 w-[6.5rem]">
                    <Button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: props.id,
                            title: props.title,
                            price: props.price,
                            description: props.description,
                            quantity: 1,
                            rate: props.rate,
                            category: props.category,
                            image: props.image,
                          })
                        ) && toast.success("Product Added to Cart")
                      }
                      className="flex items-center gap-2 text-[var(--input)] cursor-pointer duration-200"
                    >
                      <ShoppingCart />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl text-[var(--secondary)] font-bold">
              {props.title}
            </p>
            <p className="text-[var(--secondary)] font-bold">${props.price}</p>
            <p className="text-[var(--muted)] text-sm text-center leading-6">
              {props.description}
            </p>
            <p className="flex items-center justify-center">
              <Rating
                initialValue={props.rate}
                className="relative bottom-[2px] w-full"
                iconsCount={5}
                readonly={true}
                SVGclassName={`inline-block`}
                allowFraction={true}
                size={22}
              />
            </p>
            <p className="text-sm font-bold text-[var(--muted)]">
              {props.category}
            </p>
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    description: props.description,
                    quantity: 1,
                    rate: props.rate,
                    category: props.category,
                    image: props.image,
                  })
                ) && toast.success("Product Added to Cart")
              }
              variant="outline"
              className="w-full text-[var(--secondary)] hover:bg-[var(--primary)]/80 hover:text-[var(--input)] duration-200 cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <Toaster position="top-left" />
    </div>
  );
}

export default ProductCard;
