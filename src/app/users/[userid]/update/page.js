"use client";
import { useEffect, useState } from "react";
import "@/app/style.css";

function Update({ params }) {
  //   console.log(params.userid);
  let userid = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await fetch(`http://localhost:3000/api/users/${userid}`);
    let data = await response.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    // console.log(name, age, email);
    let response = await fetch(`http://localhost:3000/api/users/${userid}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    let data = await response.json();
    if (data.success) {
      alert("information updated successfully");
    } else {
      alert("please try with valid input");
    }
  };

  return (
    <div className="add-user">
      <h1>Update User's Detail</h1>
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
      <button className="btn" onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}

export default Update;
