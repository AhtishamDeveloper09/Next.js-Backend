async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  let response = await data.json();
  return response.result;
}

async function UserDetail({ params }) {
  const usersdata = await getUsers(params.userid);
    // console.log(usersdata);

  return (
    <div>
      <h1>User's Detail</h1>
      <h3>Id: {usersdata.id}</h3>
      <h3>Name: {usersdata.name}</h3>
      <h3>Age: {usersdata.age}</h3>
      <h3>Email: {usersdata.email}</h3>
    </div>
  );
}

export default UserDetail;
