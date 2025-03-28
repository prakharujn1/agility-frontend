import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student"); // Default role
    const [otp, setOtp] = useState(""); // For OTP verification
    const [btnLoading, setBtnLoading] = useState(false); // Loading state

    const { otpSent, register, verifyOtp } = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(true); // Show loading state

        try {
            await register(username, email, password, role);
            toast.success("OTP sent to your email");
        } catch (error) {
            const errorMessage = error.message || "Failed to send OTP. Please try again!";
            toast.error(errorMessage);
            // console.error("Failed to send OTP:", error);
        } finally {
            setBtnLoading(false); // Reset loading state
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setBtnLoading(true); // Show loading state

        try {
            await verifyOtp(Number(otp), navigate);
        } catch (error) {
            console.error("OTP verification failed:", error);
        } finally {
            setBtnLoading(false); // Reset loading state
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={otpSent ? handleVerifyOtp : handleSubmit} className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={otpSent}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={otpSent}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={otpSent}
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={otpSent}
                >
                    <option value="student">Student</option>
                    <option value="business">Business Professional</option>
                </select>

                {otpSent ? (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
                            disabled={btnLoading} // Disable while loading
                        >
                            {btnLoading ? "Verifying..." : "Verify OTP"}
                        </button>
                    </>
                ) : (
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        disabled={btnLoading} // Disable while loading
                    >
                        {btnLoading ? "Please wait..." : "Send OTP"}
                    </button>
                )}

                 <p className="mt-4 text-center">
                            Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                </p>
            </form>
                       
        </div>
    );
};

export default Register;
