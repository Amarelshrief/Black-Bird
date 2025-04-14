import CartItems from "@/components/CartItems/CartItems";

const CHECKOUT_STEPS = [
  {
    name: "Cart",
    Component: () => <CartItems />,
  },
  {
    name: "Details",
    Component: () => <div>Details</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Payment</div>,
  },
];

function Cart() {
  return (
    <>
      <CartItems />
    </>
  );
}

export default Cart;
