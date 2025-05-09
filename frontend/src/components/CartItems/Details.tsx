import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { cartImg } from "@/assets";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  company_name: z.string().min(2, {
    message: "Company Name must be at least 2 characters.",
  }),
  contact_number: z
    .string()
    .regex(/01[0-2]\d{1,8}$/, {
      message:
        "Invalid phone number format. Please provide a valid phone number with the +20 country code.",
    })
    .trim(),
  email: z
    .string()
    .email({
      message: "Invalid email format. Please provide a valid email address.",
    })
    .trim(),
  address_1: z.string().min(2, {
    message: "Address 1 must be at least 2 characters.",
  }),
  address_2: z.string().min(2, {
    message: "Address 2 must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  zip_code: z.string().min(2, {
    message: "Zip Code must be at least 2 characters.",
  }),
});

function Details() {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const productData = useAppSelector((state) => state.product.products);

  useEffect(() => {
    let price: number = 0;
    productData.map((product) => {
      price += product.quantity * product.price;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      company_name: "",
      contact_number: "",
      email: "",
      address_1: "",
      address_2: "",
      country: "",
      zip_code: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section>
      <div>
        <img
          src={cartImg}
          alt="Cart-Img"
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="main-container flex items-center justify-between my-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="w-full">
            <h4 className="text-md font-bold text-[var(--primary)]">
              Shipping Address
            </h4>
            <div className="mt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Full Name"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contact_number"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Contact Number"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company_name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Company Name"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <FormField
                      control={form.control}
                      name="address_1"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Address 1"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address_2"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Address 2"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Country"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip_code"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Zip Code"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <Link to={"/cart"} className="w-full">
                      <div className="w-full cursor-pointer">
                        <Button
                          variant={"outline"}
                          className="w-full cursor-pointer h-10 text-md text-secondary hover:text-primary hover:bg-input duration-200"
                        >
                          Back To Cart
                        </Button>
                      </div>
                    </Link>
                    <Link to={"/payment"} className="w-full">
                      <div className="w-full cursor-pointer">
                        <Button
                          type="submit"
                          className="w-full cursor-pointer h-10 text-md text-input dark:text-card-foreground"
                        >
                          Proceed to Payment
                        </Button>
                      </div>
                    </Link>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 w-full lg:w-2/4">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-bold text-[var(--primary)]">
                Subtotal
              </h4>
              <p className="text-lg font-bold text-primary">${totalAmt}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--card-foreground)]">
                  Shipping:
                </p>
                <span className="text-card-foreground">-</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--card-foreground)]">Tax:</p>
                <span className="text-card-foreground">-</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--card-foreground)]">
                  Discount:
                </p>
                <span className="text-card-foreground">-</span>
              </div>
              <span className="border-b border-[var(--input)] w-full"></span>
              <div className="mt-4 flex items-start">
                <p className="text-2xl text-primary font-bold">${totalAmt}</p>
              </div>

              <div className="flex flex-col gap-4">
                <Input
                  placeholder="Voucher"
                  className="h-14 w-full hover:border-primary duration-100 text-card-foreground"
                />
                <div className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full cursor-pointer h-10 text-md text-secondary hover:text-primary hover:bg-input duration-200"
                  >
                    Apply Voucher
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
