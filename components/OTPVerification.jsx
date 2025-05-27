'use client';
import { Form, InputOtp } from "@heroui/react";

export default function OTPVerification({ onSubmit, isLoading, error, message }) {
  return (
    <div className="absolute w-full md:w-1/2 lg:w-1/3 h-full md:h-auto flex flex-col gap-6 p-10 rounded-xl shadow-2xl backdrop-blur-2xl bg-black bg-opacity-50">
      <h2 className="text-white font-montserrat text-xl text-center">Check your Email for a verification code</h2>
      <Form className="w-full max-w-xs gap-6 place-self-center" onSubmit={onSubmit}>
        <InputOtp 
            isRequired
            name="otp"
            placeholder="Enter OTP"
            className="place-self-center"
            length={6}
        />
      </Form>
    </div>
  );
}