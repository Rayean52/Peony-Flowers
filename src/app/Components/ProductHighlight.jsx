'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductHighlights() {
    const [activeCategory, setActiveCategory] = useState('bestsellers');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('products-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const categories = [
        { id: 'bestsellers', name: 'Best Sellers', icon: '⭐' },
        { id: 'wedding', name: 'Wedding', icon: '💍' },
        { id: 'romantic', name: 'Romantic', icon: '💕' },
        { id: 'occasions', name: 'Special Occasions', icon: '🎉' }
    ];

    const products = {
        bestsellers: [
            {
                id: 1,
                name: "Rose Elegance Bouquet",
                price: "$89.99",
                originalPrice: "$109.99",
                image: "/products/roses.jpg",
                rating: 4.9,
                reviews: 247,
                badge: "Bestseller",
                description: "Premium red roses with baby's breath"
            },
            {
                id: 2,
                name: "Sunshine Lily Arrangement",
                price: "$79.99",
                image: "/products/lilies.jpg",
                rating: 4.8,
                reviews: 189,
                badge: "Popular",
                description: "Bright yellow lilies in ceramic vase"
            },
            {
                id: 3,
                name: "Mixed Spring Garden",
                price: "$65.99",
                image: "/products/mixed.jpg",
                rating: 4.7,
                reviews: 156,
                badge: "New",
                description: "Seasonal mixed flowers arrangement"
            },
            {
                id: 4,
                name: "Orchid Paradise",
                price: "$124.99",
                image: "/products/orchids.jpg",
                rating: 4.9,
                reviews: 98,
                badge: "Premium",
                description: "Exotic orchids in modern planter"
            }
        ],
        wedding: [
            {
                id: 5,
                name: "Bridal White Cascade",
                price: "$299.99",
                image: "/products/bridal.jpg",
                rating: 5.0,
                reviews: 67,
                badge: "Premium",
                description: "Elegant white roses and peonies"
            },
            {
                id: 6,
                name: "Bridesmaid Blush",
                price: "$149.99",
                image: "/products/blush.jpg",
                rating: 4.8,
                reviews: 89,
                badge: "Popular",
                description: "Soft pink and cream bouquet"
            }
        ],
        romantic: [
            {
                id: 7,
                name: "Love Story Roses",
                price: "$99.99",
                image: "/products/romantic.jpg",
                rating: 4.9,
                reviews: 234,
                badge: "Bestseller",
                description: "Deep red roses with romantic wrapping"
            },
            {
                id: 8,
                name: "Valentine's Special",
                price: "$139.99",
                image: "/products/valentine.jpg",
                rating: 4.8,
                reviews: 167,
                badge: "Limited",
                description: "Premium red roses with chocolates"
            }
        ],
        occasions: [
            {
                id: 9,
                name: "Birthday Surprise",
                price: "$74.99",
                image: "/products/birthday.jpg",
                rating: 4.7,
                reviews: 145,
                badge: "Popular",
                description: "Colorful mixed bouquet with balloon"
            },
            {
                id: 10,
                name: "Congratulations Bloom",
                price: "$89.99",
                image: "/products/congrats.jpg",
                rating: 4.8,
                reviews: 122,
                badge: "New",
                description: "Bright celebration arrangement"
            }
        ]
    };

    const getBadgeStyles = (badge) => {
        const styles = {
            'Bestseller': 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white',
            'Popular': 'bg-gradient-to-r from-blue-400 to-purple-400 text-white',
            'New': 'bg-gradient-to-r from-green-400 to-teal-400 text-white',
            'Premium': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
            'Limited': 'bg-gradient-to-r from-red-400 to-pink-400 text-white'
        };
        return styles[badge] || 'bg-gray-200 text-gray-800';
    };

    return (
        <section id="products-section" className="py-20 bg-gradient-to-b from-white to-rose-50/50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full shadow-lg mb-6">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-pink-700">Featured Collection</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                        Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Signature</span> Blooms
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Handcrafted arrangements that capture life's most beautiful moments
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mt-6" />
                </div>

                {/* Category Tabs */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                                    : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-pink-200 hover:border-pink-400 hover:shadow-lg'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-lg">{category.icon}</span>
                                {category.name}
                            </span>
                            {activeCategory === category.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full -z-10" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {products[activeCategory]?.map((product, index) => (
                        <div
                            key={product.id}
                            className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-pink-100/50"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Product Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Badge */}
                                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyles(product.badge)} shadow-lg`}>
                                    {product.badge}
                                </div>

                                {/* Wishlist Button */}
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-pink-50 transition-colors duration-300 group/heart">
                                    <svg className="w-5 h-5 text-gray-600 group-hover/heart:text-pink-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>

                                {/* Quick View Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="px-6 py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full hover:bg-white transition-colors duration-300">
                                        Quick View
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                                    {product.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                                        )}
                                    </div>

                                    <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Link
                        href="/shop"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View All Products
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                </div>
            </div>
        </section>
    );
}