"use client";
import React, { createContext, useContext, useState, useEffect, use } from "react";
import { createDirectus, rest, authentication, readMe } from "@directus/sdk"; // Make sure readMe is imported
import { usePathname, useRouter } from "next/navigation"; // For Next.js 13+ App Router

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL)
  .with(rest())
  .with(
    authentication("cookie", {
      credentials: "include",
      autoRefresh: true,
    })
  );

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // This will hold { firstName, lastName, Role }
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

    useEffect(() => {
        async function fetchUser() {
            try{const currentUser = await directus.readMe();
            if (currentUser) {
                setUser({
                    firstName: currentUser.first_name || "",
                    lastName: currentUser.last_name || "",
                    role: currentUser.role || "",
                });
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);

            }}
            catch (error) {
                console.error("Error fetching user:", error);
                setUser(null);
                setIsAuthenticated(false);
                // Optionally redirect to login page if not authenticated
                if (pathname !== "/login") {
                    router.push("/login");
                }
            } finally {
                setLoading(false);
            }
            setLoading(false);
        }

        fetchUser();

    }, [pathname, router]);


    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner or skeleton loader
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
  return useContext(AuthContext);
}
