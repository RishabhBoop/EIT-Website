"use client";
import "../styles/globals.css";
import { fontSans, fontUbuntu, fontDoto } from "@/config/fonts"; // Import fontDoto
import Footer from "../components/footer";
import { Providers } from "./providers";

import React from "react";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = React.useState(false);

  // run as soon as the component mounts
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" className="h-full scrollbar-hide" suppressHydrationWarning>
      <head />
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable} ${fontUbuntu.variable} ${fontDoto.variable}`} // Add fontDoto.variable
      >
          <Providers
            themeProps={{
              attribute: "class",
              defaultTheme: "dark",
              enableSystem: false,
            }}
          >
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow flex items-center justify-center">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
      </body>
    </html>
  );
}
