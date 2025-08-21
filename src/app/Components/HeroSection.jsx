'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full shadow-lg">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-pink-700">Fresh Blooms Daily</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-gray-800 mb-2">Bloom Into</span>
                                <span className="block bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                                    Beauty
                                </span>
                            </h1>

                            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                        </div>

                        {/* Description */}
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Discover our curated collection of premium flowers, crafted arrangements,
                            and personalized bouquets that speak the language of love, celebration, and beauty.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-pink-100">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-700">Same Day Delivery</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-pink-100">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-700">Fresh Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-pink-100">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-700">Custom Arrangements</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/shop"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Shop Now
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>

                            <Link
                                href="/custom"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full border-2 border-pink-200 hover:border-pink-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    Custom Order
                                    <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        {/* Main Image Container */}
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />

                            {/* Main Image */}
                            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                                <Image
                                    src="/hero.jpg" // Update this to your flower shop hero image
                                    alt="Beautiful flower arrangements and bouquets"
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                {/* Floating Stats */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <div>
                                            <div className="text-2xl font-bold text-gray-800">500+</div>
                                            <div className="text-sm text-gray-600">Happy Customers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Floating Card */}
                        <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-pink-100 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="text-center">
                                <div className="text-2xl mb-1">🌹</div>
                                <div className="text-xs font-medium text-gray-700">Premium Quality</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles for Gradient Animation */}
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}