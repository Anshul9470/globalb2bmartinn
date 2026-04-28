const axios = require('axios');

const testApi = async () => {
    try {
        const response = await axios.get('http://localhost:3005/by-category/Spices');
        console.log('Status:', response.status);
        console.log('Count:', response.data.length);
        if (response.data.length > 0) {
            console.log('First Item:', response.data[0].companyName);
        }
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response Status:', error.response.status);
            console.error('Response Data:', error.response.data);
        }
    }
};

testApi();
