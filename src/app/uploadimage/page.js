"use client";
import { useState } from "react";

function UploadImage() {
  const [file, setFile] = useState();

  const onImageUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    let response = await fetch("api/uploadfile", {
      method: "POST",
      body: data,
    });
    response = await response.json();
    if (response.success) {
      alert("file uploaded successfully");
    }
  };
  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={onImageUpload}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default UploadImage;
