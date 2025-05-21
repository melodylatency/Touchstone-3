import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-gray-50">
      <Container>
        <Row>
          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-5">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Subscribe to Newsletter</h2>
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



              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Subscribe
                </button>
                <div className="flex items-center">


                </div>
              </div>
            </form>
          </div>
        </Row>

        {/* New Social and Navigation Links */}
        <Row className="mt-8 py-8 border-t">
          <Col md={4} className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <FaPinterest size={24} />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">FAQ</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Locations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Wholesale Inquiries</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600">Careers</a></li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3 border-t">
            <p className="text-gray-600">
              Bloom Valley Nursery &copy; {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;