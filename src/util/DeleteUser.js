"use client";
function DeleteUser({ id }) {
  //   console.log(id);
  const deleteUser = async () => {
    let response = await fetch("http://localhost:3000/api/users/" + id, {
      method: "delete",
    });
    let data = await response.json();
    if (data.success) {
      alert("user deleted successfully");
    }
  };

  return <button onClick={deleteUser}>Delete</button>;
}

export default DeleteUser;
