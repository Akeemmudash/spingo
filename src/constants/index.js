import {
  americanExpress,
  applePay,
  mastercard,
  payPal,
  stripe,
  visa,
} from "../assets/footer";

const footerNavItems = [
  { title: "home", path: "/" },
  { title: "shop", dropDownItems: [{}], path: "/shop" },
  {
    title: "products",
    dropDownItems: [{}],
    path: "/products",
  },
  {
    title: "blog",
    dropDownItems: [{}],
    path: "/blog",
  },
  {
    title: "contact us",
    path: "/contact",
  },
];
const paymentMethods = [
  { americanExpress },
  { applePay },
  { payPal },
  { mastercard },
  { stripe },
  { visa },
];
export { footerNavItems, paymentMethods };
export { categories, productPriceSorting } from "./data";
export { itemVariants, containerVariants } from "./variants";
