import Image from "next/image";
import ProductCard from "./components/ProductCard/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className='pt-8 pl-8'>Hello World</div>
      <Link href="/users">Users Page</Link>
      <ProductCard />
    </main>
  );
}
