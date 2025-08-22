import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        if (!email || !password) {
            return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("peony-shop");
        const users = db.collection("users");

        const exists = await users.findOne({ email });
        if (exists) {
            return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const { insertedId } = await users.insertOne({
            name: name || "",
            email,
            passwordHash,
            createdAt: new Date(),
        });

        return new Response(JSON.stringify({ insertedId }), { status: 201 });
    } catch (e) {
        return new Response(JSON.stringify({ error: "Failed to register" }), { status: 500 });
    }
}
