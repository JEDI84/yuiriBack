const Admin = require('../models/admin.model') 

async function getAllAdmins(req, res) {
    try {
        const admin = await Admin.findAll()
        res.status(200).json(admin)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneAdmin(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query }) 
    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) { res.status(500).send("Admin not found") }
        res.status(200).json(admin)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createAdmin(req, res) {
    console.log(req.body)
    try {
        const admin = await Admin.create(req.body)
        res.status(200).send("Admin created")
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateAdmin(req, res) {
    try {
        const [admin] = await Admin.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(admin)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteAdmin(req, res) {
    try {
        const admin = await Admin.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Admin deleted", admin: admin })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllAdmins, getOneAdmin, createAdmin, updateAdmin, deleteAdmin }