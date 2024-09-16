import { motion } from "framer-motion";
import {
  FuelPumps,
  OilFilters,
  SparkPlugs,
  WheelBearings,
  ControlArms,
  ClutchKibs,
} from "../../assets";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../constants";

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
    <motion.section
      className="categories-section container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: true }}
    >
      <h2>Shop by Categories</h2>
      <div className="categories row section__body">
        {categories.map((category, index) => {
          const link = `/shop/${category.ProductName.toLowerCase().replace(
            " ",
            "-"
          )}`;

          return (
            <Link to={link} className="col-6 col-md-4" key={index}>
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
                <motion.div className="category-item" variants={itemVariants}>
                  <img src={category.ProductImg} alt={category.ProductName} />
                  <p className="mb-4">{category.ProductName}</p>
                </motion.div>
              </OverlayTrigger>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CategoriesSection;
