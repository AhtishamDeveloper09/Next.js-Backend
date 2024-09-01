import Image from "next/image";
import styles from "@/app/style.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-page">
      <h1>Next.js Backend</h1>
      <br />
      <Link href="/productslist">Products List</Link>
      <br />
      <br />
      <Link href="/addproduct">Add Product</Link>
    </div>
  );
}
