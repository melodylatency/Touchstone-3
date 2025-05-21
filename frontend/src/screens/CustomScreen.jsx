import React from 'react'

const CustomScreen = () => {
    const testimonials = [
        {
            name: "Mary J.",
            role: "Home Gardener",
            text: "Bloom Valley Nursery transformed my backyard into a paradise! Their expert advice and quality plants made all the difference.",
            date: "March 2024"
        },
        {
            name: "Mike R.",
            role: "Local Restaurant Owner",
            text: "The herbs and edible plants we bought have been thriving in our patio garden. Excellent service every time!",
            date: "February 2024"
        },
        {
            name: "Emma & Tom",
            role: "New Homeowners",
            text: "As first-time gardeners, we appreciated the patient guidance and healthy starter plants. Our garden is growing beautifully!",
            date: "January 2024"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-4xl mx-auto">
                {/* Testimonials Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-800 mb-6">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-emerald-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="text-sm text-gray-400 mt-1">{testimonial.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Simple Community Section */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-bold text-emerald-800 mb-4">Community Roots</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>🌱 Hosting monthly gardening workshops</p>
                        <p>🌿 Partnering with local schools for green initiatives</p>
                        <p>🌳 Donating plants to community spaces</p>
                        <p>🌸 Annual Bloom Valley Garden Contest</p>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-emerald-800 mb-4">Upcoming Events</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-emerald-500 pl-4">
                            <h3 className="font-semibold text-lg">Spring Planting Workshop</h3>
                            <p className="text-gray-500 text-sm">April 15, 2024 | 10:00 AM</p>
                            <p className="text-gray-600 mt-2">Learn seasonal planting tips and tricks</p>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4">
                            <h3 className="font-semibold text-lg">Composting 101</h3>
                            <p className="text-gray-500 text-sm">May 2, 2024 | 2:00 PM</p>
                            <p className="text-gray-600 mt-2">Sustainable waste management for your garden</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CustomScreen