import ProductLoop from "./ProductLoop";
import ProductCarousel from "./ProductCarousel";
import NewsLetter from "../../components/NewsLetter";
import "./product.css";
import Tabs from "./Tabs";

export default function Product() {
  return (
    <>
      <ProductLoop />
      <Tabs />
      <ProductCarousel />
      <NewsLetter />
    </>
  );
}
