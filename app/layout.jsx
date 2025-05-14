'use client';
import '../styles/globals.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import {Providers} from "./providers";
import React from "react";


export default function RootLayout({children}) {
    const [mounted, setMounted] = React.useState(false);
  
    // run as soon as the component mounts
    React.useEffect(() => {
      setMounted(true);
    }, []);

    return (
      <html lang="en" className="h-full scrollbar-hide" suppressHydrationWarning>
        <body className="flex flex-col scrollbar-hide">
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark", enableSystem: false }}>
            <NavBar />
            <main className='min-h-screen flex-1'>
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>

    );
  }