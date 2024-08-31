import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js API Routes Practice</h1>
      <br />
      <Link href="/users">Users List</Link>
      <br />
      <br />
      <Link href="/adduser">Add User</Link>
    </div>
  );
}
