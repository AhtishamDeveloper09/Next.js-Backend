import Link from "next/link";
import DeleteProduct from "../component/DeleteProduct";

const getProducts = async () => {
  let response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  let data = await response.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

async function ProductsList() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Company</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td>
                <Link href={`/productslist/${item._id}`}>Edit</Link>
              </td>
              <td>
                <DeleteProduct id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
