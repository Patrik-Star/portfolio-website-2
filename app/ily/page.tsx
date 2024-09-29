"use client";

import React, { useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import Slideshow from "./slideshow";

const CORRECTOTP = "280921";

interface OTPCardProps {
  title: string;
  subtitle: string;
  onVerify: (otp: string) => void;
}

const ErrorMessage = () => (
  <div className="text-center text-red-600 bg-white rounded-lg max-w-md w-full mt-10 py-5">
    <svg
      className="w-16 h-16 mx-auto mb-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <h2 className="text-2xl font-bold mb-2">Incorrect</h2>
    <p>Please try again.</p>
  </div>
);

const OTPCard: React.FC<OTPCardProps> = ({ title, subtitle, onVerify }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [showError, setShowError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    setShowError(false);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOTP.every((digit) => digit !== "")) {
      onVerify(newOTP.join(""));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const resetOTP = () => {
    setOTP(["", "", "", "", "", ""]);
    setShowError(false);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-black">
      <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
      <p className="text-gray-600 text-center mb-6">{subtitle}</p>
      {!showError ? (
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="number"
                maxLength={1}
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
              />
            ))}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={otp.some((digit) => digit === "")}
            onClick={() => onVerify(otp.join(""))}
          >
            Verify
          </button>
        </div>
      ) : (
        <>
          <ErrorMessage />
          <button
            onClick={resetOTP}
            className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
};

export default function OTPPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleOTPVerification = (inputOTP: string) => {
    if (inputOTP === CORRECTOTP) {
      setShowError(false);
      setIsVerified(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="absolute top-0 w-full h-screen bg-green-100 flex flex-col items-center justify-center text-black">
      {!isVerified ? (
        <OTPCard
          title="Enter our ANNIVERSARY date"
          subtitle="Please enter the 6-digit of our anniversary "
          onVerify={handleOTPVerification}
        />
      ) : (
        !showError && <Slideshow />
      )}

      {showError && !isVerified && <ErrorMessage />}
    </div>
  );
}
