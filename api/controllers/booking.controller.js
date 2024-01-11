const Booking = require('../models/booking.model') 

async function getAllBookings(req, res) {
    try {
        const booking = await Booking.findAll()
        res.status(200).json(booking)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneBooking(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query }) 
    try {
        const booking = await Booking.findByPk(req.params.id)
        if (!booking) { res.status(500).send("Booking not found") }
        res.status(200).json(booking)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createBooking(req, res) {
    console.log(req.body)
    try {
        const booking = await Booking.create(req.body)
        res.status(200).send("Booking created")
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateBooking(req, res) {
    try {
        const [booking] = await Booking.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(booking)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteBooking(req, res) {
    try {
        const booking = await Booking.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Booking deleted", booking: booking })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllBookings, getOneBooking, createBooking, updateBooking, deleteBooking }