import NextAuth from "next-auth"
// import {MongoDBAdapter} from "@auth/mongodb-adapter"
// import connectClient from "../../../lib/mongdb"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
  // adapter: MongoDBAdapter(connectClient),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGle_ID,
      clientSecret: process.env.GOOGle_SECRET,
    }),
  ],
})


