'use client';
import '../../styles/globals.css';
import NavBar from '../../components/navbarOnLogin.jsx';
import {Providers} from "../providers";

export default function RootLayout({children}) {
    return (
      <html lang="en" className="h-full scrollbar-hide" suppressHydrationWarning>
        <body className="flex flex-col scrollbar-hide">
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark", enableSystem: false }}>
            <NavBar />
            <main className='min-h-screen flex-1'>
              {children}
            </main>
          </Providers>
        </body>
      </html>

    );
  }