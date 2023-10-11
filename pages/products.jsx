import {useEffect, useState} from "react"
import AddProduct_btn from "../components/Add_product_btn"
import Layout from "../components/Layout"
import Link from "next/link"
const products = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
    fetch("/api/products", {
      method: "GET",
    })
      .then((res) => res.json())b
      .then((data) => setProducts(data))
  })
  console.log(products)
  return (
    <Layout>
      <Link href={"/products/new"}>
        {!products ? (
          <AddProduct_btn />
        ) : (
          products.map((product) => {
            return <h1>{product.title}</h1>
          })
        )}
      </Link>
    </Layout>
  )
}

export default products
