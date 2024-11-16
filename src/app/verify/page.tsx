import Image from "next/image"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Verify the Authenticity of Products
          </h3>
          <div className="mb-4">
            <label htmlFor="productId" className="block text-gray-700 font-medium mb-2">
              Product ID:
            </label>
            <Input
              id="productId"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Enter Product ID"
            />
            <p className="text-sm text-muted-foreground">
                You can only input digit product ID.
              </p>
          </div>
          {/* Add a button or other interactive elements here to trigger verification */}
          <Button className="w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline">Verify</Button>
          
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/product-verification-icon.svg" // Replace with your actual image path
            alt="Product Verification"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}
