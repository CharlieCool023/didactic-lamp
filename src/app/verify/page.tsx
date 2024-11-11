// // Suggested code may be subject to a license. Learn more: ~LicenseLog:846939843.
// 'use client'
// import React, { useState } from 'react';

// const VerificationPage = () => {
//   const [productId, setProductId] = useState('');
//   const [productDetails, setProductDetails] = useState(null);
//   const [error, setError] = useState(null);

//   const handleProductIdChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setProductId(event.target.value);
//   };

//   const handleVerifyProduct = async () => {
//     try {
//       const response = await fetch(`/api/products/${productId}`); // Replace with your API endpoint
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProductDetails(data);
//       setError(null);
//     } catch (error) {
//       //setError(error.message);
//       setProductDetails(null);
//     }
//   };

//   const handleScanQrCode = () => {
//     // Implement QR code scanning logic here
//     console.log('Scan QR code');
//   };


//   return (
//     <div>
//       <h1>Product Verification</h1>
//       <input
//         type="text"
//         placeholder="Enter Product ID"
//         value={productId}
//         onChange={handleProductIdChange}
//       />
//       <button onClick={handleVerifyProduct}>Verify</button>
//       <button onClick={handleScanQrCode}>Scan QR Code</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {productDetails && (
//         <div>
//           <h2>Product Details</h2>
//           {/* Display product details */}
          
//           {/* Add more details as needed 
//           <p>ID: {productDetails.id}</p>
//            <p>Name: {productDetails.name}</p>
//           */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VerificationPage;
