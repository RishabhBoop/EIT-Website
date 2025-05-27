"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterFormDisplay from "../../components/RegisterFormDisplay"; 
// Logo import is now in RegisterFormDisplay.jsx

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("idle"); // 'idle', 'success', 'error'

  const EMAIL_SUFFIX = "@h-ka.de";

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);
    setRegistrationStatus("idle");

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastname"),
      username: formData.get("username"),
      password: formData.get("password"),
      repeatPassword: formData.get("RepeatPassword"),
    };

    const emailToSend = data.username.toLowerCase() + EMAIL_SUFFIX;

    if (
      !data.firstName ||
      !data.lastName ||
      !data.username ||
      !data.password ||
      !data.repeatPassword
    ) {
      setError("All fields are required.");
      setIsLoading(false);
      setRegistrationStatus("error");
      return;
    }

    if (data.password !== data.repeatPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      setRegistrationStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", { // Store the Response object
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailToSend,
          password: data.password,
          first_name: data.firstName.toLowerCase(),
          last_name: data.lastName.toLowerCase(),
        }),
      });


      if (!response.ok) { // Check the 'ok' status of the Response object
        // Use error message from API if available, otherwise default
        setError(
          response.statusText // Use message from parsed JSON
        );
        setIsLoading(false);
        setRegistrationStatus("error");
        return;
      }

      setMessage(response.message || "Registration successful!"); // Use message from parsed JSON
      setRegistrationStatus("success");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      setIsLoading(false);
    } catch (err) {
      // Renamed to err to avoid conflict with error state
      // Handle network errors or other unexpected issues
      setError(err || "An unexpected error occurred during registration.");
      console.error("Registration error:", err);
      setIsLoading(false);
      setRegistrationStatus("error");
    }
  };

  const renderContent = () => {
    if (registrationStatus === "success") {
      return (
        <div className="absolute w-full md:w-1/2 lg:w-1/3 h-full md:h-auto flex flex-col gap-6 p-10 rounded-xl shadow-2xl backdrop-blur-2xl bg-black bg-opacity-50 items-center justify-center">
          <h2 className="text-2xl text-primary font-bold font-montserrat">
            Registration Successful!
          </h2>
          <p className="text-white font-montserrat text-center">
            Please check your email for confirmation and click the link to activate your account.
          </p>
        </div>
      );
    }
    // For 'idle' or 'error', show the form (error messages are handled within RegisterFormDisplay)
    return (
      <RegisterFormDisplay
        onSubmit={onSubmit}
        isLoading={isLoading}
        error={error}
        message={message} // Pass message for potential display within form if needed, though success is handled above
      />
    );
  };

  return (
    <div className="w-full h-svh flex flex-cols gap-20 items-center justify-center">
      <img
        src="chatgpt_0.png"
        className="w-full h-screen blur-md object-cover"
      />
      {renderContent()}
    </div>
  );
}
