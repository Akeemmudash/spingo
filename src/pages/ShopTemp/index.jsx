import ShopPageHeader from "./ShopPageHeader";
import NewsLetter from "../../components/NewsLetter";
import ShopProductsLayout from "./ShopProductsLayout";
import "./shop.css";

export default function Shop() {
  return (
    <>
      <ShopPageHeader />
      <ShopProductsLayout />
      <NewsLetter />
    </>
  );
}
