import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      scope: ["profile", "email"],
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
})
// import {MongoDBAdapter} from "@auth/mongodb-adapter"
// import connectClient from "../../../lib/mongdb"
