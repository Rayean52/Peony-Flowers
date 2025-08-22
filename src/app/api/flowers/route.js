import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET (list flowers)
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("peony-shop"); 
        const flowers = await db.collection("flowers").find().toArray();

        return NextResponse.json(flowers);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch flowers" },
            { status: 500 }
        );
    }
}

// Handle POST (add flower)
export async function POST(request) {
    try {
        const body = await request.json();

        const { name, price, imageUrl, category, description, quantity } = body;

        if (!name || !price || !imageUrl) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("peony-shop");
        const flowers = db.collection("flowers");

        const result = await flowers.insertOne({
            name,
            price,
            imageUrl,
            category,
            description,
            quantity,
            createdAt: new Date(),
        });

        return NextResponse.json(
            { message: "Flower added successfully", id: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to add flower" },
            { status: 500 }
        );
    }
}
