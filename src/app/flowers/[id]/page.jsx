'use client'
import React, { useState } from 'react';
import {
    Heart,
    ShoppingCart,
    Star,
    ArrowLeft,
    Truck,
    Shield,
    RefreshCw,
    Calendar,
    Ruler,
    Droplets,
    Sun,
    Clock,
    Users,
    ChevronLeft,
    ChevronRight,
    Plus,
    Minus,
    Share2
} from 'lucide-react';

const FlowerDetailsPage = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuant量] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedSize, setSelectedSize] = useState('medium');

    // Mock flower data - replace with actual data from props or API
    const flower = {
        id: 1,
        name: "Premium Red Rose Bouquet",
        price: 45.99,
        originalPrice: 55.99,
        rating: 4.8,
        reviews: 124,
        category: "Roses",
        shortDescription: "Beautiful red roses perfect for romantic occasions and special celebrations",
        longDescription: "This stunning bouquet features 12 premium red roses, carefully selected and arranged by our expert florists. Each rose is hand-picked at the perfect stage of bloom to ensure maximum freshness and longevity. The bouquet is elegantly wrapped in premium paper and finished with a luxurious satin ribbon.",
        images: [
            "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1563465936534-c3bdc8e3a835?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop"
        ],
        features: [
            "Hand-picked premium roses",
            "Professional arrangement",
            "Fresh for 7-10 days",
            "Includes care instructions",
            "Premium wrapping included",
            "Same-day delivery available"
        ],
        specifications: {
            height: "45-50 cm",
            width: "30-35 cm",
            flowers: "12 roses",
            colors: "Deep red",
            vaseLife: "7-10 days",
            fragrance: "Light rose scent"
        },
        careInstructions: [
            "Trim stems at 45° angle under running water",
            "Change water every 2-3 days",
            "Keep away from direct sunlight",
            "Remove wilted flowers promptly",
            "Add flower food to extend life"
        ],
        occasions: ["Anniversary", "Valentine's Day", "Birthday", "Apology", "Just Because"],
        inStock: true,
        stockCount: 15,
        sizes: [
            { id: 'small', name: 'Small (6 roses)', price: 29.99 },
            { id: 'medium', name: 'Medium (12 roses)', price: 45.99 },
            { id: 'large', name: 'Large (18 roses)', price: 69.99 },
            { id: 'premium', name: 'Premium (24 roses)', price: 89.99 }
        ]
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= flower.stockCount) {
            setQuantity(newQuantity);
        }
    };

    const getCurrentPrice = () => {
        const selectedSizeData = flower.sizes.find(size => size.id === selectedSize);
        return selectedSizeData ? selectedSizeData.price : flower.price;
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} x ${flower.name} (${selectedSize}) to cart!`);
        // Replace with actual cart logic
    };

    const handleBuyNow = () => {
        alert(`Proceeding to checkout with ${quantity} x ${flower.name}`);
        // Replace with actual checkout logic
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
            {/* Breadcrumb & Back Button */}
            <div className="bg-white shadow-sm border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button className="flex items-center text-rose-600 hover:text-rose-700 transition-colors duration-300">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            <span className="font-medium">Back to Flowers</span>
                        </button>
                        <nav className="text-sm text-gray-500">
                            <span>Home</span>
                            <ChevronRight className="w-4 h-4 inline mx-2" />
                            <span>Flowers</span>
                            <ChevronRight className="w-4 h-4 inline mx-2" />
                            <span className="text-rose-600">{flower.name}</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-4">
                            <img
                                src={flower.images[selectedImageIndex]}
                                alt={flower.name}
                                className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
                            />
                            {flower.originalPrice && (
                                <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold">
                                    Sale
                                </div>
                            )}
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="absolute top-6 right-6 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 transform hover:scale-110"
                            >
                                <Heart
                                    className={`w-6 h-6 transition-colors duration-300 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex space-x-3 overflow-x-auto pb-2">
                            {flower.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${selectedImageIndex === index
                                            ? 'ring-2 ring-rose-500 ring-offset-2 shadow-lg'
                                            : 'hover:shadow-md'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${flower.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                                    {flower.category}
                                </span>
                                <button className="flex items-center text-gray-600 hover:text-rose-600 transition-colors duration-300">
                                    <Share2 className="w-5 h-5 mr-1" />
                                    Share
                                </button>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{flower.name}</h1>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(flower.rating)
                                                    ? 'text-yellow-400 fill-yellow-400'
                                                    : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">
                                    {flower.rating} ({flower.reviews} reviews)
                                </span>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {flower.shortDescription}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl font-bold text-rose-600">
                                    ${getCurrentPrice()}
                                </span>
                                {flower.originalPrice && (
                                    <span className="text-xl text-gray-400 line-through ml-3">
                                        ${flower.originalPrice}
                                    </span>
                                )}
                                {flower.originalPrice && (
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium ml-3">
                                        Save ${(flower.originalPrice - getCurrentPrice()).toFixed(2)}
                                    </span>
                                )}
                            </div>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Choose Size:
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {flower.sizes.map((size) => (
                                        <button
                                            key={size.id}
                                            onClick={() => setSelectedSize(size.id)}
                                            className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${selectedSize === size.id
                                                    ? 'border-rose-500 bg-rose-50 text-rose-700'
                                                    : 'border-gray-200 hover:border-rose-300 hover:bg-rose-50'
                                                }`}
                                        >
                                            <div className="font-medium">{size.name}</div>
                                            <div className="text-sm text-gray-600">${size.price}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Quantity:
                                </label>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        disabled={quantity <= 1}
                                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-4 py-2 bg-gray-50 rounded-lg font-medium min-w-[60px] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        disabled={quantity >= flower.stockCount}
                                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                    <span className="text-sm text-gray-500 ml-4">
                                        {flower.stockCount} available
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Add to Cart</span>
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                                >
                                    Buy Now
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                                <div className="text-center">
                                    <Truck className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                                    <div className="text-xs text-gray-600">Free Delivery</div>
                                </div>
                                <div className="text-center">
                                    <Shield className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                                    <div className="text-xs text-gray-600">Fresh Guarantee</div>
                                </div>
                                <div className="text-center">
                                    <RefreshCw className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                                    <div className="text-xs text-gray-600">Easy Returns</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Information Tabs */}
                <div className="mt-16">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Tab Navigation */}
                        <div className="border-b border-gray-100">
                            <div className="flex space-x-8 px-6">
                                <button className="py-4 px-2 border-b-2 border-rose-500 text-rose-600 font-medium">
                                    Description
                                </button>
                                <button className="py-4 px-2 text-gray-600 hover:text-rose-600 transition-colors duration-300">
                                    Specifications
                                </button>
                                <button className="py-4 px-2 text-gray-600 hover:text-rose-600 transition-colors duration-300">
                                    Care Instructions
                                </button>
                                <button className="py-4 px-2 text-gray-600 hover:text-rose-600 transition-colors duration-300">
                                    Reviews
                                </button>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Description */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {flower.longDescription}
                                    </p>

                                    <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {flower.occasions.map((occasion, index) => (
                                            <span
                                                key={index}
                                                className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm"
                                            >
                                                {occasion}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {flower.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-600">
                                                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Specifications */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                            <div className="flex items-center">
                                                <Ruler className="w-5 h-5 text-rose-500 mr-3" />
                                                <span className="text-gray-700">Height</span>
                                            </div>
                                            <span className="font-medium">{flower.specifications.height}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                            <div className="flex items-center">
                                                <Ruler className="w-5 h-5 text-rose-500 mr-3" />
                                                <span className="text-gray-700">Width</span>
                                            </div>
                                            <span className="font-medium">{flower.specifications.width}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                            <div className="flex items-center">
                                                <Users className="w-5 h-5 text-rose-500 mr-3" />
                                                <span className="text-gray-700">Flowers</span>
                                            </div>
                                            <span className="font-medium">{flower.specifications.flowers}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                            <div className="flex items-center">
                                                <Clock className="w-5 h-5 text-rose-500 mr-3" />
                                                <span className="text-gray-700">Vase Life</span>
                                            </div>
                                            <span className="font-medium">{flower.specifications.vaseLife}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="font-semibold text-gray-900 mb-4">Care Instructions</h4>
                                        <div className="space-y-3">
                                            {flower.careInstructions.map((instruction, index) => (
                                                <div key={index} className="flex items-start">
                                                    <div className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                                                        {index + 1}
                                                    </div>
                                                    <span className="text-gray-600 text-sm">{instruction}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlowerDetailsPage;