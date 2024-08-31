"use client";
import { useState } from "react";
import "@/app/style.css";

function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    let data = await response.json();
    if (data.success) {
      alert("New User Created");
    } else {
      alert("An Error Occured! Please try gain.");
    }
  };

  return (
    <div className="add-user">
      <h1>Add User</h1>
      <input
        className="input-feild"
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-feild"
        type="text"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="input-feild"
        type="text"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={addUser}>
        Add User
      </button>
    </div>
  );
}

export default AddUser;
