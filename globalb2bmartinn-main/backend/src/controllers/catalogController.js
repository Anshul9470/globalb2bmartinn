const Catalog = require('../models/catalog');
const path = require('path');

exports.addCatalog = async (req, res) => {
    try {
        const { userId } = req.params;
        const { title, description } = req.body;
        const files = req.files ? req.files.map(file => `/uploadsprducts/${file.filename}`) : [];

        const newCatalog = new Catalog({
            userId,
            title,
            description,
            files
        });

        await newCatalog.save();
        res.status(201).json({ message: 'Catalog added successfully', catalog: newCatalog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCatalogsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const catalogs = await Catalog.find({ userId });
        res.status(200).json({ catalogs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCatalog = async (req, res) => {
    try {
        const { catalogId } = req.params;
        await Catalog.findByIdAndDelete(catalogId);
        res.status(200).json({ message: 'Catalog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
