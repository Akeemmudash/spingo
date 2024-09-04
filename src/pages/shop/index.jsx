import NewsLetter from "../../components/NewsLetter";
import PageHeader from "./PageHeader";
import Products from "./Products";
import MLProducts from "./MLProducts";
import "./shop.css";

export default function Shop() {
  return (
    <>
      <PageHeader />
      <Products />
      <MLProducts />
      <NewsLetter />
    </>
  );
}
