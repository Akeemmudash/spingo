import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import CategoriesSection from "./CategoriesSection";
import ShopCollectionSection from "./ShopCollectionSection";
import BannerSection from "./BannerSection";
import ValuesSection from "./ValuesSection";
import NewsLetter from "./NewsLetter";
import "./home.css";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <ValuesSection />
      <BannerSection />
      <ShopCollectionSection />
      <NewsLetter />
    </>
  );
}
