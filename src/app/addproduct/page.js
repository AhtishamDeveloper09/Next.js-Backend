"use client";
import "@/app/style.css";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    let response = await fetch("http://localhost:3000/api/products", {
      method: "Post",
      body: JSON.stringify({ name, color, price, company, category }),
    });
    let data = await response.json();
    if (data.success) {
      alert("Product Added Successfully");
    } else {
      alert("Oops! Please try again.");
    }
  };

  return (
    <div className="add-product">
      <h1>Add Products</h1>
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
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
