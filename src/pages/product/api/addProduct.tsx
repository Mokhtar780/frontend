import axios from "axios";

const addProduct = async (product: {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}): Promise<boolean> => {
  try {
    await axios.post("https://fakestoreapi.com/products/", product);
    return true;
  } catch (error) {
    console.error("Error adding product:", error);
    return false;
  }
};

export default addProduct;