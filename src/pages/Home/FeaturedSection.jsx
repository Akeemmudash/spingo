import "./home.css";
import ProductCard from "../../components/ProductCard";
import sampleImage from "../../assets/productImageSamples/spark-plugs.png";
import { useState } from "react";

export default function FeaturedSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="featured-section mt-5">
      <div className="container">
        <div className="row">
          <div className="featured__heading d-flex justify-content-between align-items-center">
            <h2 className="font-primary mb-0">Featured</h2>
            <div className="featured__pagination d-flex gap-1">
              {new Array(5).fill(2).map((_, index) => (
                <span
                  key={index}
                  className={`pagination-el d-block ${
                    activeIndex === index ? "active " : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="pagination-el__bullet d-block"></span>
                </span>
              ))}
            </div>
          </div>
          <div className="featured__products section__body overflow-hidden">
            <div className="featured__carousel row flex-nowrap">
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
              <div className="product-item col-3">
                <ProductCard
                  productName={"ClutchForce - Precision Clutch Kit"}
                  productImage={sampleImage}
                  productPrice={24.99}
                  productPageLink={"/shop/product/6666666666777"}
                  discount={10}
                  orientation="vertical"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
