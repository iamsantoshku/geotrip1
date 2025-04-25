

import React, { useState, useContext } from "react";
import { BACKENDURL } from "../../Config/Config";
import { useLocation } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { toast } from "react-toastify";

const RentalDetails = () => {
    const location = useLocation();
    const rental = location.state?.rental;

    const [guests, setGuests] = useState([]);
    const [newGuest, setNewGuest] = useState({ name: "", age: "" });
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [title, settitle] = useState("")

    const { user } = useContext(authContext);

    // Ensure rental data exists
    if (!rental) {
        return <div className="text-center mt-5">Loading rental details...</div>;
    }

    // Add a guest to the guest list
    const addGuest = () => {
        if (newGuest.name.trim() && newGuest.age) {
            setGuests([...guests, newGuest]);
            setNewGuest({ name: "", age: "" });
        } else {
            toast.error("Please provide both name and age for the guest.");
        }
    };

    // Remove a guest from the list
    const removeGuest = (index) => {
        setGuests(guests.filter((_, i) => i !== index));
    };

    // Confirm booking and send data to the backend
    const confirmBooking = async () => {
        if (!user) {
            toast.error("You need to log in to confirm a booking!");
            return;
        }

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("Authentication token is missing!");
                return;
            }

            const bookingDetails = {
                userId: user._id, // Ensure user ID is available
                rentalId: rental._id,
                guests,
                title,
                totalPrice: rental.discountedPrice,
            };

            const response = await fetch(`${BACKENDURL}/api/v1/bookings/book`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingDetails),
            });

            const data = await response.json();

            if (response.ok) {
                setBookingSuccess(true);
                toast.success("Booking Successful!");
            } else {
                toast.error(`Booking Failed: ${data.message}`);
            }
        } catch (error) {
            console.error("Error confirming booking:", error);
            toast.error("An error occurred while confirming your booking.");
        }
    };

    return (
        <div className="container mx-auto mt-10 px-4">
            {/* Rental Details */}
            <h2 className="text-2xl font-bold text-center mb-6">Details of Property</h2>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src={`${BACKENDURL}/${rental.images[0]}`}
                        className="w-full h-64 object-cover rounded-lg"
                        alt={rental.title}
                    />
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">{rental.title}</h2>
                        <p className="mb-2">
                            <strong>Category:</strong> {rental.category}
                        </p>
                        <p className="mb-2">
                            <strong>Location:</strong> {rental.location.city}, {rental.location.distanceFromTown} km from town
                        </p>
                        <p className="mb-2">
                            <strong>Room Type:</strong> {rental.roomType}
                        </p>
                        <p className="mb-2">
                            <strong>Price:</strong> ${rental.discountedPrice} <span className="text-red-500">({rental.discount}% Off)</span>
                        </p>
                        <p className="mb-2">
                            <strong>Cancellation Policy:</strong> {rental.cancellationPolicy === "yes" ? "Free" : "No"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Guest Management */}
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Add Guests</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Guest Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={newGuest.name}
                            onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Guest Age</label>
                        <input
                            type="number"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={newGuest.age}
                            onChange={(e) => setNewGuest({ ...newGuest, age: e.target.value })}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={addGuest}
                    >
                        Add Guest
                    </button>
                </div>
            </div>

            {/* Guest List */}
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Guest List</h3>
                {guests.length === 0 ? (
                    <p className="text-gray-500">No guests added yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {guests.map((guest, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
                            >
                                <span>
                                    {guest.name} (Age: {guest.age})
                                </span>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                                    onClick={() => removeGuest(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Price Details */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Price Details</h3>
                <p className="mb-2">
                    <strong>Base Price:</strong> ${rental.
originalPrice
}
                </p>
                <p className="mb-2">
                    <strong>Discount:</strong> {rental.discount}%
                </p>
                <p className="mb-2 font-bold text-lg">
                    <strong>Total Price:</strong> ${rental.discountedPrice}
                </p>
            </div>

            {/* Confirm Booking */}
            <div className="mt-8">
                <button
                    className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
                    onClick={confirmBooking}
                >
                    Confirm Booking
                </button>

                {bookingSuccess && (
                    <p className="mt-4 text-green-600 text-center">Booking has been successfully completed!</p>
                )}
            </div>
        </div>
    );
};

export default RentalDetails;
