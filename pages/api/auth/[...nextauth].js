import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import TodoUser from "@/models/TodoUser";
import { verifyPassword } from "@/utils/auth";
const authOption = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectDB();
        if (!email || !password) throw new Error("Invalid Data!");
        const user = await TodoUser.findOne({ email: email.toLowerCase() });
        if (!user) throw new Error("User doesn't exist");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("email or password is incorrect");
        return { email };
      },
    }),
  ],
};
export default NextAuth(authOption);
