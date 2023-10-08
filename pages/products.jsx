import Layout from "../components/Layout"
import Link from "next/link"
const products = () => {
  return (
    <Layout>
      <h2 className="text-main">Products</h2>
      <Link href={"/products/newproduct"}>
        <button className="text-white bg-main rounded p-4">Add Product</button>
      </Link>
    </Layout>
  )
}

export default products
