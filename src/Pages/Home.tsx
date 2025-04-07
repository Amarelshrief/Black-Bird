import Advantages from "@/components/Advantages/Advantages";
import Announce from "@/components/Annoucne/Announce";
import ElecProducts from "@/components/ElecProducts/ElecProducts";
import FeaturedBrands from "@/components/FeaturedBrands/FeaturedBrands";
import Hero from "@/components/Hero/Hero";
import LongBanner from "@/components/LongBanner/LongBanner";
import Market from "@/components/Market/Market";
import MenFashion from "@/components/MenFashion/MenFashion";
import OurProducts from "@/components/OurProducts/OurProducts";
import ProductsList from "@/components/ProductsList/ProductsList";
import WomenFashion from "@/components/WomenFashion/WomenFashion";

function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <OurProducts />
      <ProductsList />
      <Announce />
      <ElecProducts />
      <Market />
      <MenFashion />
      <LongBanner />
      <WomenFashion />
      <FeaturedBrands />
    </>
  );
}

export default Home;
