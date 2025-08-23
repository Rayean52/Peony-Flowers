import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db("peony-shop"); 
                const users = db.collection("users");

                const user = await users.findOne({ email: credentials.email });
                if (!user) return null;

                const ok = await bcrypt.compare(credentials.password, user.passwordHash);
                if (!ok) return null;

                // Return minimal safe user object
                return { id: String(user._id), name: user.name || "User", email: user.email };
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/sign-up", 
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.id) session.user.id = token.id;
            if (token?.name) session.user.name = token.name;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };