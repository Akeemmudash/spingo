import { FuelPumps } from "../../assets";
import Breadcrumb from "../../components/Breadcrumb";
import ProductLoopCarousel from "./ProductLoopCarousel.jsx";
import ProductDetails from "./ProductDetails.jsx";

const item = {
  image: FuelPumps,
  productName: "Bosch - Premium Brake Pads Set for Sedans",
  productDescription:
    "Made with high-quality materials and advanced friction formulations, the Bosch brake pads ensure a longer lifespan and consistent braking performance.",
  price: "$199.99",
  goldPrice: "$400.99",
  reviews: 11,
  colors: [
    { name: "Black", img: FuelPumps },
    { name: "Brown", img: FuelPumps },
    { name: "Yellow", img: FuelPumps },
  ],
  ratings: 1,
  weight: "17 1/2×20 5/8",
  productNumber: "1117",
  category: "Oil Filters",
};

const ProductLoop = () => {
  return (
    <section className="page-header container">
      <div className="mb-4">
        <Breadcrumb />
      </div>
      <div className="page-container">
        <div className="product-container row">
          <ProductLoopCarousel item={item} />
          <ProductDetails item={item} />
        </div>
      </div>
    </section>
  );
};

export default ProductLoop;
