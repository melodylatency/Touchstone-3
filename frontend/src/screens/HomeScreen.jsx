import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-gray-50 rounded-lg">
            {/* Hero Promo Section */}
            <div className="bg-emerald-800 text-white py-16 px-4 rounded-t-lg">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Bloom Your Space</h1>
                    <p className="text-xl mb-8">Discover Nature's Beauty at Bloom Valley Nursery</p>
                    <Link
                        to="/gallery"
                        className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>

            {/* Client Highlights */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="text-emerald-800 text-4xl mb-4">🌿</div>
                        <h3 className="text-xl font-semibold mb-2">Family-Owned Since 2010</h3>
                        <p className="text-gray-600">Proudly serving our community for over a decade</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-emerald-800 text-4xl mb-4">🌎</div>
                        <h3 className="text-xl font-semibold mb-2">Eco-Friendly Practices</h3>
                        <p className="text-gray-600">Sustainable gardening solutions</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-emerald-800 text-4xl mb-4">⭐</div>
                        <h3 className="text-xl font-semibold mb-2">4.9/5 Star Reviews</h3>
                        <p className="text-gray-600">Trusted by local gardeners</p>
                    </div>
                </div>
            </div>

            {/* Featured Products Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">Featured Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/oasis.jpg"
                            alt="Indoor Plants Collection"
                            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-emerald-800/90 text-white p-6">
                            <h3 className="text-xl font-bold mb-2">Indoor Oasis Collection</h3>
                            <p className="mb-4">Purify your air with our lush indoor plants</p>
                            <Link to="/gallery" className="underline">Shop Indoor Plants →</Link>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/garden.jpg"
                            alt="Outdoor Plants Collection"
                            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-emerald-800/90 text-white p-6">
                            <h3 className="text-xl font-bold mb-2">Garden Essentials</h3>
                            <p className="mb-4">Create your outdoor paradise</p>
                            <Link to="/gallery" className="underline">Shop Outdoor Plants →</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shopping Perks */}
            <div className="bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center p-4">
                        <div className="text-emerald-800 text-3xl mb-4">🚚</div>
                        <h3 className="font-semibold mb-2">Free Local Delivery</h3>
                        <p className="text-sm text-gray-600">On orders over $50</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-emerald-800 text-3xl mb-4">💚</div>
                        <h3 className="font-semibold mb-2">Plant Guarantee</h3>
                        <p className="text-sm text-gray-600">30-day health promise</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-emerald-800 text-3xl mb-4">🎁</div>
                        <h3 className="font-semibold mb-2">Gift Cards</h3>
                        <p className="text-sm text-gray-600">Share the green love</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-emerald-800 text-3xl mb-4">👩🌾</div>
                        <h3 className="font-semibold mb-2">Expert Advice</h3>
                        <p className="text-sm text-gray-600">Free gardening consultations</p>
                    </div>
                </div>
            </div>

            {/* Product Categories */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['House Plants', 'Outdoor Trees', 'Gardening Tools', 'Planters & Pots'].map((category) => (
                            <Link
                                key={category}
                                to="/gallery"
                                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="text-emerald-800 text-3xl mb-4">🌱</div>
                                <h3 className="font-semibold text-gray-800">{category}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;