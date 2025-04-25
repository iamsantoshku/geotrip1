




import React, { useState } from "react";
import { FaUser, FaPhone, FaHandshake, FaGlobe } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import Head from "../component/Head";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BACKENDURL}/api/v1/contacts/contact`, formData);
      alert(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    <Head
        title="Contact Us - Make Us Trip"
        description="Get in touch with Make Us Trip for bookings, queries, or support. We're here to help you plan your perfect trip."
        keywords="contact make us trip, travel support, booking help, customer service, make us trip contact"
        image="https://www.makeustrip.in/contact-banner.png"
        url="https://www.makeustrip.in/contact"
      />
    <div className="max-w-7xl mx-auto px-6 py-12">
      

      <section className="mt-16 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="email@domain.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 h-24"
              placeholder="Leave us a message..."
            ></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm text-gray-600">
              Agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">Send Message</button>
        </form>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Visit Us at Our Location</h2>
        <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198443470863!2d-122.4194154846811!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2e4e7b6b%3A0x56c3db0d3ff7abcb!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1631884478239!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="w-full"
          ></iframe>
        </div>
      </section>
    </div>
    </>
    
  );
};

export default ContactPage;
