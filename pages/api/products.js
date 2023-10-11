// import {mongooseConnect, productModel} from "../../lib/mongoose_module"

export default async function handler(req, res) {
  // await mongooseConnect()
  if (req.method == "POST") {
    const {title, descreption, price} = req.body
    const productDoc = await productModel.create({
      title,
      descreption,
      price,
    })
    res.json(productDoc)
  }
  if (req.method === "GET") {
    const productsDoc = await productModel.find()
    res.json(productsDoc)
  }
}
