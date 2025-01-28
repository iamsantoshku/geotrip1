// import React, { useState } from "react";
// import { BACKENDURL } from "../Config/Config";

// const AddRental = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     city: "",
//     distanceFromTown: "",
//     mapLink: "",
//     beds: "",
//     baths: "",
//     store: "",
//     sqft: "",
//     roomType: "",
//     lastBooked: "",
//     cancellationPolicy: "",
//     discount: "",
//     originalPrice: "",
//     discountedPrice: "",
//     taxesAndFees: "",
//     reviews: "",
//     rating: "",
//     availabilityLink: "",
//     image: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     try {
//       const response = await fetch(BACKENDURL + "/api/v1/rental/addrental", {
//         method: "post",
//         body: data,
//       });
//       const result = await response.json();
//       if (response.ok) {
//         alert("Rental added successfully!");
//         setFormData({
//           title: "",
//           category: "",
//           city: "",
//           distanceFromTown: "",
//           mapLink: "",
//           beds: "",
//           baths: "",
//           store: "",
//           sqft: "",
//           roomType: "",
//           lastBooked: "",
//           cancellationPolicy: "",
//           discount: "",
//           originalPrice: "",
//           discountedPrice: "",
//           taxesAndFees: "",
//           reviews: "",
//           rating: "",
//           availabilityLink: "",
//           image: null,
//         });
//       } else {
//         alert(result.message || "Failed to add rental");
//       }
//     } catch (error) {
//       console.error("Error adding rental:", error);
//       alert("Error adding rental");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-6 text-center">Add Rental Property</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Title */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">City</label>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         {/* Distance from Town */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Distance from Town</label>
//           <input
//             type="text"
//             name="distanceFromTown"
//             value={formData.distanceFromTown}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         {/* Map Link */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Map Link</label>
//           <input
//             type="url"
//             name="mapLink"
//             value={formData.mapLink}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         {/* Property Details */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Beds</label>
//             <input
//               type="number"
//               name="beds"
//               value={formData.beds}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Baths</label>
//             <input
//               type="number"
//               name="baths"
//               value={formData.baths}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Store</label>
//             <input
//               type="text"
//               name="store"
//               value={formData.store}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Square Feet</label>
//             <input
//               type="number"
//               name="sqft"
//               value={formData.sqft}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//         </div>

//         {/* Room Type */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Room Type</label>
//           <input
//             type="text"
//             name="roomType"
//             value={formData.roomType}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="mt-1 block w-full text-gray-500"
//             required
//           />
//         </div>

//         {/* Price Details */}
//         <div className="grid grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Original Price</label>
//             <input
//               type="number"
//               name="originalPrice"
//               value={formData.originalPrice}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discounted Price</label>
//             <input
//               type="number"
//               name="discountedPrice"
//               value={formData.discountedPrice}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Taxes & Fees</label>
//             <input
//               type="number"
//               name="taxesAndFees"
//               value={formData.taxesAndFees}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//         </div>

//         {/* Reviews */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Reviews</label>
//           <input
//             type="number"
//             name="reviews"
//             value={formData.reviews}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         {/* Rating */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Rating</label>
//           <input
//             type="number"
//             name="rating"
//             value={formData.rating}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         {/* Availability Link */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Availability Link</label>
//           <input
//             type="url"
//             name="availabilityLink"
//             value={formData.availabilityLink}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRental;



import React, { useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const AddRental = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    city: "",
    distanceFromTown: "",
    mapLink: "",
    beds: 0,
    baths: 0,
    store: 0,
    sqft: 0,
    roomType: "",
    cancellationPolicy: "",
    discount: 0,
    originalPrice: 0,
    discountedPrice: 0,
    taxesAndFees: 0,
    reviews: 0,
    rating: 0,
    availabilityLink: "",
  });

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      // Append form data
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Append images
      Array.from(images).forEach((image) => {
        data.append("images", image);
      });

      const response = await axios.post(
        `${BACKENDURL}/api/v1/rental/addrental`, // Replace with your actual backend URL
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Failed to add rental. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Rental Property</h1>
      {message && (
        <div
          className={`mb-4 p-4 rounded ${
            message.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Title and Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-600">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Distance From Town</label>
            <input
              type="text"
              name="distanceFromTown"
              value={formData.distanceFromTown}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Map Link */}
        <div className="mb-4">
          <label className="block text-gray-600">Map Link</label>
          <input
            type="text"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {["beds", "baths", "store", "sqft"].map((field) => (
            <div key={field}>
              <label className="block text-gray-600">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="number"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>

        {/* Room Type and Cancellation Policy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-600">Room Type</label>
            <input
              type="text"
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Cancellation Policy</label>
            <input
              type="text"
              name="cancellationPolicy"
              value={formData.cancellationPolicy}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Pricing and Reviews */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {["discount", "originalPrice", "discountedPrice", "taxesAndFees", "reviews", "rating"].map((field) => (
            <div key={field}>
              <label className="block text-gray-600">
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>

        {/* Availability Link */}
        <div className="mb-4">
          <label className="block text-gray-600">Availability Link</label>
          <input
            type="text"
            name="availabilityLink"
            value={formData.availabilityLink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-gray-600">Upload Images (Max 5)</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white p-2 rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Add Rental"}
        </button>
      </form>
    </div>
  );
};

export default AddRental;
