// lib/mongodb.ts
import { Db, MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
  }
  
  if (!process.env.DB_NAME) {
    throw new Error("Please define the DB_NAME environment variable inside .env.local");
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db(process.env.DB_NAME);
  
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
