import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatTextToSlug } from "../utils";

export default function useShopProductsLayout() {
  const [selectedItem, setSelectedItem] = useState("Sort by");
  const [layoutMode, setLayoutMode] = useState("grid3");
  const location = useLocation();
  const { category } = useParams();
  const navigate = useNavigate();
  const [sortedPrice, setSortedPrice] = useState("All Price");

  const selectedCategory = category
    ? category.replace("-", " ")
    : "all spare parts";

  const handleCategorySelection = useCallback(
    (category) => {
      const newPath =
        category !== "all spare parts"
          ? `/shop/${formatTextToSlug(category)}`
          : `/shop`;

      if (location.pathname !== newPath) {
        navigate(newPath);
      }
    },
    [location.pathname, navigate]
  );
  const screenWidthRef = useRef(window.innerWidth);

  useEffect(() => {
    const newLocation = `/shop/${formatTextToSlug(selectedCategory)}`;
    screenWidthRef.current = window.innerWidth;
    if (
      selectedCategory !== "all spare parts" &&
      location.pathname !== newLocation
    ) {
      navigate(newLocation);
    }
    if (screenWidthRef.current <= 767) {
      handleLayoutChange("column2");
    }
  }, [selectedCategory, navigate, location.pathname]);

  const handleSelect = (eventKey) => setSelectedItem(eventKey);

  const handleLayoutChange = (mode) => setLayoutMode(mode);
  const handleSortPrice = (sortType) => setSortedPrice(sortType);

  let cardLayoutType = "vertical";
  let layoutClasses = "";

  switch (layoutMode) {
    case "grid3":
      layoutClasses = "col-12 col-sm-6 col-md-4 col-lg-3";
      break;
    case "column2":
      layoutClasses = "col-6 col-lg-4";
      break;
    case "horizontalScroll":
      layoutClasses = "col-12 col-sm-4 col-lg-3";
      break;
    case "horizontalListing":
      layoutClasses = "col-12 col-md-6 col-xl-4";
      cardLayoutType = "horizontal";
      break;
    default:
      layoutClasses = "col-12 col-sm-6 col-md-4 col-lg-3";
  }

  return {
    selectedItem,
    layoutMode,
    handleSelect,
    handleLayoutChange,
    selectedCategory,
    handleCategorySelection,
    sortedPrice,
    handleSortPrice,
    cardLayoutType,
    layoutClasses,
  };
}
