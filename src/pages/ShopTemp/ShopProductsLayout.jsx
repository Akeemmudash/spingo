import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import LayoutControl from "../../components/LayoutControl";
import { categories, productPriceSorting } from "../../constants";
import useShopProductsLayout from "../../hooks/useShopProductsLayout";
import ProductCard from "../../components/ProductCard";
import sampleImage from "../../assets/productImageSamples/spark-plugs.png";
import Button from "../../components/Button";

export default function ShopProductsLayout() {
  const {
    selectedItem,
    layoutMode,
    handleSelect,
    handleLayoutChange,
    selectedCategory,
    handleCategorySelection,
    sortedPrice,
    handleSortPrice,
    layoutClasses,
    cardLayoutType,
  } = useShopProductsLayout();

  return (
    <section className="shop-products__layout container mt-5">
      <div className="shop-products__layout--head d-flex flex-column flex-md-row gap-5 align-items-md-end">
        <div className="d-flex gap-3 gap-md-4 flex-column flex-sm-row justify-content-between">
          <div className="">
            <h4 className="text-uppercase fs-8 text-base-gray">Categories</h4>
            <Dropdown
              onSelect={handleCategorySelection}
              className="shop-products__dropdown"
            >
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="w-100 d-flex justify-content-between align-items-center border-base-black text-capitalize"
              >
                {selectedCategory}
                <FaChevronDown className="text-base-gray fs-8" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item
                  eventKey={"all spare parts"}
                  className="text-capitalize"
                >
                  All Spare Parts
                </Dropdown.Item>
                {categories.map((category) => (
                  <Dropdown.Item
                    eventKey={category}
                    key={category}
                    className="text-capitalize"
                  >
                    {category}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="">
            <h4 className="text-uppercase fs-8 text-base-gray">Price</h4>
            <Dropdown
              onSelect={handleSortPrice}
              className="shop-products__dropdown"
            >
              <Dropdown.Toggle
                variant=""
                className="w-100 d-flex justify-content-between align-items-center border-base-black text-capitalize"
              >
                {sortedPrice}
                <FaChevronDown className="text-base-gray fs-8" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                {productPriceSorting.map((sortCategory) => (
                  <Dropdown.Item
                    eventKey={sortCategory}
                    key={sortCategory}
                    className="text-capitalize"
                  >
                    {sortCategory}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="d-flex ms-md-auto position-relative">
          <Dropdown onSelect={handleSelect} className="sort__dropdown">
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic"
              className="fw-medium px-3"
            >
              {selectedItem} <FaChevronDown />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
              <Dropdown.Item eventKey="Size">Size</Dropdown.Item>
              <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="layout-control__box">
            <LayoutControl
              layoutMode={layoutMode}
              handleLayoutChange={handleLayoutChange}
            />
          </div>
        </div>
      </div>
      <div className={"shop-products__layout--body mt-5 row " + layoutMode}>
        {new Array(10).fill("card").map((num, idx) => (
          <div className={`${layoutClasses}`} key={num + idx}>
            <ProductCard
              productName={"ClutchForce - Precision Clutch Kit"}
              productImage={sampleImage}
              productPrice={24.99}
              productPageLink={"/shop/product/6666666666777"}
              discount={10}
              orientation={cardLayoutType}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 mt-md-5 text-center">
        <Button
          variant="outline"
          className="show-more-btn rounded-pill px-5 py-3"
        >
          Show More
        </Button>
      </div>
    </section>
  );
}
