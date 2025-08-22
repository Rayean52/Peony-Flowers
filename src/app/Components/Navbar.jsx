'use client'
import React, { useState } from 'react';
import { Menu, X, ChevronDown, LogOut, BarChart } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { data: session } = useSession();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    
    

    return (
        <nav className="bg-gradient-to-r from-rose-50 to-pink-50 shadow-lg border-b border-rose-100 sticky top-0 z-50">
            <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div
                            className="flex-shrink-0 flex items-center
                            ">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                                <span className="text-white font-bold text-lg">🌸</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                                Peony
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/flowers"
                                className="text-rose-700 hover:text-rose-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-rose-100 hover:shadow-md transform hover:-translate-y-0.5"
                            >
                                Flowers
                            </Link>
                            <Link
                                href="/about"
                                className="text-rose-700 hover:text-rose-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-rose-100 hover:shadow-md transform hover:-translate-y-0.5"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-rose-700 hover:text-rose-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-rose-100 hover:shadow-md transform hover:-translate-y-0.5"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Auth Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        {!session ? (
                            <div className="flex items-center space-x-3">
                                <Link
                                    href="/sign-up"
                                    className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    Sign In
                                </Link>
                            </div>
                        ) : (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center space-x-2 bg-white rounded-full p-2 pr-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    <span className="text-rose-700 font-medium text-sm">{session.user?.name}</span>
                                    <ChevronDown className={`w-4 h-4 text-rose-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-rose-100 py-2 z-50 transform transition-all duration-200 origin-top-right">
                                        <div className="px-4 py-3 border-b border-rose-50">
                                            <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                                            <p className="text-xs text-gray-500">{session.user?.email}</p>
                                        </div>
                                        <div className="py-1">
                                            <Link
                                                href="/dashboard"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-700 transition-colors duration-200"
                                            >
                                                <BarChart className="w-4 h-4 mr-3" />
                                                Dashboard
                                            </Link>
                                            <hr className="my-2 border-rose-50" />
                                            <button
                                                    onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    signOut()
                                                }}
                                                className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                                            >
                                                <LogOut className="w-4 h-4 mr-3" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-rose-600 hover:text-rose-800 p-2 rounded-md transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-rose-100 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            href="/flowers"
                            className="text-rose-700 hover:text-rose-900 hover:bg-rose-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        >
                            Flowers
                        </Link>
                        <Link
                            href="/about"
                            className="text-rose-700 hover:text-rose-900 hover:bg-rose-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-rose-700 hover:text-rose-900 hover:bg-rose-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Auth Section */}
                    <div className="px-4 py-3 border-t border-rose-100">
                        {!session ? (
                            <Link
                                href="/login"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
                            >
                                Sign In
                            </Link>
                        ) : (
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3 pb-2 border-b border-rose-100">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                                        <p className="text-xs text-gray-500">{session.user?.email}</p>
                                    </div>
                                </div>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-rose-50 rounded-md transition-colors duration-200"
                                >
                                    <BarChart className="w-4 h-4 mr-3" />
                                    Dashboard
                                </Link>
                               
                                <button
                                        onClick={() => {
                                        signOut()
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                                >
                                    <LogOut className="w-4 h-4 mr-3" />
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Click outside to close dropdown */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;