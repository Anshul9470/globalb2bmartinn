// controllers/amountFormController.js

const amountForm = require('../models/amountmodel');

// Controller function to handle form submission
const submitForm = async (req, res) => {
    try {
        const { name, number, email, city, companyName, amount } = req.body;

        // Create a new form instance
        const newForm = new amountForm({
            name,
            number,
            email,
            city,
            companyName,
            amount
        });

        // Save the form data to the database
        await newForm.save();

        // Respond with success message
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    submitForm
};
