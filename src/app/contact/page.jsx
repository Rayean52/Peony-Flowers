'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                inquiryType: 'general'
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20">
                <div className="absolute inset-0 bg-black opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full mb-6">
                        <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Get in <span className="text-pink-500">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our flowers? Need help with a custom arrangement?
                        We'd love to hear from you and help make your floral dreams come true.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">We typically respond within 2-4 hours during business hours.</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">Thank you for contacting BloomCraft. We'll get back to you soon!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Inquiry Type */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            What can we help you with?
                                        </label>
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                            required
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="wedding">Wedding Flowers</option>
                                            <option value="corporate">Corporate Events</option>
                                            <option value="delivery">Delivery Questions</option>
                                            <option value="custom">Custom Arrangements</option>
                                            <option value="wholesale">Wholesale Orders</option>
                                        </select>
                                    </div>

                                    {/* Name and Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Subject */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-vertical"
                                            placeholder="Tell us about your floral needs, event details, or any questions you have..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 h-fit">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">(555) 123-BLOOM</p>
                                        <p className="text-gray-600">(555) 123-2566</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">hello@bloomcraft.com</p>
                                        <p className="text-gray-600">orders@bloomcraft.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Visit Our Shop</h3>
                                        <p className="text-gray-600">123 Flower Street</p>
                                        <p className="text-gray-600">Garden District, BD 12345</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Business Hours</h3>
                                        <p className="text-gray-600">Mon-Fri: 8AM - 8PM</p>
                                        <p className="text-gray-600">Sat-Sun: 9AM - 6PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Special Services */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                                <h3 className="font-bold text-gray-800 mb-3">Special Services</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Same-day delivery available</li>
                                    <li>• Wedding consultations</li>
                                    <li>• Corporate event planning</li>
                                    <li>• Subscription flower services</li>
                                    <li>• Custom arrangement design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-pink-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">How far in advance should I place my order?</h3>
                                <p className="text-gray-600">For regular arrangements, 24 hours is sufficient. For weddings and large events, we recommend 2-4 weeks advance notice.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Do you offer same-day delivery?</h3>
                                <p className="text-gray-600">Yes! Orders placed before 2 PM can be delivered the same day within our delivery area.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Can I customize my arrangement?</h3>
                                <p className="text-gray-600">Absolutely! We love creating custom arrangements. Just let us know your preferences, colors, and budget.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">What's your delivery area?</h3>
                                <p className="text-gray-600">We deliver within 25 miles of our shop. Contact us to confirm if we deliver to your location.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Do you offer corporate accounts?</h3>
                                <p className="text-gray-600">Yes! We offer special pricing and terms for businesses and regular corporate clients.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">What if I need to change my order?</h3>
                                <p className="text-gray-600">Contact us as soon as possible. We can make changes up to 2 hours before your scheduled delivery time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}