import Advantages from "@/components/Advantages/Advantages";
import Announce from "@/components/Annoucne/Announce";
import Hero from "@/components/Hero/Hero";
import OurProducts from "@/components/OurProducts/OurProducts";
import ProductsList from "@/components/ProductsList/ProductsList";

function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <OurProducts />
      <ProductsList />
      <Announce />
    </>
  );
}

export default Home;
