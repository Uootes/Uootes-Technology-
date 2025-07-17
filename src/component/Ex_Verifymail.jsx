import React, { useRef, useState } from 'react';
import Swal from "sweetalert2";
import axios from "axios";

const Ex_Verifymail = ({ email, onVerified }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  // Handle input changes and move focus
  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // Only single digit numbers allowed
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Handle backspace to move to previous input
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.some(num => num === "")) {
      Swal.fire({ title: "Incomplete OTP", text: "Please enter all 6 digits.", icon: "warning" });
      return;
    }
    setLoading(true);
    try {
      const code = otp.join("");
      const response = await axios.post(
        "https://uootes.onrender.com/api/v1/verifyOtp-exchanger",
        { otp: code },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Verified!",
          text: "Email verified successfully!",
          icon: "success",
          timer: 1500,
        });
        if (onVerified) onVerified();
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire("Invalid OTP", "Invalid or expired OTP", "error");
      } else {
        Swal.fire("Error", "Failed to verify OTP. Try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  // Placeholder for resend code
  const handleResend = () => {
    Swal.fire("Resend", "Resend code feature not implemented yet.", "info");
  };

  return (
    <div className='flex w-full items-center h-screen md:m-auto px-2 max-w-md z-50'>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 text-white p-8 rounded-lg shadow-lg w-full"
        autoComplete="off"
      >
        {/* heading */}
        <h1 className="text-2xl font-bold mb-4 text-center">Verify your email</h1>
        <p className="text-center mb-6">
          Please enter the 6 digit code sent to <span className="font-semibold">{email || "your email"}</span>
        </p>
        {/* input box */}
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={el => (inputs.current[idx] = el)}
              type="text"
              maxLength="1"
              className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
              autoFocus={idx === 0}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          ))}
        </div>
        {/* resend link */}
        <div className="text-center mb-6">
          <button
            type="button"
            className="text-gray-300 hover:underline"
            onClick={handleResend}
            disabled={loading}
            tabIndex={-1}
          >
            Resend code
          </button>
        </div>
        {/* confirm button */}
        <button
          type="submit"
          className="w-full py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading || otp.some(num => num === "")}
        >
          {loading ? "Verifying..." : "Continue"}
        </button>
        {/* changed mail link */}
        <div className="text-center mt-4">
          <span className="text-gray-300">Not your email? Contact support.</span>
        </div>
      </form>
    </div>
  );
};

export default Ex_Verifymail;