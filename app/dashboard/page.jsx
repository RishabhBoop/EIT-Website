"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const { data: session, status: session_status } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirect to login if not authenticated
      router.push("/login");
    },
  });

  useEffect(() => {
    if (session_status === "authenticated") {
      setIsLoading(false);
    }
  }, [session_status]);

  console.log("Session:", session);

  if (isLoading) {
    return (
      <div className="w-full h-svh flex flex-col gap-20 items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-svh flex flex-col gap-20 items-center justify-center">
      <h1 className="text-5xl font-bold font-sixtyfour text-[#00ff92] select-none">
        Hallo {session.user.name}!
      </h1>
    </div>
  );
}
