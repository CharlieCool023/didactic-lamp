// components/LoadingScreen.tsx
import React from 'react';
import Logo from "../assets/images/logosaas.png"
import Image from "next/image"

const LoadingScreen: React.FC = () => {
  return (
    <div style={styles.container}>
        <Image src={Logo} alt="Logo" width={100} height={100} />

    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '[linear-gradient(to_right,#f87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)]',
  },
  logo: {
    width: '100px', // Adjust the size as needed
  },
} as const;

export default LoadingScreen;
