// import React, { useState } from "react";
// import {
//   FaUser,
//   FaPhone,
//   FaHandshake,
//   FaGlobe,
// } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const ContactPage = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const contactData = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     };

//     try {
//       const response = await axios.post(
//         BACKENDURL + "/api/v1/contacts/contact",
//         contactData
//       );
//       alert(response.data.message);
//       window.location.reload();
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-8">
//       {/* User-Friendly Section */}
//       <section className="text-center">
//         <h2 className="text-5xl font-semibold">
//           Contact Our<span className="text-black font-bold"> Friendly Experts </span>Team
//         </h2>
//         <p className="mt-2 text-gray-500">Any questions? We would be happy to help you.</p>

//         <div className="flex flex-wrap justify-center mt-8">
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaUser size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Help & Support</h3>
//               <p className="text-gray-500 mt-2">
//                 For help with a current product or service or refer to FAQs and developer tools.
//               </p>
//               <a href="mailto:support@alithemes.com" className="text-blue-500 mt-4 block">
//                 support@alithemes.com
//               </a>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaPhone size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Call Us</h3>
//               <p className="text-gray-500 mt-2">Call us to speak to a member of our team.</p>
//               <p className="text-blue-500 mt-4">(+91)7033825186 </p>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaHandshake size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Business Department</h3>
//               <p className="text-gray-500 mt-2">
//                 Contact the sales department about cooperation projects.
//               </p>
//               <p className="text-blue-500 mt-4">(+01) 789 453 23</p>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaGlobe size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Global Branch</h3>
//               <p className="text-gray-500 mt-2">
//                 Contact us to open our branches globally.
//               </p>
//               <p className="text-blue-500 mt-4">(+01) 345 456 23</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Get in Touch Section */}
//       <section className="mt-16">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full lg:w-7/12">
//             <h1 className="text-5xl font-semobold text-black mb-8">Get in Touch</h1>
//             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="mt-1 p-2 w-full border rounded-md"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="mt-1 p-2 w-full border rounded-md"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="email@domain.com"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="block text-gray-700">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Phone number"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="block text-gray-700">Your Message</label>
//                 <textarea
//                   placeholder="Leave us a message..."
//                   className="mt-1 p-2 w-full border rounded-md h-24"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </div>
//               <div className="mt-4 flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <p className="text-sm text-gray-600">
//                   Agree to our{" "}
//                   <span className="text-blue-500">Terms of Service</span> and{" "}
//                   <span className="text-blue-500">Privacy Policy</span>
//                 </p>
//               </div>
//               <button className="bg-black text-white rounded-lg mt-6 px-6 py-2">
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
//             <div className="bg-yellow-100 p-4 rounded-lg text-center">
//               <p className="font-semibold text-xl">
//                 1684 people used Webreak Global in the last 24 hours
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="mt-16">
//         <h2 className="text-3xl font-semibold text-center mb-4">
//           Visit Us at Our Location
//         </h2>
//         <div className="rounded-lg overflow-hidden shadow-md">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198443470863!2d-122.4194154846811!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2e4e7b6b%3A0x56c3db0d3ff7abcb!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1631884478239!5m2!1sen!2sin"
//             width="100%"
//             height="400"
//             allowFullScreen=""
//             loading="lazy"
//             title="Google Map"
//             className="w-full"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;




import React, { useState } from "react";
import { FaUser, FaPhone, FaHandshake, FaGlobe } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact Our <span className="text-black">Friendly Experts</span></h2>
        <p className="mt-3 text-gray-600">Any questions? We would be happy to help you.</p>
      </section>
      
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {[
          { icon: <FaUser size={32} />, title: "Help & Support", text: "For help with a current product or service.", contact: "support@alithemes.com" },
          { icon: <FaPhone size={32} />, title: "Call Us", text: "Speak to a member of our team.", contact: "(+91)7033825186" },
          { icon: <FaHandshake size={32} />, title: "Business Department", text: "Contact for cooperation projects.", contact: "(+01) 789 453 23" },
          { icon: <FaGlobe size={32} />, title: "Global Branch", text: "Reach out for global expansions.", contact: "(+01) 345 456 23" },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
            <div className="text-blue-600 mx-auto mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.text}</p>
            <p className="text-blue-500 mt-4 font-medium">{item.contact}</p>
          </div>
        ))}
      </div>

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
  );
};

export default ContactPage;
