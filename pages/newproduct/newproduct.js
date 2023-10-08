import Layout from "../../components/Layout"

const newproduct = () => {
  return (
    <Layout>
      <h2 className="text-main">Add Product</h2>
      <div className="rounded focus:outline-none border-main ">
        <input type="text" placeholder="add product" />
      </div>
      <button className="text-white bg-main rounded p-4">Add Product</button>
    </Layout>
  )
}

export default newproduct
