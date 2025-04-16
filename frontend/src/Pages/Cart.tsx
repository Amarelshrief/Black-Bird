import { useState } from "react";
import CartItems from "@/components/CartItems/CartItems";
import { Button } from "@/components/ui/button";
import Details from "@/components/CartItems/Details";
import Payment from "@/components/CartItems/Payment";

const CHECKOUT_STEPS = [
  {
    name: "Cart",
    Component: () => <CartItems />,
  },
  {
    name: "Details",
    Component: () => <Details />,
  },
  {
    name: "Payment",
    Component: () => <Payment />,
  },
];

export function CheckoutStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  function calculateProgressBarWidth() {
    return ((currentStep - 1) / (CHECKOUT_STEPS.length - 1)) * 75;
  }

  const ActiveComponent = CHECKOUT_STEPS[currentStep - 1]?.Component;
  return (
    <div className="main-container m-24">
      <div className="step-item">
        {CHECKOUT_STEPS.map((Step, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Button
              variant={"outline"}
              className={`w-[8rem] cursor-pointer rounded-2xl ${
                currentStep > index || isComplete
                  ? "text-[var(--input)] bg-[var(--primary)]"
                  : ""
              }`}
              onClick={() => setCurrentStep(index + 1)}
            >
              {Step.name}
            </Button>
          </div>
        ))}
        <div className="">
          <div
            className="absolute top-1/2 left-0 h-1 bg-[var(--primary)] -z-10"
            style={{
              width: `${calculateProgressBarWidth()}%`,
              transition: "ease 0.8s",
            }}
          />
        </div>
      </div>
      <ActiveComponent />
    </div>
  );
}

function Cart() {
  return (
    <>
      <CheckoutStepper />
    </>
  );
}

export default Cart;
