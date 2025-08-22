"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        {
            id: 'home',
            name: 'Dashboard',
            href: '/dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: 'flowers',
            name: 'Manage Flowers',
            href: '/dashboard/flowers',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 'add-flower',
            name: 'Add New Flower',
            href: '/dashboard/flowers/add',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        },
        {
            id: 'orders',
            name: 'Orders',
            href: '/dashboard/orders',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            id: 'customers',
            name: 'Customers',
            href: '/dashboard/customers',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            id: 'analytics',
            name: 'Analytics',
            href: '/dashboard/analytics',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: 'settings',
            name: 'Settings',
            href: '/dashboard/settings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    const quickStats = [
        { label: "Today's Orders", value: "12", change: "+15%", positive: true },
        { label: "Revenue", value: "$2,450", change: "+8%", positive: true },
        { label: "Active Products", value: "48", change: "0%", positive: true },
        { label: "Pending Orders", value: "3", change: "-2", positive: false }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-700 hover:bg-pink-50 transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {sidebarOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-40 mt-16 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-pink-100">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                                🌸
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                                    Peony
                                </h1>
                                <p className="text-xs text-gray-600">Admin Dashboard</p>
                            </div>
                        </Link>
                    </div>

                    {/* Quick Stats */}
                    <div className="px-6 py-4 border-b border-pink-100">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Stats</h3>
                        <div className="space-y-2">
                            {quickStats.slice(0, 2).map((stat, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">{stat.label}</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm font-semibold text-gray-800">{stat.value}</span>
                                        <span className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-6 overflow-y-auto">
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setSidebarOpen(false)}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </span>
                                        <span className="font-medium">{item.name}</span>
                                        {item.id === 'orders' && (
                                            <span className="ml-auto bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                                                3
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* User Profile */}
                    <div className="p-6 border-t border-pink-100">
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-800">Admin User</div>
                                <div className="text-xs text-gray-600">admin@bloombeauty.com</div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <div className="lg:ml-64 min-h-screen">
                {/* Top Bar */}
                <div className="bg-white shadow-sm border-b border-pink-100 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                            <span className="text-sm text-gray-500">Welcome back!</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Search */}
                            <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent border-none outline-none px-2 text-sm w-48"
                                />
                            </div>

                            {/* Notifications */}
                            <button className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-600 rounded-full"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-6 lg:p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}