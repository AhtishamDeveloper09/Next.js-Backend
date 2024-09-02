"use client";

import { useRouter } from "next/navigation";

function DeleteProduct({ id }) {
  const router = useRouter();

  const deleteProductData = async () => {
    let response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "Delete",
    });
    let data = await response.json();
    if (data.success) {
      alert("Product Deleted Successfully");
      router.push("/productslist");
    }
  };

  return <button onClick={deleteProductData}>Delete</button>;
}

export default DeleteProduct;
