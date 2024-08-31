import Link from "next/link";
import "@/app/style.css";
import DeleteUser from "@/util/DeleteUser";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  let response = await data.json();
  return response;
}

async function Users() {
  const usersdata = await getUsers();
  // console.log(usersdata);

  return (
    <div>
      <h1>Users List</h1>
      {usersdata.map((item) => (
        <div key={item.id} className="user-item">
          <span>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </span>
          <span>
            <Link href={`/users/${item.id}/update`}>Edit</Link>
          </span>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}

export default Users;
