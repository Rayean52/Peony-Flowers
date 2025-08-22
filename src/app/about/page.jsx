'use client'

import React, { useState } from 'react';

export default function AboutUs() {
    const [activeValue, setActiveValue] = useState(0);

    const stats = [
        { number: "15+", label: "Years of Experience", icon: "🌺" },
        { number: "10K+", label: "Happy Customers", icon: "😊" },
        { number: "500+", label: "Events Decorated", icon: "🎉" },
        { number: "50+", label: "Flower Varieties", icon: "🌸" }
    ];

    const teamMembers = [
        {
            name: "Sarah Mitchell",
            role: "Founder & Head Florist",
            image: "👩‍🌾",
            bio: "With over 20 years of experience in floral design, Sarah brings creativity and passion to every arrangement."
        },
        {
            name: "David Chen",
            role: "Creative Director",
            image: "👨‍🎨",
            bio: "David's innovative designs have won multiple awards and bring contemporary flair to our collections."
        },
        {
            name: "Emma Rodriguez",
            role: "Wedding Specialist",
            image: "👰",
            bio: "Emma specializes in creating breathtaking wedding florals that make your special day unforgettable."
        },
        {
            name: "Michael Park",
            role: "Operations Manager",
            image: "👨‍💼",
            bio: "Michael ensures every order is delivered fresh and on time, maintaining our commitment to excellence."
        }
    ];

    const values = [
        {
            title: "Quality First",
            description: "We source only the freshest, highest-quality flowers from trusted local and international growers.",
            icon: "⭐"
        },
        {
            title: "Artistic Excellence",
            description: "Our skilled florists create unique arrangements that tell your story with every petal.",
            icon: "🎨"
        },
        {
            title: "Sustainable Practices",
            description: "We're committed to eco-friendly practices, from sourcing to packaging, protecting our planet.",
            icon: "🌱"
        },
        {
            title: "Customer Happiness",
            description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
            icon: "💝"
        }
    ];

    const milestones = [
        { year: "2009", event: "BloomBeauty was founded with a single shop in downtown" },
        { year: "2012", event: "Expanded to online delivery services across the city" },
        { year: "2015", event: "Opened our second location and event decoration services" },
        { year: "2018", event: "Launched nationwide shipping and corporate partnerships" },
        { year: "2021", event: "Introduced sustainable packaging and eco-friendly practices" },
        { year: "2024", event: "Celebrating 15 years of bringing beauty through flowers" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-pink-600 to-rose-600 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                            Our Story Blooms Here
                        </h1>
                        <p className="text-xl lg:text-2xl text-pink-100 leading-relaxed">
                            For over 15 years, BloomBeauty has been crafting emotions through flowers,
                            turning moments into memories with every arrangement we create.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Bringing Nature's Beauty to Your Doorstep
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At BloomBeauty, we believe that flowers have the power to transform spaces,
                            uplift spirits, and express emotions that words cannot capture. Since our founding
                            in 2009, we've been dedicated to sharing the natural beauty of flowers with our community.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our journey began with a simple vision: to make premium floral artistry accessible
                            to everyone. Today, we're proud to be your trusted partner in celebrating life's
                            special moments, from intimate gatherings to grand celebrations.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Every arrangement we create is a testament to our passion for perfection, our
                            commitment to quality, and our love for the art of floristry. We don't just deliver
                            flowers; we deliver joy, comfort, and connection.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl transform rotate-6"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🌷</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                                    <p className="text-gray-600 italic">
                                        "To create meaningful connections through the timeless beauty of flowers,
                                        bringing joy and elegance to every moment of your life."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do, from selecting the perfect bloom to delivering your order
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setActiveValue(index)}
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Talented Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Passionate florists and dedicated professionals working together to create floral magic
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From a single shop to a beloved floral destination, here's how we've grown
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-6 mb-8 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                                        {index + 1}
                                    </div>
                                    {index < milestones.length - 1 && (
                                        <div className="w-0.5 h-20 bg-pink-200 mt-2"></div>
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 group-hover:shadow-lg transition-all duration-300">
                                        <div className="text-pink-600 font-bold mb-2">{milestone.year}</div>
                                        <p className="text-gray-700">{milestone.event}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Experience BloomBeauty?</h2>
                    <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                        Let us be part of your special moments. Browse our collections or visit our stores today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Shop Now
                        </button>
                        <button className="px-8 py-4 bg-pink-700 text-white rounded-full font-semibold hover:bg-pink-800 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl mb-3">📍</div>
                            <h3 className="font-bold text-gray-800 mb-2">Visit Our Stores</h3>
                            <p className="text-gray-600">Multiple locations across the city</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-3">📞</div>
                            <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-3">✉️</div>
                            <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
                            <p className="text-gray-600">hello@bloombeauty.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}