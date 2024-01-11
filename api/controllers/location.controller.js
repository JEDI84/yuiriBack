const Location = require('../models/location.model') 

async function getAllLocations(req, res) {
    try {
        const location = await Location.findAll()
        res.status(200).json(location)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneLocation(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  
    try {
        const location = await Location.findByPk(req.params.id)
        if (!location) { res.status(500).send("Location not found") }
        res.status(200).json(user)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createLocation(req, res) {
    console.log(req.body)
    try {
        const location = await Location.create(req.body)
        res.status(200).send("Location created")
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateLocation(req, res) {
    try {
        const [location] = await Location.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(location)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteLocation(req, res) {
    try {
        const location = await Location.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Location deleted", location: location })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllLocations, getOneLocation, createLocation, updateLocation, deleteLocation }