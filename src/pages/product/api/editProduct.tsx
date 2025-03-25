import axios from "axios";

const editProduct = async (
  id: number,
  product: {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
): Promise<boolean> => {
  try {
    await axios.put(`https://fakestoreapi.com/products/${id}`, product);
    return true;
  } catch (error) {
    console.error("Error editing product:", error);
    return false;
  }
};

export default editProduct;