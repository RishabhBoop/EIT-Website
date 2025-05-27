"use client";

import { Form, Checkbox, Button, Input } from "@heroui/react";
import Logo from "../logos/fs-eit-logo.svg";

export default function RegisterFormDisplay({ onSubmit, isLoading, error, message }) {
  return (
    <div className="absolute w-full md:w-1/2 lg:w-1/3 h-full md:h-auto flex flex-col gap-6 p-10 rounded-xl shadow-2xl backdrop-blur-2xl bg-black bg-opacity-50 ">
      <Logo className="h-[70px] lg:h-[100px]" />
      <Form
        className="w-full max-w-xs gap-6 place-self-center"
        onSubmit={onSubmit}
      >
        <Input
          name="firstName"
          label="First Name"
          placeholder="Enter your First Name"
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
          name="lastname"
          label="Last Name"
          placeholder="Enter your Last Name"
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
            }
            if (parseInt(p2)-1000 < 0) {
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
        <Input
          name="RepeatPassword"
          type="password"
          label="Repeat Password"
          placeholder="Repeat your password"
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
        <Checkbox isRequired="true" name="isStudent">
          <span className="font-montserrat">I pinky promise that I am a student</span>
        </Checkbox>
        <Button
          type="submit"
          color="primary"
          variant="shadow"
          className="w-full"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          <span className="font-montserrat">Register</span>
        </Button>
      </Form>
      {error && (
        <div className="text-red-500 text-sm font-montserrat">
          {error}
        </div>
      )}
      {message && (
        <div className="text-green-500 text-sm font-montserrat text-center">
          {message}
        </div>
      )}
    </div>
  );
}
