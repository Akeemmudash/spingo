import React, { useState } from "react";
import sampleImage from "../../assets/productImageSamples/spark-plugs.png";
import ProductCard from "../../components/ProductCard";

const AllProducts = ({ layoutMode }) => {
  const initialProducts = [
    {
      productName: "ClutchForce - Precision Clutch Kit",
      productImage: sampleImage,
      productPrice: 24.99,
      discount: 10,
    },
    {
      productName: "SparkPlugs - High Performance",
      productImage: sampleImage,
      productPrice: 19.99,
      discount: 5,
    },
    {
      productName: "BrakeMaster - Complete Brake Set",
      productImage: sampleImage,
      productPrice: 34.99,
      discount: 15,
    },
    {
      productName: "FuelPump - Premium Fuel Injector",
      productImage: sampleImage,
      productPrice: 49.99,
      discount: 20,
    },
    {
      productName: "ClutchForce - Precision Clutch Kit",
      productImage: sampleImage,
      productPrice: 24.99,
      discount: 10,
    },
    {
      productName: "SparkPlugs - High Performance",
      productImage: sampleImage,
      productPrice: 19.99,
      discount: 5,
    },
    {
      productName: "BrakeMaster - Complete Brake Set",
      productImage: sampleImage,
      productPrice: 34.99,
      discount: 15,
    },
    {
      productName: "FuelPump - Premium Fuel Injector",
      productImage: sampleImage,
      productPrice: 49.99,
      discount: 20,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const loadMoreProducts = () => {
    const additionalProducts = [
      {
        productName: "FuelPump - Premium Fuel Injector",
        productImage: sampleImage,
        productPrice: 49.99,
        discount: 20,
      },
      {
        productName: "OilFilter - Durable Engine Filter",
        productImage: sampleImage,
        productPrice: 9.99,
        discount: 10,
      },
      {
        productName: "ClutchForce - Precision Clutch Kit",
        productImage: sampleImage,
        productPrice: 24.99,
        discount: 10,
      },
      {
        productName: "SparkPlugs - High Performance",
        productImage: sampleImage,
        productPrice: 19.99,
        discount: 5,
      },
    ];
    setProducts([...products, ...additionalProducts]);
  };

  return (
    <>
    <div className={`sectionContent ${layoutMode}`}>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
      <div className="show-more-container">
        <button className="btn showMore" onClick={loadMoreProducts}>
          Show More
        </button>
      </div>
    </>
  );
};

export default AllProducts;
