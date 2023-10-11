// import {Schema, model}, mongoose from "mongoose"
// const productSchema = new Schema({
//   title: {type: String, required: true},
//   discreption: {type: String, required: true},
//   price: {type: Number, required: true},
// })
// export function mongooseConnect() {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose.connection.asPromise()
//   } else {
//     const uri = process.env.MONGODB_URI
//     return mongoose.connect(uri)
//   }
// }

// export const productModel = model("Product", productSchema)
