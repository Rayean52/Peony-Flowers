"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
    const [flowers, setFlowers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            setFlowers([
                { id: 1, name: "Rose Elegance Bouquet", price: 89.99, stock: 25, status: "active", trend: "up" },
                { id: 2, name: "Sunshine Lily Arrangement", price: 79.99, stock: 15, status: "active", trend: "stable" },
                { id: 3, name: "Wedding White Cascade", price: 299.99, stock: 8, status: "low", trend: "down" },
                { id: 4, name: "Spring Garden Mix", price: 65.99, stock: 32, status: "active", trend: "up" },
                { id: 5, name: "Exotic Orchid Collection", price: 149.99, stock: 5, status: "low", trend: "stable" }
            ]);

            setOrders([
                { id: "ORD-001", customer: "Sarah Johnson", total: 189.99, status: "processing", date: "2 hours ago" },
                { id: "ORD-002", customer: "Michael Chen", total: 299.99, status: "shipped", date: "5 hours ago" },
                { id: "ORD-003", customer: "Emma Wilson", total: 89.99, status: "pending", date: "1 day ago" },
                { id: "ORD-004", customer: "James Brown", total: 445.50, status: "delivered", date: "2 days ago" }
            ]);

            setIsLoading(false);
        }, 1000);
    }, []);

    const stats = [
        {
            label: "Total Revenue",
            value: "$12,450",
            change: "+15.3%",
            positive: true,
            icon: "💰",
            color: "from-green-500 to-emerald-500",
            bgColor: "from-green-50 to-emerald-50"
        },
        {
            label: "Total Orders",
            value: "156",
            change: "+12.5%",
            positive: true,
            icon: "📦",
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50"
        },
        {
            label: "Active Products",
            value: "48",
            change: "-2.3%",
            positive: false,
            icon: "🌸",
            color: "from-pink-500 to-rose-500",
            bgColor: "from-pink-50 to-rose-50"
        },
        {
            label: "Customer Satisfaction",
            value: "4.8/5",
            change: "+0.2",
            positive: true,
            icon: "⭐",
            color: "from-yellow-500 to-orange-500",
            bgColor: "from-yellow-50 to-orange-50"
        }
    ];

    const getStatusColor = (status) => {
        const colors = {
            processing: "bg-blue-100 text-blue-700",
            shipped: "bg-purple-100 text-purple-700",
            pending: "bg-yellow-100 text-yellow-700",
            delivered: "bg-green-100 text-green-700"
        };
        return colors[status] || "bg-gray-100 text-gray-700";
    };

    const getTrendIcon = (trend) => {
        if (trend === "up") return "↑";
        if (trend === "down") return "↓";
        return "→";
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Welcome to Peony Dashboard 🌺</h1>
                        <p className="text-pink-100">Manage your flower inventory, track orders, and grow your business.</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="" className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                            Add Product
                        </Link>
                        <Link href="" className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300">
                            View Orders
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 border border-pink-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">{stat.icon}</div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {stat.change}
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                        <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            📋 Recent Orders
                        </h3>
                        <Link href="" className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                            View All →
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Total</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b border-gray-50 hover:bg-pink-50 transition-colors">
                                        <td className="py-3 px-4">
                                            <span className="font-medium text-gray-800">{order.id}</span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">{order.customer}</td>
                                        <td className="py-3 px-4">
                                            <span className="font-semibold text-gray-800">${order.total}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-500 text-sm">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            🏆 Top Products
                        </h3>
                        <Link href="" className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                            View All →
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {flowers.slice(0, 5).map((flower) => (
                            <div key={flower.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-xl">
                                    🌸
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-800 text-sm">{flower.name}</div>
                                    <div className="text-xs text-gray-600">Stock: {flower.stock} units</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-gray-800">${flower.price}</div>
                                    <div className={`text-xs ${flower.trend === 'up' ? 'text-green-600' : flower.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                                        {getTrendIcon(flower.trend)} {flower.trend}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions & Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        ⚡ Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="" className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-all duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-800">Add Product</span>
                            </div>
                        </Link>

                        <Link href="" className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-800">New Order</span>
                            </div>
                        </Link>

                        <Link href="" className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-800">Customers</span>
                            </div>
                        </Link>

                        <Link href="" className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl hover:from-purple-100 hover:to-indigo-100 transition-all duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-800">Analytics</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        🔔 Recent Activity
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800">New Order Received</div>
                                <div className="text-xs text-gray-600">Order #ORD-005 from Emily Davis - $145.99</div>
                                <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800">Product Updated</div>
                                <div className="text-xs text-gray-600">Rose Elegance Bouquet price changed to $89.99</div>
                                <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800">Low Stock Alert</div>
                                <div className="text-xs text-gray-600">Exotic Orchid Collection - Only 5 units remaining</div>
                                <div className="text-xs text-gray-500 mt-1">3 hours ago</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800">Customer Review</div>
                                <div className="text-xs text-gray-600">5-star review from John Smith for Wedding White Cascade</div>
                                <div className="text-xs text-gray-500 mt-1">5 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        📈 Sales Performance
                    </h3>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm bg-pink-600 text-white rounded-lg">Daily</button>
                        <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">Weekly</button>
                        <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">Monthly</button>
                    </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-64 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-gray-600">Sales chart will be displayed here</p>
                        <p className="text-sm text-gray-500 mt-1">Integration with chart library coming soon...</p>
                    </div>
                </div>

                {/* Chart Legend */}
                <div className="flex items-center justify-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Orders</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Customers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}