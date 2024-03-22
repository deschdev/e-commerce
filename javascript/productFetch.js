import { cart } from "./cartDataFill.js";
import { productPageUpdate } from "./productPage.js";

export const productFetch = async () => {
  try {
    const response = await fetch("../data.json");
    const data = await response.json();

    // console.log("Norman here is the json data", data);

    // calling the functions
    productPageUpdate(data)
    cart(data);

  } catch (error) {
    console.error("Error fetching data:", error)
  }
}