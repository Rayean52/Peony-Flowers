"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

export default function SignupPage() {
    const [msg, setMsg] = useState("");
    const [msgType, setMsgType] = useState(""); // 'success' or 'error'
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const router = useRouter();

    // Password strength checker
    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;
        return strength;
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPasswordStrength(checkPasswordStrength(password));
    };

    const getPasswordStrengthText = () => {
        switch (passwordStrength) {
            case 0:
            case 1: return { text: "Very Weak", color: "text-red-500" };
            case 2: return { text: "Weak", color: "text-orange-500" };
            case 3: return { text: "Fair", color: "text-yellow-500" };
            case 4: return { text: "Good", color: "text-blue-500" };
            case 5: return { text: "Strong", color: "text-green-500" };
            default: return { text: "", color: "" };
        }
    };

    const getPasswordStrengthWidth = () => {
        return (passwordStrength / 5) * 100;
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setMsg("");
        setMsgType("");
        setIsLoading(true);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await fetch("/api/registerUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        setIsLoading(false);

        if (res.ok) {
            setMsg("Account created successfully! Redirecting to Home...");
            setMsgType("success");
            setTimeout(() => router.push("/"), 1500);
        } else {
            const { error } = await res.json();
            setMsg(error || "Failed to register. Please try again.");
            setMsgType("error");
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
            </div>

            <div className="relative max-w-md w-full space-y-8">
                {/* Header Section */}
                <div className="text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-2xl">🌸</span>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Join Peony
                    </h1>
                    <p className="text-gray-600 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 mr-2 text-rose-400" />
                        Create your account and start your floral journey
                    </p>
                </div>

                {/* Signup Form */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    onChange={handlePasswordChange}
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300"
                                    placeholder="Create a strong password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                                    )}
                                </button>
                            </div>

                            {/* Password Strength Indicator */}
                            {passwordStrength > 0 && (
                                <div className="mt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs text-gray-600">Password strength</span>
                                        <span className={`text-xs font-medium ${getPasswordStrengthText().color}`}>
                                            {getPasswordStrengthText().text}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"
                                            style={{ width: `${getPasswordStrengthWidth()}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded mt-1"
                            />
                            <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                                I agree to the{' '}
                                <a href="#" className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200">
                                    Terms of Service
                                </a>
                                {' '}and{' '}
                                <a href="#" className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="flex items-center">
                            <input
                                id="newsletter"
                                name="newsletter"
                                type="checkbox"
                                defaultChecked
                                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                            />
                            <label htmlFor="newsletter" className="ml-3 block text-sm text-gray-700">
                                Subscribe to our newsletter for flower care tips and special offers
                            </label>
                        </div>

                        {/* Message Display */}
                        {msg && (
                            <div className={`rounded-xl p-3 flex items-center space-x-2 ${msgType === 'success'
                                    ? 'bg-green-50 border border-green-200'
                                    : 'bg-red-50 border border-red-200'
                                }`}>
                                {msgType === 'success' ? (
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                                )}
                                <p className={`text-sm ${msgType === 'success' ? 'text-green-700' : 'text-red-700'
                                    }`}>
                                    {msg}
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    Create Account
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="ml-2">Google</span>
                        </button>

                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="ml-2">Facebook</span>
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <a
                                href="/login"
                                className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
                            >
                                Sign in here
                            </a>
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        Why join BloomCraft?
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                            Exclusive access to premium flower arrangements
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                            Free delivery on orders over $50
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                            Personalized flower care tips and reminders
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                            Early access to seasonal collections
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}