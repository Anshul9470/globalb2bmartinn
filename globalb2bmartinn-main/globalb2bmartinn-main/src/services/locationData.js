export const COUNTRIES = [
    "India",
    "United Arab Emirates",
    "United States",
    "China",
    "United Kingdom",
    "Germany",
    "Japan",
    "Singapore",
    "Australia",
    "Canada",
    "France",
    "Italy",
    "Russia",
    "Brazil",
    "South Africa"
];

export const INDIAN_STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
];

export const getStateSuggestions = (query) => {
    if (!query || !query.trim()) return INDIAN_STATES.slice(0, 10);
    const q = query.toLowerCase().trim();
    return INDIAN_STATES.filter(s => s.toLowerCase().includes(q)).slice(0, 10);
};
