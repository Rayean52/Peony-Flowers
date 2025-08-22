'use client'
import React, { useEffect, useState } from 'react';
import { Eye, ShoppingCart, ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import Link from 'next/link';

const FlowersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState(new Set());
    const [allFlowers, setAllFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const flowersPerPage = 8;

    useEffect(() => {
        const fetchFlowers = async () => {
            try {
                const res = await fetch("/api/flowers");
                const data = await res.json();
                setAllFlowers(data);
            } catch (err) {
                console.error("Failed to fetch flowers:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFlowers();
    }, []);


    const totalPages = Math.ceil(allFlowers.length / flowersPerPage);
    const startIndex = (currentPage - 1) * flowersPerPage;
    const currentFlowers = allFlowers.slice(startIndex, startIndex + flowersPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top of flowers section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleFavorite = (flowerId) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(flowerId)) {
            newFavorites.delete(flowerId);
        } else {
            newFavorites.add(flowerId);
        }
        setFavorites(newFavorites);
    };

    

    const handleOrder = (flower) => {
        alert(`Adding ${flower.name} to cart!`);
        // Replace with your actual cart logic
    };

    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Previous button
        pages.push(
            <button
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-1 px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-rose-600 hover:bg-rose-50 hover:text-rose-700 shadow-sm hover:shadow-md'
                    }`}
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
        );

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`mx-1 px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === i
                            ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white text-rose-600 hover:bg-rose-50 hover:text-rose-700 shadow-sm hover:shadow-md'
                        }`}
                >
                    {i}
                </button>
            );
        }

        // Next button
        pages.push(
            <button
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`mx-1 px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-rose-600 hover:bg-rose-50 hover:text-rose-700 shadow-sm hover:shadow-md'
                    }`}
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        );

        return pages;
    };

    if (loading) {
        return <>
            <p className='text-center min-h-screen'>Cards Loading...</p>
        </>
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Our Beautiful Flowers
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover our stunning collection of fresh flowers, perfect for every occasion and celebration
                        </p>
                        <div className="mt-6 flex justify-center items-center space-x-4 text-sm text-gray-500">
                            <span>Showing {startIndex + 1}-{Math.min(startIndex + flowersPerPage, allFlowers.length)} of {allFlowers.length} flowers</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flowers Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {currentFlowers.map((flower) => (
                        <div
                            key={flower.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={flower.image}
                                    alt={flower.name}
                                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Favorite Button */}
                                <button
                                    onClick={() => toggleFavorite(flower.id)}
                                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 transform hover:scale-110"
                                >
                                    <Heart
                                        className={`w-4 h-4 transition-colors duration-300 ${favorites.has(flower.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'
                                            }`}
                                    />
                                </button>

                                {/* Sale Badge */}
                                {flower.originalPrice && (
                                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Sale
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-rose-700">
                                    {flower.category}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                                        {flower.name}
                                    </h3>
                                </div>

                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                    {flower.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(flower.rating)
                                                        ? 'text-yellow-400 fill-yellow-400'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500 ml-2">
                                        {flower.rating} ({flower.reviews})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center mb-4">
                                    <span className="text-2xl font-bold text-rose-600">
                                        ${flower.price}
                                    </span>
                                    {flower.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through ml-2">
                                            ${flower.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-2">
                                    <Link
                                        href={`/flowers/${flower.id}`}
                                        className="flex-1 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 py-2 px-4 rounded-lg font-medium hover:from-rose-200 hover:to-pink-200 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                                    >
                                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                                        <span>Details</span>
                                    </Link>
                                    <button
                                        onClick={() => handleOrder(flower)}
                                        className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl"
                                    >
                                        <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                                        <span>Order</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center items-center">
                    <div className="bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center">
                        {renderPagination()}
                    </div>
                </div>

                {/* Page Info */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Page {currentPage} of {totalPages} • {allFlowers.length} total flowers
                </div>
            </div>
        </div>
    );
};

export default FlowersPage;