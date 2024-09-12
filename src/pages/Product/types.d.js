import PropTypes from "prop-types";

export const productItemTypes = {
  image: PropTypes.any,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  price: PropTypes.string,
  goldPrice: PropTypes.string,
  reviews: PropTypes.boolnumber,
  colors: PropTypes.arrayOf({
    name: PropTypes.string,
    img: PropTypes.any,
  }),
  ratings: PropTypes.number,
  weight: PropTypes.string,
  productNumber: PropTypes.string,
  category: PropTypes.string,
};
