"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FcGoogle } from 'react-icons/fc';
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import logoImage from '@/assets/images/logosaas.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is not ok (status code outside of 200-299)
      if (!response.ok) {
        // Attempt to parse the error response
        const errorData = await response.json().catch(() => ({ error: 'An error occurred' })); 
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      if (data.success) {
        // Redirect to the admin page
        router.push('/admin'); 
      }
    } catch (error: any) { // Catch any errors during the process
      setError(error.message); // Set the error message from the caught error
    }
  };

  return (
    <div className="bg-[#26313c] h-screen flex items-center justify-center p-10">
        <div className="grid box-animate w-full h-full grid-cols-1 bg-white md:grid-cols-2">
            <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
                <div className="my-4">
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <p className="mt-2 text-xs text-slate-400">
                        {''}
                        See your Growth and get consulting growth
                    </p>
                </div>
                <form className="" onSubmit={handleLogin}>
                    <Button className="flex mb-4 items-center w-full gap-4 px-12 bg-transparent rounded-full" 
                    variant="outline">
                      <FcGoogle />
                      Sign In with google
                    </Button>
                    <Label htmlFor="email">Email*</Label>
                    <Input className="mt-2 mb-4 bg-transparent rounded-full px-5"
                    type="email" id="email" placeholder="Email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <Label htmlFor="password">Password*</Label>
                    <Input className="mt-2 mb-4 bg-transparent rounded-full px-5"
                    type="password" id="password" placeholder="Password" required value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                    <Button 
                    type="submit" 
                    className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700">
                    Login
                    </Button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p className="mt-4 text-xs text-slate-200">
                <a href="/register" className="text-blue-500 hover:underline">Click here to register</a>
                </p>
                <p className="mt-4 text-xs text-slate-200">
                @2024 CharlieCool All rights reserved
                </p>

            </div>
            <div className="relative hidden md:flex bg-[linear-gradient(to_bottom,#0f172a,#1e293b)] flex-col text-center items-center justify-center max-w-7xl mx-auto">
              <h2 className="text-7xl text-center font-extrabold text-white mb-4">Blockchain Verification App</h2>
              <p className="text-center text-white text-md ">
                Ensuring product authenticity and transparency using blockchain technology. Verify with confidence and build consumer trust. 
              </p>
            </div>
        </div>
    </div>
  );
}
