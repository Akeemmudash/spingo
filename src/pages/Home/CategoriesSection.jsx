import React from "react";
import {
  FuelPumps,
  OilFilters,
  SparkPlugs,
  WheelBearings,
  ControlArms,
  ClutchKibs,
} from "../../assets";
import "./home.css";

const CategoriesSection = () => {
  const categories = [
    {
      ProductImg: FuelPumps,
      ProductName: "Fuel Pumps",
    },
    {
      ProductImg: OilFilters,
      ProductName: "Oil Filters",
    },
    {
      ProductImg: SparkPlugs,
      ProductName: "Spark Plugs",
    },
    {
      ProductImg: WheelBearings,
      ProductName: "Wheel Bearings",
    },
    {
      ProductImg: ControlArms,
      ProductName: "Control Arms",
    },
    {
      ProductImg: ClutchKibs,
      ProductName: "Clutch Kits",
    },
  ];

  return (
    <section className="categories-section">
      <h1>Shop by Categories</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.ProductImg} alt={category.ProductName} />
            <p>{category.ProductName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
