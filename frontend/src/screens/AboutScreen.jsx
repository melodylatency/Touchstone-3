import React from 'react';
import { useState } from 'react';

const AboutScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-4xl mx-auto">
                {/* About Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h1 className="text-3xl font-bold text-emerald-800 mb-4">About Bloom Valley Nursery</h1>
                    <p className="text-gray-600 mb-4">
                        Bloom Valley Nursery is a family-owned plant nursery dedicated to bringing nature's beauty to our local
                        community. For over a decade, we've been passionate about helping gardening enthusiasts and homeowners
                        create thriving green spaces with our curated selection of plants, trees, and quality gardening supplies.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Our commitment to sustainable practices and creative gardening solutions drives everything we do.
                        Whether you're a seasoned horticulturist or just starting your plant journey, we're here to help
                        your garden grow.
                    </p>
                </div>

                {/* Hours & Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-emerald-800 mb-4">Hours of Operation</h2>
                        <div className="space-y-2 text-gray-600">
                            <p>Monday–Friday: 9 a.m. to 6 p.m.</p>
                            <p>Saturday–Sunday: 10 a.m. to 5 p.m.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-emerald-800 mb-4">Visit Us</h2>
                        <div className="space-y-2 text-gray-600">
                            <p>123 Greenway Boulevard</p>
                            <p>Bloom Valley, CA 12345</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                {/* Feedback Form */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Contact & Custom Orders</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                            >
                                Send Message
                            </button>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    className="mr-2"
                                />
                                <label htmlFor="newsletter" className="text-sm text-gray-600">
                                    Subscribe to our gardening newsletter
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen;