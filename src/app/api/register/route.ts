// src/app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt'; 
import { connectToDatabase } from '../../../lib/mongodb'; 
import User from '../../../models/User';

export async function POST(req: NextRequest) {
  try {
    const { client, db } = await connectToDatabase();

    const { name, email, password } = await req.json();

    // Check if all fields are provided
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); 

    // Create a new user
    const newUser = {
      name,
      email,
      password: hashedPassword, 
    };

    await db.collection("users").insertOne(newUser);

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 }); 

  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 }); 
  }
}
