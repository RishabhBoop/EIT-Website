"use client";
import { Button, Input, Form } from "@heroui/react";
import Logo from "../../logos/fs-eit-logo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const emailToSend = username.toLowerCase() + "@h-ka.de";
    console.log("Email to send:", emailToSend);
    try {
      const response = await signIn("credentials", {
        email: emailToSend,
        password: password,
        redirect: false, // Prevent automatic redirect
      });

      if (response?.error) {
        // Auth.js returns a generic 'CredentialsSignin' on failure.
        // You can make this more user-friendly.
        if (response.error === "CredentialsSignin") {
          setError("Invalid username or password. Please try again.");
        } else {
          setError(response.error); // Display other potential Auth.js errors
        }
        console.error("Auth.js signIn error:", response.error);
      } else {
        // Login successful, redirect to your dashboard or protected page
        router.push("/dashboard"); // Or wherever your protected route is
      }
    } catch (unexpectedError) {
      console.error("Unexpected login error:", unexpectedError);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Always stop loading, regardless of success or failure
    }
  };

  return (
    <div className="w-full h-svh flex flex-cols gap-20 items-center justify-center">
      <img
        src="Gemini_Generated_Img_0.jpeg"
        alt="Fachschaft EIT"
        className="blur-xl w-full h-full object-cover opacity-100"
        // className="w-full h-full object-scale-down opacity-100"
      />
      <div className="absolute w-full md:w-1/2 lg:w-1/3 h-full md:h-auto flex flex-col gap-6 p-10 rounded-xl shadow-2xl backdrop-blur-2xl bg-black bg-opacity-50 ">
        <Logo className="h-[70px] lg:h-[100px]" />
        <Form
          className="w-full max-w-xs gap-6 place-self-center"
          onSubmit={onSubmit}
        >
          <Input
            name="username"
            label="Username"
            placeholder="Enter your RZ-Kürzel"
            validate={(value) => {
              if (!value) {
                return "Username is required.";
              }
              let p1 = value.slice(0, 4);
              let p2 = value.slice(4);
              if (!/^[a-zA-Z]+$/.test(p1) || !/^[0-9]+$/.test(p2)) {
                return "Invalid Username!";
              } else if (parseInt(p2) - 1000 < 0) {
                return "Looks suspiciosly like a prof...";
              }
            }}
            endContent={
              <div className="pointer-events-none flex items-center w-1/2 justify-end">
                <span className="text-default-400 text-md md:text-md text-neutral-600 font-montserrat">
                  @h-ka.de
                </span>
              </div>
            }
            required
            classNames={{
              inputWrapper: [
                "bg-black/20",
                "transition-all",
                "rounded-lg",
                "backdrop-blur-xl",
                "data-[hover=true]:bg-black/30",
                "data-[hover=true]:shadow-sm",
                "data-[hover=true]:shadow-primary/50",
                "group-data-[focus=true]:bg-black",
                "group-data-[focus=true]:bg-opacity-10",
                "group-data-[focus=true]:shadow-md",
                "group-data-[focus=true]:shadow-primary/50",
              ],
              label: "text-white font-montserrat",
              input: "text-white font-montserrat",
            }}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
            classNames={{
              inputWrapper: [
                "bg-black/20",
                "transition-all",
                "rounded-lg",
                "backdrop-blur-xl",
                "data-[hover=true]:bg-black/30",
                "data-[hover=true]:shadow-sm",
                "data-[hover=true]:shadow-primary/50",
                "group-data-[focus=true]:bg-black",
                "group-data-[focus=true]:bg-opacity-10",
                "group-data-[focus=true]:shadow-md",
                "group-data-[focus=true]:shadow-primary/50",
              ],
              label: "text-white font-montserrat",
              input: "text-white font-montserrat",
            }}
          />
          <Button
            type="submit"
            className="bg-primary text-white font-montserrat hover:bg-primary/80 transition-all w-full"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Login
          </Button>
        </Form>
        {error && (
          <div className="text-red-500 text-sm font-montserrat">{error}</div>
        )}
      </div>
    </div>
  );
}
