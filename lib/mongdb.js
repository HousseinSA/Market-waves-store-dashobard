import {MongoClient} from "mongodb"
process.env.MONGODB_LINK
function connectClient() {
  const client = MongoClient.connect(process.env.MONGODB_LINK)
  console.log(client)
  return client
}
export default connectClient

