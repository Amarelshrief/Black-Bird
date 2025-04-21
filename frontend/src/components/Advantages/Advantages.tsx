import { Truck, AlarmClock, HandCoins, CircleDollarSign } from "lucide-react";

function Advantages() {
  return (
    <section className="mt-8" id="advantages">
      <div className="main-container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center justify-center gap-4 bg-[var(--input)] hover:bg-[var(--ring)] duration-300 rounded-xl p-5">
          <Truck className="text-[var(--primary)]" size={33} />
          <div className="flex flex-col">
            <p className="text-[var(--primary)] text-md font-bold">
              Fast Delivery
            </p>
            <p className="text-sm text-card-foreground">Start from $10</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-[var(--input)] hover:bg-[var(--ring)] duration-300 rounded-xl p-5">
          <CircleDollarSign className="text-[var(--primary)]" size={33} />
          <div className="flex flex-col">
            <p className="text-[var(--primary)] text-md font-bold">
              Money Guarantee
            </p>
            <p className="text-sm text-card-foreground">7 Days Back</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-[var(--input)] hover:bg-[var(--ring)] duration-300 rounded-xl p-5">
          <AlarmClock className="text-[var(--primary)]" size={33} />
          <div className="flex flex-col">
            <p className="text-[var(--primary)] text-md font-bold">365 Days</p>
            <p className="text-sm text-card-foreground">For free return</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-[var(--input)] hover:bg-[var(--ring)] duration-300 rounded-xl p-5">
          <HandCoins className="text-[var(--primary)]" size={33} />
          <div className="flex flex-col">
            <p className="text-[var(--primary)] text-md font-bold">Payment</p>
            <p className="text-sm text-card-foreground">Secure System</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
