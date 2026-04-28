// controllers/FormController.js

const Form = require('../models/formmodel');

const submitForm = async (req, res) => {
    try {
        const formData = req.body;
        const newForm = new Form(formData);
        await newForm.save();
        res.status(201).send(newForm);
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { submitForm };



