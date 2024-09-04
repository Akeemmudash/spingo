import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import CategoriesSection from "./CategoriesSection";
import ShopCollectionSection from "./ShopCollectionSection";
import BannerSection from "./BannerSection";
import Values from "../../components/Values";
import NewsLetter from "../../components/NewsLetter";
import "./home.css";
import LatestArticlesSection from "./LatestArticlesSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <Values />
      <BannerSection />
      <ShopCollectionSection />
      <NewsLetter />
      <LatestArticlesSection />
    </>
  );
}
