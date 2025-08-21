'use client'
import { useState, useEffect } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

        const element = document.getElementById('newsletter-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail("");
        }, 2000);
    };

    const benefits = [
        {
            icon: "🌸",
            title: "Exclusive Offers",
            description: "Be the first to know about seasonal sales and special promotions"
        },
        {
            icon: "💡",
            title: "Care Tips",
            description: "Expert advice on keeping your flowers fresh and beautiful"
        },
        {
            icon: "🎁",
            title: "Birthday Perks",
            description: "Special discounts and surprises on your special day"
        },
        {
            icon: "📅",
            title: "Event Reminders",
            description: "Never miss important dates like anniversaries and holidays"
        }
    ];

    if (isSubscribed) {
        return (
            <section id="newsletter-section" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Success Animation */}
                        <div className="mb-8 animate-bounce">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Welcome to Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Bloom Family!</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8">
                            Thank you for subscribing! Check your inbox for a special welcome gift and start enjoying exclusive flower updates.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Welcome email sent</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">10% discount activated</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsSubscribed(false)}
                            className="text-pink-600 hover:text-pink-700 font-medium underline transition-colors duration-300"
                        >
                            Subscribe another email →
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="newsletter-section" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full shadow-lg">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                                <span className="text-sm font-medium text-pink-700">Stay Connected</span>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                    Join Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Bloom</span> Newsletter
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                            </div>

                            {/* Description */}
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Get the latest flower trends, care tips, seasonal arrangements, and exclusive offers delivered straight to your inbox. Plus, enjoy a welcome gift on your first order!
                            </p>

                            {/* Newsletter Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative group">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none text-gray-800 placeholder-gray-500 shadow-lg transition-all duration-300 group-hover:shadow-xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Subscribing...
                                            </>
                                        ) : (
                                            <>
                                                Subscribe & Get 10% Off
                                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </button>
                            </form>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>No spam, ever</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Unsubscribe anytime</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>2,500+ happy subscribers</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Benefits */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                    What You'll Get
                                </h3>

                                <div className="space-y-6">
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="text-2xl bg-gradient-to-r from-pink-100 to-rose-100 p-3 rounded-full border border-pink-200">
                                                {benefit.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Proof */}
                                <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                                    <div className="flex items-center justify-center gap-2 text-green-700">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-semibold">Join 2,500+ flower lovers</span>
                                    </div>
                                    <p className="text-green-600 text-sm text-center mt-1">
                                        "Best flower tips and deals!" - Sarah M.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}