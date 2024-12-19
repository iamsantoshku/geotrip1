// TicketController.js
const Ticket = require('../models/Ticket'); // Common ticket model
const Flight = require('../models/Flight');
const Hotel = require('../models/Hotel');
const CarRental = require('../models/CarRental');
const User = require('../models/User');

module.exports = {
  // Create a new ticket for flight, hotel, or car rental
  createTicket: async (req, res) => {
    const { uid, type, itemId, price, bookingDetails, status } = req.body;
    
    try {
      const user = await User.findById(uid);
      if (!user) return res.status(404).json({ success: false, message: 'User not found' });

      const ticket = new Ticket({
        uid,
        type,
        itemId,
        price,
        bookingDetails,
        status: status || 'Booked', // Default status is "Booked"
      });

      await ticket.save();
      res.status(201).json({ success: true, message: 'Ticket created successfully', ticket });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },

  // Get all tickets for a user
  getUserTickets: async (req, res) => {
    const { uid } = req.params;

    try {
      const tickets = await Ticket.find({ uid });
      res.status(200).json({ success: true, tickets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },

  // Get details of a specific ticket
  getTicketDetails: async (req, res) => {
    const { ticketId } = req.params;

    try {
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });

      let itemDetails;
      switch (ticket.type) {
        case 'Flight':
          itemDetails = await Flight.findById(ticket.itemId);
          break;
        case 'Hotel':
          itemDetails = await Hotel.findById(ticket.itemId);
          break;
        case 'CarRental':
          itemDetails = await CarRental.findById(ticket.itemId);
          break;
        default:
          return res.status(400).json({ success: false, message: 'Invalid ticket type' });
      }

      res.status(200).json({ success: true, ticket, itemDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },

  // Update the status of a ticket (e.g., cancel a ticket)
  updateTicketStatus: async (req, res) => {
    const { ticketId } = req.params;
    const { status } = req.body;

    try {
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });

      ticket.status = status;
      await ticket.save();

      res.status(200).json({ success: true, message: 'Ticket status updated successfully', ticket });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },

  // Get all tickets of a specific type (Flight, Hotel, CarRental)
  getTicketsByType: async (req, res) => {
    const { type } = req.params;

    try {
      const tickets = await Ticket.find({ type });
      res.status(200).json({ success: true, tickets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },

  // Get all cancelled tickets
  getCancelledTickets: async (req, res) => {
    try {
      const tickets = await Ticket.find({ status: 'Cancelled' });
      res.status(200).json({ success: true, tickets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },

  // Delete a ticket
  deleteTicket: async (req, res) => {
    const { ticketId } = req.params;

    try {
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });

      await ticket.remove();
      res.status(200).json({ success: true, message: 'Ticket deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },
};
