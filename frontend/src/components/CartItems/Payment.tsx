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
import { cartImg } from "@/assets";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

const formSchema = z.object({
  card_number: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  exp_date: z.string().min(2, {
    message: "Company Name must be at least 2 characters.",
  }),
  name_on_card_1: z.string().min(2, {
    message: "Name on Card must be at least 2 characters.",
  }),
  name_on_card_2: z.string().min(2, {
    message: "Name on Card must be at least 2 characters.",
  }),
});

const paypalSchema = z.object({
  paypal_email: z
    .string()
    .email({
      message: "Invalid email format. Please provide a valid email address.",
    })
    .trim(),
});

function Payment() {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const productData = useAppSelector((state) => state.product.products);
  const [visibleOne, setVisibleOne] = useState(true);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      card_number: "",
      exp_date: "",
      name_on_card_1: "",
      name_on_card_2: "",
    },
  });

  useEffect(() => {
    let price: number = 0;
    productData.map((product) => {
      price += product.quantity * product.price;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const paybalForm = useForm<z.infer<typeof paypalSchema>>({
    resolver: zodResolver(paypalSchema),
    defaultValues: {
      paypal_email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  function HandlePaypalSubmit(values: z.infer<typeof paypalSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function handleVisibleOne() {
    setVisibleOne(true);
    setVisibleTwo(false);
  }

  function handleVisibleTwo() {
    setVisibleTwo(true);
    setVisibleOne(false);
  }

  function handleVisibleThree() {
    setVisibleOne(false);
    setVisibleTwo(false);
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
      <div className="main-container flex items-center justify-between gap-24 my-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <RadioGroup className="w-full" defaultValue="comfortable">
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={handleVisibleOne}
                  value="comfortable"
                  id="r1"
                />
                <Label className="text-md text-card-foreground" htmlFor="r1">
                  Pay with credit card
                </Label>
              </div>
              <div
                className={` ${
                  visibleOne && visibleTwo === false ? "block" : "hidden"
                }`}
              >
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 lg:space-y-8"
                  >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                      <FormField
                        control={form.control}
                        name="card_number"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Card Number"
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
                        name="exp_date"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Exp Date"
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
                        name="name_on_card_1"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Name on Card"
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
                        name="name_on_card_2"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Name on Card"
                                {...field}
                                className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="w-1/4 cursor-pointer">
                      <Button
                        type="submit"
                        className="w-full cursor-pointer h-10 text-md text-input dark:text-card-foreground"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={handleVisibleTwo}
                  value="default"
                  id="r2"
                />
                <Label className="text-md text-card-foreground" htmlFor="r2">
                  Pay with Paypal
                </Label>
              </div>
              <div
                className={` ${
                  visibleTwo && visibleOne === false ? "block" : "hidden"
                }`}
              >
                <Form {...paybalForm}>
                  <form
                    onSubmit={paybalForm.handleSubmit(HandlePaypalSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={paybalForm.control}
                      name="paypal_email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Paybap Email"
                              {...field}
                              className="h-14 w-full text-card-foreground hover:border-primary duration-100"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      className="w-1/4 cursor-pointer h-10 text-md text-input dark:text-card-foreground"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem
                onClick={handleVisibleThree}
                value="compact"
                id="r3"
              />
              <Label className="text-md text-card-foreground" htmlFor="r3">
                Cash On Delivery
              </Label>
            </div>
          </RadioGroup>
          <div className="flex flex-col gap-4 w-full lg:w-2/4">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-bold text-primary">Subtotal</h4>
              <p className="text-lg font-bold text-primary">${totalAmt}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-card-foreground">Shipping:</p>
                <span className="text-card-foreground">-</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-card-foreground">Tax:</p>
                <span className="text-card-foreground">$40</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-card-foreground">Discount:</p>
                <span className="text-card-foreground">$20</span>
              </div>
              <span className="border-b border-[var(--input)] w-full"></span>
              <div className="mt-4 flex items-center justify-end">
                <p className="text-2xl text-[var(--primary)] font-bold">
                  ${totalAmt + 40 - 20}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
