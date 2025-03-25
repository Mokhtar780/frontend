const deleteProduct = async (productId: number): Promise<boolean> => {
    try {
      await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: "DELETE",
      });
      return true;
    } catch (error) {
      console.error("Error deleting product:", error);
      return false;
    }
  };
  
  export default deleteProduct;