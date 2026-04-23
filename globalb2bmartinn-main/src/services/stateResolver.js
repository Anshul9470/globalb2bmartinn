/**
 * Comprehensive mapping of Indian cities to their respective states.
 * This ensures that even if the statename field is missing in the database,
 * the frontend can still resolve and display the correct state.
 */
const CITY_TO_STATE = {
  // Chhattisgarh
  'raipur': 'Chhattisgarh', 'bilaspur': 'Chhattisgarh', 'durg': 'Chhattisgarh', 'bhilai': 'Chhattisgarh', 'korba': 'Chhattisgarh', 'rajnandgaon': 'Chhattisgarh',
  // Maharashtra
  'mumbai': 'Maharashtra', 'pune': 'Maharashtra', 'nagpur': 'Maharashtra', 'thane': 'Maharashtra', 'nashik': 'Maharashtra', 'aurangabad': 'Maharashtra', 'solapur': 'Maharashtra', 'amravati': 'Maharashtra', 'navi mumbai': 'Maharashtra', 'kolhapur': 'Maharashtra', 'akola': 'Maharashtra', 'jalgaon': 'Maharashtra',
  // Delhi
  'delhi': 'Delhi', 'new delhi': 'Delhi', 'noida': 'Uttar Pradesh', 'gurgaon': 'Haryana', 'gurugram': 'Haryana', 'ghaziabad': 'Uttar Pradesh', 'faridabad': 'Haryana',
  // Karnataka
  'bangalore': 'Karnataka', 'bengaluru': 'Karnataka', 'hubli': 'Karnataka', 'dharwad': 'Karnataka', 'mysore': 'Karnataka', 'mysuru': 'Karnataka', 'gulbarga': 'Karnataka', 'belgaum': 'Karnataka', 'mangalore': 'Karnataka', 'mangaluru': 'Karnataka',
  // Tamil Nadu
  'chennai': 'Tamil Nadu', 'madurai': 'Tamil Nadu', 'coimbatore': 'Tamil Nadu', 'salem': 'Tamil Nadu', 'tiruchirappalli': 'Tamil Nadu', 'tiruppur': 'Tamil Nadu', 'erode': 'Tamil Nadu', 'vellore': 'Tamil Nadu',
  // West Bengal
  'kolkata': 'West Bengal', 'howrah': 'West Bengal', 'durgapur': 'West Bengal', 'asansol:' : 'West Bengal', 'siliguri': 'West Bengal',
  // Telangana
  'hyderabad': 'Telangana', 'warangal': 'Telangana', 'nizamabad': 'Telangana', 'karimnagar': 'Telangana',
  // Andhra Pradesh
  'visakhapatnam': 'Andhra Pradesh', 'vijayawada': 'Andhra Pradesh', 'guntur': 'Andhra Pradesh', 'nellore': 'Andhra Pradesh', 'kurnool': 'Andhra Pradesh', 'rajahmundry': 'Andhra Pradesh', 'tirupati': 'Andhra Pradesh',
  // Gujarat
  'ahmedabad': 'Gujarat', 'surat': 'Gujarat', 'vadodara': 'Gujarat', 'rajkot': 'Gujarat', 'bhavnagar': 'Gujarat', 'jamnagar': 'Gujarat', 'junagadh': 'Gujarat', 'gandhidham': 'Gujarat', 'gandhinagar': 'Gujarat',
  // Rajasthan
  'jaipur': 'Rajasthan', 'jodhpur': 'Rajasthan', 'udaipur': 'Rajasthan', 'kota': 'Rajasthan', 'bikaner': 'Rajasthan', 'ajmer': 'Rajasthan', 'bhilwara': 'Rajasthan', 'alwar': 'Rajasthan',
  // Uttar Pradesh
  'lucknow': 'Uttar Pradesh', 'kanpur': 'Uttar Pradesh', 'agra': 'Uttar Pradesh', 'meerut': 'Uttar Pradesh', 'varanasi': 'Uttar Pradesh', 'prayagraj': 'Uttar Pradesh', 'allahabad': 'Uttar Pradesh', 'bareilly': 'Uttar Pradesh', 'aligarh': 'Uttar Pradesh', 'moradabad': 'Uttar Pradesh', 'saharanpur': 'Uttar Pradesh', 'gorakhpur': 'Uttar Pradesh', 'jhansi': 'Uttar Pradesh',
  // Madhya Pradesh
  'indore': 'Madhya Pradesh', 'bhopal': 'Madhya Pradesh', 'jabalpur': 'Madhya Pradesh', 'gwalior': 'Madhya Pradesh', 'ujjain': 'Madhya Pradesh', 'sagar': 'Madhya Pradesh', 'ratlam': 'Madhya Pradesh', 'rewa': 'Madhya Pradesh',
  // Punjab
  'ludhiana': 'Punjab', 'amritsar': 'Punjab', 'jalandhar': 'Punjab', 'patiala': 'Punjab', 'bathinda': 'Punjab', 'mohali': 'Punjab',
  // Haryana
  'panipat': 'Haryana', 'ambala': 'Haryana', 'rohtak': 'Haryana', 'hisar': 'Haryana', 'karnal': 'Haryana', 'sonipat': 'Haryana',
  // Bihar
  'patna': 'Bihar', 'gaya': 'Bihar', 'bhagalpur': 'Bihar', 'muzaffarpur': 'Bihar', 'purnia': 'Bihar',
  // Jharkhand
  'ranchi': 'Jharkhand', 'jamshedpur': 'Jharkhand', 'dhanbad': 'Jharkhand', 'bokaro': 'Jharkhand',
  // Odisha
  'bhubaneswar': 'Odisha', 'cuttack': 'Odisha', 'rourkela': 'Odisha', 'brahmapur': 'Odisha',
  // Assam
  'guwahati': 'Assam', 'silchar': 'Assam', 'dibrugarh': 'Assam',
  // Kerala
  'kochi': 'Kerala', 'thiruvananthapuram': 'Kerala', 'kozhikode': 'Kerala', 'thrissur': 'Kerala', 'malappuram': 'Kerala',
  // Uttarakhand
  'dehradun': 'Uttarakhand', 'haridwar': 'Uttarakhand', 'roorkee': 'Uttarakhand', 'haldwani': 'Uttarakhand',
  // Jammu & Kashmir
  'srinagar': 'Jammu and Kashmir', 'jammu': 'Jammu and Kashmir',
  // Himachal Pradesh
  'shimla': 'Himachal Pradesh', 'mandi': 'Himachal Pradesh',
  // Goa
  'panaji': 'Goa', 'margaon': 'Goa'
};

/**
 * Resolves the state name for a buyer or seller item.
 * @param {Object} item - The buyer or seller object from the API.
 * @returns {string} - The resolved state name or empty string.
 */
export const resolveState = (item) => {
  if (!item) return '';

  // 1. Check direct statename field (Priority)
  if (item.statename && item.statename.toLowerCase() !== 'other' && item.statename.toLowerCase() !== 'unknown') {
    return item.statename;
  }

  // 2. Check nested statename (for some seller structures)
  if (item.seller?.statename) {
    return item.seller.statename;
  }

  // 3. Resolve from city names
  const city = (item.city || item.cityname || '').toLowerCase().trim();
  if (city && CITY_TO_STATE[city]) {
    return CITY_TO_STATE[city];
  }

  // 4. Check if the city name ITSELF is a state name (user error compensation)
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];
  
  const matchedState = states.find(s => s.toLowerCase() === city);
  if (matchedState) return matchedState;

  // 5. Fallback to existing statename if it was 'Other' or 'Unknown' but nothing better was found
  return item.statename || item.state || '';
};
