import { mobileNav } from "./javascript/navigationChanges.js";
import { productFetch } from "./javascript/productFetch.js";

const init = () => {
  mobileNav();
  productFetch();
}

init();
