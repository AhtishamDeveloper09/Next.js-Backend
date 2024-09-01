"use client";
import "@/app/style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AddProduct({ params }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  useEffect(() => {
    //   console.log(params);
    getProductData();
  }, []);

  const getProductData = async () => {
    let response = await fetch(
      `http://localhost:3000/api/products/${params.editproduct}`
    );
    let data = await response.json();
    if (data.success) {
      setName(data.result.name);
      setColor(data.result.color);
      setPrice(data.result.price);
      setCompany(data.result.company);
      setCategory(data.result.category);
    }
  };

  const updateProduct = async () => {
    let response = await fetch(
      `http://localhost:3000/api/products/${params.editproduct}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, color, price, company, category }),
      }
    );
    let data = await response.json();
    if (data.success) {
      alert("Product Updated Successfully");
      router.push("/productslist");
    } else {
      alert("Oops! Please try again.");
    }
  };

  return (
    <div className="add-product">
      <h1>Update Product</h1>
      <input
        className="input-feild"
        type="text"
        value={name}
        placeholder="Enter Product Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-feild"
        type="text"
        value={color}
        placeholder="Enter Product Color"
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        className="input-feild"
        type="text"
        value={price}
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="input-feild"
        type="text"
        value={company}
        placeholder="Enter Product Company"
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className="input-feild"
        type="text"
        value={category}
        placeholder="Enter Product Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
      <br />
      <Link href="/productslist">Go to Products List Page</Link>
    </div>
  );
}

export default AddProduct;
