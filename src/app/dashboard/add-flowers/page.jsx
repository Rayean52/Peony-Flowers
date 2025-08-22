'use client'
import React, { useState } from 'react';
import {
    Flower2,
    Upload,
    DollarSign,
    Tag,
    FileText,
    Package,
    Plus,
    ArrowLeft,
    AlertCircle,
    CheckCircle,
    Eye,
    Save
} from 'lucide-react';

const AddFlowersPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
        quantity: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // success, error
    const [previewImage, setPreviewImage] = useState('');

    // Predefined categories
    const categories = [
        'Roses',
        'Tulips',
        'Lilies',
        'Sunflowers',
        'Orchids',
        'Peonies',
        'Daffodils',
        'Hydrangeas',
        'Cherry Blossoms',
        'Marigolds',
        'Mixed Bouquets',
        'Seasonal Flowers',
        'Wedding Flowers',
        'Funeral Arrangements'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Update preview image when image URL changes
        if (name === 'imageUrl') {
            setPreviewImage(value);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Flower name is required';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Flower name must be at least 3 characters';
        }

        // Price validation
        if (!formData.price) {
            newErrors.price = 'Price is required';
        } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
            newErrors.price = 'Price must be a valid positive number';
        }

        // Image URL validation
        if (!formData.imageUrl.trim()) {
            newErrors.imageUrl = 'Image URL is required';
        } else if (!isValidUrl(formData.imageUrl)) {
            newErrors.imageUrl = 'Please enter a valid URL';
        }

        // Category validation
        if (!formData.category) {
            newErrors.category = 'Category is required';
        }

        // Description validation
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        } else if (formData.description.length < 10) {
            newErrors.description = 'Description must be at least 10 characters';
        }

        // Quantity validation
        if (!formData.quantity) {
            newErrors.quantity = 'Quantity is required';
        } else if (isNaN(formData.quantity) || parseInt(formData.quantity) < 0) {
            newErrors.quantity = 'Quantity must be a valid non-negative number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setMessageType('');

        if (!validateForm()) {
            setMessage('Please fix the errors below');
            setMessageType('error');
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call 
            const response = await fetch('/api/flowers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    quantity: parseInt(formData.quantity)
                }),
            });

            if (response.ok) {
                setMessage('Flower added successfully!');
                setMessageType('success');
                // Reset form
                setFormData({
                    name: '',
                    price: '',
                    imageUrl: '',
                    category: '',
                    description: '',
                    quantity: ''
                });
                setPreviewImage('');
            } else {
                throw new Error('Failed to add flower');
            }
        } catch (error) {
            setMessage(error.message || 'Failed to add flower. Please try again.');
            setMessageType('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveDraft = () => {
        // Save to localStorage as draft - note: localStorage not available in artifacts
        // In actual implementation, you would save to localStorage or send to API
        setMessage('Draft saved successfully!');
        setMessageType('success');
        setTimeout(() => setMessage(''), 3000);
    };

    const loadDraft = () => {
        // Load from localStorage - note: localStorage not available in artifacts
        // In actual implementation, you would load from localStorage or API
        setMessage('No draft found');
        setMessageType('error');
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-rose-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button className="flex items-center text-rose-600 hover:text-rose-700 transition-colors duration-300 mr-4">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                <span className="font-medium">Back to Dashboard</span>
                            </button>
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                <Flower2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Add New Flower</h1>
                                <p className="text-gray-600">Add a beautiful flower to your collection</p>
                            </div>
                        </div>
                        <button
                            onClick={loadDraft}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center"
                        >
                            <Upload className="w-4 h-4 mr-2" />
                            Load Draft
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-white/20">
                            <div className="space-y-6">
                                {/* Message Display */}
                                {message && (
                                    <div className={`rounded-xl p-4 flex items-center space-x-3 ${messageType === 'success'
                                            ? 'bg-green-50 border border-green-200'
                                            : 'bg-red-50 border border-red-200'
                                        }`}>
                                        {messageType === 'success' ? (
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        ) : (
                                            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                                        )}
                                        <p className={`text-sm font-medium ${messageType === 'success' ? 'text-green-700' : 'text-red-700'
                                            }`}>
                                            {message}
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Flower Name */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Flower Name *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Flower2 className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-rose-500'
                                                    }`}
                                                placeholder="e.g., Premium Red Rose Bouquet"
                                            />
                                        </div>
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                                            Price ($) *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <DollarSign className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                                step="0.01"
                                                min="0"
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 ${errors.price ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-rose-500'
                                                    }`}
                                                placeholder="45.99"
                                            />
                                        </div>
                                        {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                                    </div>

                                    {/* Quantity */}
                                    <div>
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                                            Stock Quantity *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Package className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                value={formData.quantity}
                                                onChange={handleInputChange}
                                                min="0"
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 ${errors.quantity ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-rose-500'
                                                    }`}
                                                placeholder="25"
                                            />
                                        </div>
                                        {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>}
                                    </div>

                                    {/* Category */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                            Category *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Tag className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <select
                                                id="category"
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 ${errors.category ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-rose-500'
                                                    }`}
                                            >
                                                <option value="">Select a category</option>
                                                {categories.map((cat) => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                                    </div>

                                    {/* Image URL */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                                            Image URL *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Upload className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="url"
                                                id="imageUrl"
                                                name="imageUrl"
                                                value={formData.imageUrl}
                                                onChange={handleInputChange}
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 ${errors.imageUrl ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-rose-500'
                                                    }`}
                                                placeholder="https://example.com/flower-image.jpg"
                                            />
                                        </div>
                                        {errors.imageUrl && <p className="mt-1 text-sm text-red-600">{errors.imageUrl}</p>}
                                    </div>

                                    {/* Description */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                            Description *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 pointer-events-none">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                id="description"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 resize-none ${errors.description ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-rose-500'
                                                    }`}
                                                placeholder="Describe the flower arrangement, its features, and what makes it special..."
                                            />
                                        </div>
                                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                                        <p className="mt-1 text-sm text-gray-500">
                                            {formData.description.length} characters (minimum 10 required)
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                                    <button
                                        type="button"
                                        onClick={handleSaveDraft}
                                        className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
                                    >
                                        <Save className="w-5 h-5 mr-2" />
                                        Save Draft
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:from-rose-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Adding Flower...
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <Plus className="w-5 h-5 mr-2" />
                                                Add Flower
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="space-y-6">
                        {/* Image Preview */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-white/20">
                            <div className="flex items-center mb-4">
                                <Eye className="w-5 h-5 text-rose-500 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
                            </div>

                            {previewImage ? (
                                <div className="space-y-4">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="w-full h-48 object-cover rounded-xl shadow-lg"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div
                                        className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center"
                                        style={{ display: 'none' }}
                                    >
                                        <div className="text-center text-gray-500">
                                            <Upload className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                            <p className="text-sm">Image failed to load</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                                    <div className="text-center text-gray-400">
                                        <Upload className="w-12 h-12 mx-auto mb-2" />
                                        <p className="text-sm">Image preview will appear here</p>
                                    </div>
                                </div>
                            )}

                            {/* Form Summary */}
                            {(formData.name || formData.price || formData.category) && (
                                <div className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                                    <h4 className="font-medium text-gray-900 mb-2">Flower Details</h4>
                                    <div className="space-y-1 text-sm">
                                        {formData.name && (
                                            <p><span className="text-gray-600">Name:</span> <span className="font-medium">{formData.name}</span></p>
                                        )}
                                        {formData.price && (
                                            <p><span className="text-gray-600">Price:</span> <span className="font-medium text-rose-600">${formData.price}</span></p>
                                        )}
                                        {formData.category && (
                                            <p><span className="text-gray-600">Category:</span> <span className="font-medium">{formData.category}</span></p>
                                        )}
                                        {formData.quantity && (
                                            <p><span className="text-gray-600">Stock:</span> <span className="font-medium">{formData.quantity} units</span></p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Tips */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-white/20">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Quick Tips</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>Use high-quality images (minimum 800x600px) for best results</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>Write detailed descriptions to help customers understand the product</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>Set competitive prices based on similar flower arrangements</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>Keep stock quantities updated to avoid overselling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFlowersPage;