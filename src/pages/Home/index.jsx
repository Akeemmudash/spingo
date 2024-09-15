import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import CategoriesSection from "./CategoriesSection";
import ShopCollectionSection from "./ShopCollectionSection";
import BannerSection from "./BannerSection";
import Values from "../../components/Values";
import NewsLetter from "../../components/NewsLetter";
import ArticlesSection from "./ArticlesSection";
import "./home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <Values />
      <BannerSection />
      <ShopCollectionSection />
      <ArticlesSection />
      <NewsLetter />
    </>
  );
}
