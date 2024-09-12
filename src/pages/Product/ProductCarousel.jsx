import ProductCard from "../../components/ProductCard";
import sampleImage from "../../assets/productImageSamples/spark-plugs.png";
import Button from "../../components/Button";

const ProductCarousel = () => {
  return (
    <section className="mt-5 overflow-x-hidden">
      <div className="container position-relative px-4">
        <div className="heading d-flex justify-content-between align-content-baseline">
          <h2>You Might Also Like</h2>
          <div className="">
            <Button type="link" to="/shop">
              More Products
            </Button>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="product-carousel__scroll-box row flex-nowrap section__body py-4 ps-2   overflow-x-scroll"
            style={{ marginRight: "-178px" }}
          >
            <div className="product-item w-auto">
              <ProductCard
                productName={"ClutchForce - Precision Clutch Kit"}
                productImage={sampleImage}
                productPrice={24.99}
                discount={10}
              />
            </div>
            <div className="product-item w-auto">
              <ProductCard
                productName={"ClutchForce - Precision Clutch Kit"}
                productImage={sampleImage}
                productPrice={24.99}
                discount={10}
              />
            </div>
            <div className="product-item w-auto">
              <ProductCard
                productName={"ClutchForce - Precision Clutch Kit"}
                productImage={sampleImage}
                productPrice={24.99}
                discount={10}
              />
            </div>
            <div className="product-item w-auto">
              <ProductCard
                productName={"ClutchForce - Precision Clutch Kit"}
                productImage={sampleImage}
                productPrice={24.99}
                discount={10}
              />
            </div>
            <div className="product-item w-auto">
              <ProductCard
                productName={"ClutchForce - Precision Clutch Kit"}
                productImage={sampleImage}
                productPrice={24.99}
                discount={10}
              />
            </div>

            {/* Add other product cards here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
