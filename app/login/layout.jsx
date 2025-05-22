'use client';
import '../../styles/globals.css';
import NavBar from '../../components/navbarOnLogin.jsx';
import {Providers} from "../providers";

export default function RootLayout({children}) {
    return (
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark", enableSystem: false }}>
        <main className='min-h-screen flex-1'>
          {children}
        </main>
      </Providers>
    );
  }