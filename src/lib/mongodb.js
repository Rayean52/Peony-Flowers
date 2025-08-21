import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let Client;
let ClientPromise

if (!process.env.MONGODB_URI) {
    throw new Error("Please add MONGODB_URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // Reuse client across hot reloads in dev
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // New client in production
    client = new MongoClient(uri);
    clientPromise = client.connect();
}
