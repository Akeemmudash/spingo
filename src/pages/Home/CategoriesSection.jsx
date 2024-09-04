import {
  FuelPumps,
  OilFilters,
  SparkPlugs,
  WheelBearings,
  ControlArms,
  ClutchKibs,
} from "../../assets";
import { OverlayTrigger, Popover } from "react-bootstrap";

const CategoriesSection = () => {
  const categories = [
    {
      ProductImg: FuelPumps,
      ProductName: "Fuel Pumps",
      ProductDescription:
        "High-quality fuel pumps for efficient fuel delivery.",
    },
    {
      ProductImg: OilFilters,
      ProductName: "Oil Filters",
      ProductDescription: "Durable oil filters to keep your engine clean.",
    },
    {
      ProductImg: SparkPlugs,
      ProductName: "Spark Plugs",
      ProductDescription: "Reliable spark plugs for better engine performance.",
    },
    {
      ProductImg: WheelBearings,
      ProductName: "Wheel Bearings",
      ProductDescription: "Robust wheel bearings for smooth wheel operation.",
    },
    {
      ProductImg: ControlArms,
      ProductName: "Control Arms",
      ProductDescription: "Sturdy control arms for better suspension control.",
    },
    {
      ProductImg: ClutchKibs,
      ProductName: "Clutch Kits",
      ProductDescription:
        "Complete clutch kits for a smooth driving experience.",
    },
  ];

  return (
    <section className="categories-section container ">
      <h2 className="">Shop by Categories</h2>
      <div className="categories row section__body">
        {categories.map((category, index) => (
          <div className="col-6 col-md-4" key={index}>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={
                <Popover id={`popover-${index}`}>
                  <Popover.Header as="h3">
                    {category.ProductName}
                  </Popover.Header>
                  <Popover.Body>{category.ProductDescription}</Popover.Body>
                </Popover>
              }
            >
              <div className="category-item">
                <img src={category.ProductImg} alt={category.ProductName} />
                <p>{category.ProductName}</p>
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
