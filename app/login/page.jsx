"use client";
import React from "react";
import { Button, Input, Checkbox, Link, Form } from "@heroui/react";

export default function Login() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-screen overflow-hidden place-content-center">
        <img
          src="Gemini_Generated_Img_0.jpeg"
          alt="Fachschaft EIT"
          className="blur-md brightness-50 w-full h-full object-cover opacity-100"
          // className="w-full h-full object-scale-down opacity-100"
        />
      </div>
      <div className="absolute w-1/5 h-screen flex flex-col items-center justify-center gap-4">
        <Input
          classNames={{
            placeholder: "text-zinc-500",
            input: "object-center",
            endContent: ["text-lg", "text-zinc-500", "flex-shrink-0"],
          }}
          placeholder="Username"
          endContent={<p>@h-ka.de</p>}
          
        />
        <Input
          classNames={{
            placeholder: "text-zinc-500",
            input: "object-center",
            endContent: ["text-lg", "text-zinc-500", "flex-shrink-0"],
          }}
          placeholder="Password"
          type="password"
          
        />
      </div>
    </div>
  );
}
