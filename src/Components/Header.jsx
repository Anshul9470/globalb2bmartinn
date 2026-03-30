// import React, { useState } from 'react';
// import styles from './Navbar.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
// import PeanutBuy from '../Buyers/PeanutBuy';

// function Header() {
//     const [isActive, setIsActive] = useState(true);
//     const [selectedOption, setSelectedOption] = useState('products');
//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     const toggleActiveClass = () => {
//         setIsActive(!isActive);
//     };

//     const removeActive = () => {
//         setIsActive(false);
//     };

//     const handleSelectChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     const handleInputChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//++++++++++++++++++++++++++++++++++ Always In a Comment===++++++++++++++++++++++++++++++++++++++++

// const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const query = searchQuery.toLowerCase();

//     if (selectedOption === 'products') {
//         // Define keyword to path mapping for products
//         const keywordToPath = {
//             chemicals: 'chemicals',
//             chemical: 'chemicals',
//             acid: 'chemicals',
//             agriculture: 'agriculture',
//             vegetables: 'agriculture',
//             vegetable: 'agriculture',
//             fruits: 'agriculture',
//             fruit: 'agriculture',
//             rice: 'agriculture',
//             onions: 'farming/onions',
//             onion: 'farming/onions',
//             skirts: 'fashion/apprarels',
//             skirts: 'fashion/apprarels',
//             shirt: 'fashion/apprarels',
//             tshirt: 'fashion/apprarels',
//             blouse: 'fashion/apprarels',
//             plastic: 'plastic',
//             furniture: 'plastic',
//             'mobile accessories': 'mobile/accessories',
//             'mobile cover': 'mobile/accessories',
//             mobile: 'mobile/accessories',
//             cases: 'mobile/accessories',
//             charger: 'mobile/accessories',
//             'mobile charger': 'mobile/accessories',
//             'mobile phone': 'mobile/accessories',
//             'screen guard': 'mobile/accessories',
//             'screen guards': 'mobile/accessories',
//             'mobile headsets': 'mobile/accessories',
//             headsets: 'mobile/accessories',
//             steel: 'steel/utensils',
//             'steel utensils': 'steel/utensils',
//             utensils: 'steel/utensils',
//             'seat covers': 'seat/covers',
//             'bike cover': 'seat/covers',
//             'car cover': 'seat/covers',
//             'van cover': 'seat/covers',
//             'seat covers': 'seat/covers',
//             'bike seat cover': 'seat/covers',
//             'car seat cover': 'seat/covers',
//             'van seat cover': 'seat/covers',
//             'covers': 'seat/covers',
//             'cover': 'seat/covers',
//             'car seat covers': 'seat/covers',
//             'bike seat covers': 'seat/covers',
//             'truck seat covers': 'seat/covers',
//             'bus seat covers': 'seat/covers',
//             'van seat covers': 'seat/covers',
//             'custom seat covers': 'seat/covers',
//             'leather seat covers': 'seat/covers',
//             'fabric seat covers': 'seat/covers',

//             salt: 'salts',
//             salts: 'salts',
//             'sea salt': 'salts',
//             'iodized salt': 'salts',
//             'rock salt': 'salts',
//             'sea salt': 'salts',
//             'himalayan salt': 'salts',
//             'kosher salt': 'salts',
//             'black salt': 'salts',
//             'flake salt': 'salts',
//             'table salt': 'salts',

//             arts: 'arts',
//             art: 'arts',
//             Painting: 'arts',
//             drawing: 'arts',
//             paints: 'arts',
//             paint: 'arts',
//             photoghaphy: 'arts',
//             'power Tools': 'powertools',
//             'drills': 'powertools',
//             'grinders': 'powertools',
//             'saws': 'powertools',
//             'sanders': 'powertools',
//             'impact drivers': 'powertools',
//             'nail guns': 'powertools',
//             'angle grinders': 'powertools',
//             'power tools': 'powertools',

//             tool: 'powertools',
//             tools: 'powertools',
//             pooja: 'pooja/articles',
//             articles: 'pooja/articles',
//             'incense sticks': 'pooja/articles',
//             'diya & lamps': 'pooja/articles',
//             'pooja thalis': 'pooja/articles',
//             'god idols': 'pooja/articles',
//             'pooja bells': 'pooja/articles',
//             'pooja kalash': 'pooja/articles',
//             'chowkis': 'pooja/articles',
//             'pooja articles': 'pooja/articles',
//             'pooja articles': 'pooja/articles',
//             'decorative items': 'decorativeItems',
//             'gym equipment': 'sports/accessories',
//             'fitness accessories': 'sports/accessories',
//             'sports shoes': 'sports/accessories',
//             'sportswear': 'sports/accessories',
//             'sports bags': 'sports/accessories',
//             'outdoor sports': 'sports/accessories',
//             'water sports': 'sports/accessories',
//             'team sports': 'sports/accessories',

//             decorative: 'decorativeItems',
//             'decoration items': 'decorativeItems',
//             'decoration item': 'decorativeItems',
//             'sports accessories': 'sports/accessories',
//             sports: 'sports/accessories',
//             sport: 'sports/accessories',
//             'money exchange': 'moneyexchange',
//             'exchange': 'moneyexchange',
//             money: 'moneyexchange'
//         };

//         let path = '/products';

//         // Check if the query matches any keyword for specific paths
//         for (const [keyword, keywordPath] of Object.entries(keywordToPath)) {
//             if (query.includes(keyword)) {
//                 path = keywordPath;
//                 break;
//             }
//         }

//         navigate(`${path}?search=${searchQuery}`);
//     } else if (selectedOption === 'buyer') {
//         // Define keyword to path mapping for buyers
//         const buyerKeywordToPath = {
//             electronics: 'agriculture',
//             clothing: 'agriculture',
//             machinery: 'agriculture',
//             furniture: 'chemicals',
//             automotive: 'chemicals',
//             potato: 'agriculture',
//             rice: 'agriculture',
//             onion: '/buyer/onions',
//             onions: '/buyer/onions',
//             potato: '/buyer/potato',
//             potatos: '/buyer/potato',

//         };

//         let buyerPath = '/buyer';

//         // Check if the query matches any keyword for specific paths
//         for (const [keyword, keywordPath] of Object.entries(buyerKeywordToPath)) {
//             if (query.includes(keyword)) {
//                 buyerPath = keywordPath;
//                 break;
//             }
//         }

//         navigate(`${buyerPath}?search=${searchQuery}`);
//     } else if (selectedOption === 'company') {
//         // Define keyword to path mapping for companies
//         const companyKeywordToPath = {
//             tech: 'chemicals',
//             rice: 'chemicals',
//             finance: 'agriculture',
//             healthcare: 'agriculture',
//             retail: 'fashion-apparels',
//             education: 'fashion-apparels',
//             onion: 'company/onions',
//             yashrajbir: 'company/onions',
//             spm: 'company/onions',
//             plastic: '/plastic/company',
//             'crown furniture': '/plastic/company',
//             dekoro: '/homedecoration/company',
//             "home decoration": '/homedecoration/company',
//             steel: "/steel/company",
//             'steel utensils': "/steel/company",
//             'steel utensil': "/steel/company",
//             'mamta steel center': "/steel/company",
//             'herbal products': '/herbal/company',
//             'herbal product': '/herbal/company',
//             'seat cover': '/seatcovers/company',
//             'seat covers': '/seatcovers/company',
//             'ridhyansh enterprises': '/seatcovers/company',
//             salt: '/salt/company',
//             salts: '/salt/company',
//             'sk industry': '/salt/company',
//             arts: '/arts/company',
//             art: '/arts/company',
//             'prem arts': '/arts/company',
//             'pooja': '/poojaArticles/company',
//             'pooja articles': '/poojaArticles/company',
//             'shivani industries': '/poojaArticles/company',
//             'spor accessories': '/sportsAccessories/company',
//             'aj traders': '/sportsAccessories/company',
//             'electric bikes': '/electribike/company',
//             'electric bike': '/electribike/company',
//             'evey electric bike': '/electribike/company',
//             'money exchange': '/moneyexhange/company',
//             'pigeon forex pvt ltd': '/moneyexhange/company'
//         };

//         let companyPath = '/company';

//         // Check if the query matches any keyword for specific paths
//         for (const [keyword, keywordPath] of Object.entries(companyKeywordToPath)) {
//             if (query.includes(keyword)) {
//                 companyPath = keywordPath;
//                 break;
//             }
//         }

//         navigate(`${companyPath}?search=${searchQuery}`);
//     } else {
//         // Redirect to default page if no keyword matches
//         navigate(`/${selectedOption}?search=${searchQuery}`);
//     }
// };

//////////// Added Here ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const query = searchQuery.toLowerCase();

//         const keywordToPathMapping = {
//             products: {

//                 acid: 'chemicals',
//                 agriculture: 'agriculture',

//                 ghee: 'foodsProdcts',
//                 vegetables: 'agriculture',
//                 vegetable: 'agriculture',
//                 // fruits: 'agriculture',
//                 // fruit: 'agriculture',
//                 rice: 'agriculture',
//                 grain: 'pulses',
//                 pea: 'pulses',
//                 bean: 'pulses',
//                 lentil: 'pulses',
//                 onions: 'farming/onions',
//                 onion: 'farming/onions',
//                 skirts: 'fashion/apprarels',
//                 shirt: 'fashion/apprarels',
//                 tshirt: 'fashion/apprarels',
//                 blouse: 'fashion/apprarels',
//                 plastic: 'plastic',
//                 // furniture: 'plastic',
//                 barrel: 'plastic',
//                 'mobile accessories': 'mobile/accessories',
//                 'mobile cover': 'mobile/accessories',
//                 mobile: 'mobile/accessories',
//                 cases: 'mobile/accessories',
//                 charger: 'mobile/accessories',
//                 'mobile charger': 'mobile/accessories',
//                 'mobile phone': 'mobile/accessories',
//                 'screen guard': 'mobile/accessories',
//                 'screen guards': 'mobile/accessories',
//                 'mobile headsets': 'mobile/accessories',
//                 headsets: 'mobile/accessories',
//                 steel: 'steel/utensils',
//                 'steel utensils': 'steel/utensils',
//                 utensils: 'steel/utensils',
//                 cooker: 'steel/utensils',
//                 plate: 'steel/utensils',
//                 kitchen: 'steel/utensils',
//                 kitchenware: 'steel/utensils',
//                 Cutlery: 'steel/utensils',
//                 'iron utensil': 'steel/utensils',
//                 'seat covers': 'seat/covers',
//                 'bike cover': 'seat/covers',
//                 'car cover': 'seat/covers',
//                 'van cover': 'seat/covers',
//                 'seat covers': 'seat/covers',
//                 'bike seat cover': 'seat/covers',
//                 'car seat cover': 'seat/covers',
//                 'van seat cover': 'seat/covers',
//                 covers: 'seat/covers',
//                 cover: 'seat/covers',
//                 'car seat covers': 'seat/covers',
//                 'bike seat covers': 'seat/covers',
//                 'truck seat covers': 'seat/covers',
//                 'bus seat covers': 'seat/covers',
//                 'van seat covers': 'seat/covers',
//                 'custom seat covers': 'seat/covers',
//                 'leather seat covers': 'seat/covers',
//                 'fabric seat covers': 'seat/covers',
//                 salt: 'salts',
//                 salts: 'salts',
//                 'sea salt': 'salts',
//                 'iodized salt': 'salts',
//                 'rock salt': 'salts',
//                 'himalayan salt': 'salts',
//                 'kosher salt': 'salts',
//                 'black salt': 'salts',
//                 'flake salt': 'salts',
//                 'table salt': 'salts',
//                 arts: 'arts',
//                 art: 'arts',
//                 painting: 'arts',
//                 drawing: 'arts',
//                 picture: 'arts',
//                 gallery: 'arts',
//                 statue: 'arts',
//                 paints: 'arts',
//                 paint: 'arts',
//                 photography: 'arts',
//                 'power tools': 'powertools',
//                 drills: 'powertools',
//                 grinders: 'powertools',
//                 saws: 'powertools',
//                 sanders: 'powertools',
//                 'impact drivers': 'powertools',
//                 'nail guns': 'powertools',
//                 'angle grinders': 'powertools',
//                 tool: 'powertools',
//                 tools: 'powertools',
//                 pooja: 'pooja/articles',
//                 articles: 'pooja/articles',
//                 'incense sticks': 'pooja/articles',
//                 'diya & lamps': 'pooja/articles',
//                 'pooja thalis': 'pooja/articles',
//                 'god idols': 'pooja/articles',
//                 'pooja bells': 'pooja/articles',
//                 'pooja kalash': 'pooja/articles',
//                 chowkis: 'pooja/articles',
//                 'decorative items': 'decorativeItems',
//                 'gym equipment': 'sports/accessories',
//                 'fitness accessories': 'sports/accessories',
//                 'sports shoes': 'sports/accessories',
//                 sportswear: 'sports/accessories',
//                 'sports bags': 'sports/accessories',
//                 'outdoor sports': 'sports/accessories',
//                 'water sports': 'sports/accessories',
//                 'team sports': 'sports/accessories',
//                 decorative: 'decorativeItems',
//                 'decoration items': 'decorativeItems',
//                 'sports accessories': 'sports/accessories',
//                 sports: 'sports/accessories',
//                 sport: 'sports/accessories',
//                 'money exchange': 'moneyexchange',
//                 exchange: 'moneyexchange',
//                 money: 'moneyexchange',
//                 handicraft: 'handicraftItems',
//                 'handicraft items': 'handicraftItems',
//                 'handi craftitem': 'handicraftItems',
//                 'text tile dealer': 'texttiledealer',
//                 pillow: 'texttiledealer',
//                 bedsheet: 'texttiledealer',
//                 curtains: 'texttiledealer',
//                 blankets: 'texttiledealer',
//                 blanket: 'texttiledealer',
//                 'text tile': 'texttiledealer',
//                 pillow: 'texttiledealer',
//                 'text tiles': 'texttiledealer',
//                 texttiles: 'texttiledealer',
//                 texttile: 'texttiledealer',
//                 garment: 'garmentdedealer',
//                 kids: 'garmentdedealer',
//                 underwear: 'garmentdedealer',
//                 sock: 'garmentdedealer',
//                 saree: 'garmentdedealer',
//                 garments: 'garmentdedealer',
//                 shirts: 'garmentdedealer',
//                 shirt: 'garmentdedealer',
//                 pants: 'garmentdedealer',
//                 entertainmentevents: 'entertainmentevents',
//                 'entertainment events': 'entertainmentevents',
//                 'entertainment event': 'entertainmentevents',
//                 electronicgoods: 'electronicgoods',
//                 fan: 'electronicgoods',
//                 'electric controls panels': 'electronicgoods',
//                 'electric panel': 'electronicgoods',
//                 panel: 'electronicgoods',
//                 tv: 'electronicgoods',
//                 cooler: 'electronicgoods',
//                 laptop: 'electronicgoods',
//                 fridge: 'electronicgoods',
//                 'electronic items': 'electronicgoods',
//                 bathwaredealers: 'bathwaredealers',
//                 mugs: 'bathwaredealers',
//                 taps: 'bathwaredealers',
//                 tap: 'bathwaredealers',
//                 faucet: 'bathwaredealers',
//                 bucket: 'bathwaredealers',
//                 mug: 'bathwaredealers',
//                 bathware: 'bathwaredealers',
//                 sinks: 'bathwaredealers',
//                 sink: 'bathwaredealers',
//                 valveSupplier: 'valveSupplier',
//                 valves: 'valveSupplier',
//                 valve: 'valveSupplier',
//                 wheat: 'whearsupplier',
//                 wheats: 'whearsupplier',
//                 atta: 'whearsupplier',
//                 'wheat floor': 'whearsupplier',
//                 gymequipmentsupplier: 'gymequipmentsupplier',
//                 gym: 'gymequipmentsupplier',
//                 'gym equipment': 'gymequipmentsupplier',
//                 'gym equipments': 'gymequipmentsupplier',
//                 'gym products': 'gymequipmentsupplier',
//                 'gym product': 'gymequipmentsupplier',
//                 agroproducts: 'agroproducts',
//                 seed: 'agroproducts',
//                 'agro product': 'agroproducts',
//                 'agro products': 'agroproducts',
//                 grocery: 'agroproducts',
//                 rice: 'agroproducts',
//                 pulses: 'agroproducts',
//                 copperproducts: 'copperproducts',
//                 'copper products': 'copperproducts',
//                 'copper': 'copperproducts',
//                 'copper product': 'copperproducts',
//                 copper: 'copperproducts',
//                 eveyelctricbike: 'eveyelctricbike',
//                 'electronic bike': 'eveyelctricbike',
//                 'e bike': 'eveyelctricbike',
//                 'electric bike': 'eveyelctricbike',
//                 'electric bikes': 'eveyelctricbike',
//                 bags: 'bagsandbeltdealer',
//                 belt: 'bagsandbeltdealer',
//                 belts: 'bagsandbeltdealer',
//                 bag: 'bagsandbeltdealer',
//                 'laser products': 'laserproducts',
//                 laser: 'laserproducts',
//                 'laser product': 'laserproducts',
//                 texttlie: 'texttlie',
//                 marble: 'texttlie',
//                 stone: 'texttlie',
//                 'floor tile': 'texttlie',
//                 'wall title': 'texttlie',
//                 tiles: 'texttlie',
//                 tile: 'texttlie',
//                 'bathroom tile': 'texttlie',
//                 rugs: 'rugsandcarpets',
//                 carpet: 'rugsandcarpets',
//                 carpets: 'rugsandcarpets',
//                 leather: 'leatherproducts',
//                 'leather products': 'leatherproducts',
//                 'ppe kit': 'leatherproducts',
//                 'leather belt': 'leatherproducts',
//                 wallet: 'leatherproducts',
//                 jacket: 'leatherproducts',
//                 'water softner': 'watertank',
//                 'water tank': 'watertank',
//                 'watertank': 'watertank',
//                 'water purification system': 'watertank',
//                 ro: 'watertank',
//                 uv: 'watertank',
//                 clothes: 'clothes',
//                 'business license': 'businesslicense',
//                 business: 'businesslicense',
//                 'brass items': 'brasscomponents',
//                 'brass components': 'brasscomponents',
//                 brass: 'brasscomponents',
//                 fabric: '/fabrics',
//                 'silk fabric': '/fabrics',
//                 'cotton fabric': '/fabrics',
//                 'linen fabric': '/fabrics',
//                 'polyster fabric': '/fabrics',
//                 'wool': '/fabrics',
//                 fabrics: '/fabrics',
//                 detergent: 'detergent',
//                 'detergent powder': 'detergent',
//                 'detergent liquid': 'detergent',
//                 hing: 'hings&nipple',
//                 nipple: 'hings&nipple',
//                 jute: 'jutebags',
//                 'jute bag': 'jutebags',
//                 'jute bags': 'jutebags',
//                 scrap: 'scrap',
//                 pulses: '/pulses',
//                 peas: '/pulses',
//                 grains: '/pulses',
//                 spices: 'spices/dealers',
//                 turmeric: 'spices/dealers',
//                 'red chilli': 'spices/dealers',
//                 cumin: 'spices/dealers',
//                 'iron hammer': 'ironhammer',
//                 hammer: "ironhammer",
//                 ironhammer: 'ironhammer',
//                 rocks: 'rocks/dealer',
//                 rock: 'rocks/dealer',
//                 sanitary: 'sanitary/hardware',
//                 'sanitary hardware': 'sanitary/hardware',
//                 'bathroom fitting': 'sanitary/hardware',
//                 sink: 'sanitary/hardware',
//                 'rain cout': 'raincout/dealer',
//                 rain: 'raincout/dealer',
//                 plant: 'plants/dealer',
//                 plants: 'plants/dealer',
//                 nursery: 'plants/dealer',
//                 'indoor plants': 'plants/dealer',
//                 'outdoor plants': 'plants/dealer',
//                 'car accessories': 'caraccessories',
//                 'cars accessories': 'caraccessories',
//                 'car mat': 'caraccessories',
//                 'car sterio': 'caraccessories',
//                 parking: 'caraccessories',
//                 // 'car': 'caraccessories',
//                 'car mate': 'caraccessories',
//                 'car wheel': 'caraccessories',
//                 tyre: 'caraccessories',
//                 clip: 'packingclips',
//                 box: 'packingclips',
//                 tape: 'packingclips',
//                 'packing clip': 'packingclips',
//                 interior: "interior/designer",
//                 'interior designer': "interior/designer",
//                 lab: 'labequipments',
//                 'lab equipments': 'labequipments',
//                 laboratory: 'Laboratory',
//                 machine: 'machinemanufacturer',
//                 machinery: 'machinemanufacturer',
//                 crane: 'machinemanufacturer',
//                 potato: 'potatosupplier',
//                 marine: 'marineitems',
//                 'marine products': 'marineitems',

//                 wire: 'wiresuppliers',
//                 cable: 'wiresuppliers',
//                 granules: 'granuless',
//                 'desiccant masterbatch': 'granuless',
//                 masterbatch: 'granuless',
//                 polymers: 'granuless',
//                 gems: 'gemstones',
//                 'gems stone': 'gemstones',
//                 'banana powder': 'bananapowder',
//                 'sesame seed': 'sesameseeds',
//                 sesameseeds: 'sesameseeds',
//                 sesame: 'sesameseeds',
//                 medicine: 'medicinestore',
//                 'safety kit': 'medicinestore',
//                 'road safety': 'medicinestore',
//                 'first aid': 'medicinestore',
//                 ppe: 'medicinestore',
//                 gloves: 'medicinestore',
//                 pharma: 'medicinestore',

//                 doormatestore: 'doormatestore',
//                 'doormate store': 'doormatestore',
//                 doormate: 'doormatestore',
//                 hardware: 'hardwarestore',
//                 'seal oil': 'hardwarestore',

//                 pipe: 'hardwarestore',
//                 'fastener': 'hardwarestore',
//                 'screw': 'hardwarestore',
//                 'bolt': 'hardwarestore',
//                 'washers': 'hardwarestore',
//                 nail: 'hardwarestore',
//                 'pump': 'hardwarestore',
//                 garden: 'hardwarestore',
//                 'hardware Products': 'hardwarestore',
//                 'pvc resin  related chemicals': 'pvcrresins',
//                 submersible: 'hardwarestore',
//                 borewell: 'hardwarestore',
//                 'iron nail': 'hardwarestore',
//                 'pvc resin': 'pvcrresins',
//                 pvc: 'pvcrresins',
//                 chemical: 'pvcrresins',
//                 tour: 'tourandtravel',
//                 saffron: 'saffron-manufacturer',
//                 maize: 'maizemanu',
//                 mesh: 'wiremesh',
//                 suitcase: 'suitcasemanufacturer',
//                 'suit case': 'suitcasemanufacturer',
//                 trolly: 'suitcasemanufacturer',
//                 bags: 'suitcasemanufacturer',
//                 dry: 'dryfruitsmanu',
//                 almond: 'dryfruitsmanu',
//                 walnut: 'dryfruitsmanu',
//                 cashew: 'dryfruitsmanu',
//                 pistachios: 'dryfruitsmanu',
//                 rcc: 'rcccoverblocks',
//                 buckle: 'bucklemanufacturer',
//                 gas: 'gascontrolstore',
//                 regulator: 'gascontrolstore',
//                 fluid: 'gascontrolstore',
//                 poultry: 'poulitryfarmstore',
//                 chicken: 'poulitryfarmstore',
//                 egg: 'poulitryfarmstore',
//                 mutton: 'poulitryfarmstore',
//                 'non veg': 'poulitryfarmstore',
//                 fertilizer: 'fertilizermanufacturer',
//                 manure: 'fertilizermanufacturer',
//                 lubricant: 'lubricantsupplier',
//                 'engine oil': 'lubricantsupplier',
//                 'greases': 'lubricantsupplier',
//                 'toy': 'toysupplier',
//                 'bat': 'toysupplier',
//                 doll: 'toysupplier',
//                 cricket: 'toysupplier',
//                 'edcational toys': 'toysupplier',
//                 'computer': 'computerssupllier',
//                 mouse: 'computerssupllier',
//                 keyboard: 'computerssupllier',
//                 usb: 'computerssupllier',
//                 monitor: 'computerssupllier',
//                 beauty: 'beautyproductsdealer',
//                 haircare: 'beautyproductsdealer',
//                 skincare: 'beautyproductsdealer',
//                 cosmetic: 'beautyproductsdealer',
//                 bangles: 'beautyproductsdealer',
//                 makeup: 'beautyproductsdealer',
//                 footwear: 'footweardealers',
//                 'foot wear': 'footweardealers',
//                 shoes: 'footweardealers',
//                 sandals: 'footweardealers',
//                 candle: 'candledealers',
//                 furniture: 'best-furniture-suppliers-in-india',
//                 gift: 'giftsstore',
//                 food: 'foodproductstore',
//                 snacks: 'foodproductstore',
//                 condiments: 'foodproductstore',
//                 sauses: 'foodproductstore',
//                 light: 'tubelights',
//                 paint: 'paints'

//             },
//             buyer: {
//                 electronics: 'agriculture',
//                 clothing: 'agriculture',
//                 machinery: 'agriculture',
//                 furniture: 'chemicals',
//                 automotive: 'chemicals',
//                 potato: 'agriculture',
//                 rice: 'agriculture',
//                 onion: '/buyer/onions',
//                 onions: '/buyer/onions',
//                 potato: '/buyer/potato',
//                 potatos: '/buyer/potato',
//                 wheat: 'wheat/buyers',
//                 wheats: 'wheat/buyers',
//                 'dry fruits': '/dryfruit/buyers',
//                 'dry fruit': '/dryfruit/buyers',
//                 'decorative item': '/decorativeitem/buyers',
//                 'decorative items': '/decorativeitem/buyers',
//                 'decorative product': '/decorativeitem/buyers',
//                 'decorative products': '/decorativeitem/buyers',
//                 decorative: '/decorativeitem/buyers',
//                 'coconut oil': '/coconutoil/buyers',
//                 'tomato': '/tomato/buyers',
//                 'tomatos': '/tomato/buyers',
//                 'plastic container': '/plastic-container/buyers',
//                 plastic: '/plastic-container/buyers',
//                 maize: '/maize/buyers',
//                 'palm oil': '/palmoil/buyers',
//                 palmoil: '/palmoil/buyers',
//                 garlic: '/garlic/buyers',
//                 rice: '/rice/buyers',
//                 peanut: '/peanut/buyers',
//                 'pea nut': '/peanut/buyers',
//                 eyedrop: '/eyedrop/buyers',
//                 'eye drop': '/eyedrop/buyers',
//                 tile: '/ceramicftile/buyers',
//                 tiles: '/ceramicftile/buyers',
//                 'floor title': '/ceramicftile/buyers',
//                 statue: '/statue/buyers',
//                 gloves: 'gloves/buyers',
//                 'surgical gloves': 'gloves/buyers',
//                 glove: 'gloves/buyers',
//                 chilli: '/green/chilli/buyers',
//                 'green chilli': '/green/chilli/buyers',
//                 'red chilli': '/green/chilli/buyers',
//                 'rcc wall': 'rcc/compounds/buyers',
//                 'rcc compound': 'rcc/compounds/buyers',
//                 'basmati rice': '/rice/buyers',
//                 'masoori rice': '/rice/buyers',
//                 pulses: 'pulses/buyers',
//                 coriander: '/coriander/buyers',
//                 'coriander leaves': '/coriander/buyers',
//                 tobacco: '/TobaccoLeaves/buyers',
//                 'tobacoo leaves': '/TobaccoLeaves/buyers',
//                 'bay leaves': '/bayleaves/buyers',
//                 bay: '/bayleaves/buyers',
//                 'moringa dry leaves': '/moringa/buyers',
//                 moringa: '/moringa/buyers',
//                 'moringa leaves': '/moringa/buyers',
//                 groundnut: '/groundnut/buyers',
//                 'ground nut': '/groundnut/buyers',
//                 nuts: '/groundnut/buyers',
//                 nut: '/groundnut/buyers',
//                 jeera: '/Jeerabuy/buyers',
//                 clove: '/clovebuy/buyers',
//                 fennelseed: '/fennelseeds/buyers',
//                 'fennel seed': '/fennelseeds/buyers',
//                 'black pepper': '/blackpaper/buyers',
//                 'red chilli': 'redchilli/buyers',
//                 mustard: '/mustured/buyers',
//                 bedsheet: '/bedsheet/buyers',
//                 'bed sheet': '/bedsheet/buyers',
//                 turmeric: '/turmeric/buyers',
//                 'gas lighter': '/gaslighter/buyers'

//             },
//             company: {
//                 tech: 'chemicals',
//                 rice: 'chemicals',
//                 finance: 'agriculture',
//                 healthcare: 'agriculture',
//                 retail: 'fashion-apparels',
//                 education: 'fashion-apparels',
//                 onion: 'company/onions',
//                 yashrajbir: 'company/onions',
//                 spm: 'company/onions',
//                 plastic: '/plastic/company',
//                 'crown furniture': '/plastic/company',
//                 dekoro: '/homedecoration/company',
//                 'home decoration': '/homedecoration/company',
//                 steel: '/steel/company',
//                 'steel utensils': '/steel/company',
//                 'steel utensil': '/steel/company',
//                 'mamta steel center': '/steel/company',
//                 'herbal products': '/herbal/company',
//                 'herbal product': '/herbal/company',
//                 'seat cover': '/seatcovers/company',
//                 'seat covers': '/seatcovers/company',
//                 'ridhyansh enterprises': '/seatcovers/company',
//                 salt: '/salt/company',
//                 salts: '/salt/company',
//                 'sk industry': '/salt/company',
//                 'prem arts': '/arts/company',
//                 'prem art': '/arts/company',
//                 'prem arts': '/arts/company',
//                 pooja: '/poojaArticles/company',
//                 'pooja articles': '/poojaArticles/company',
//                 'shivani industries': '/poojaArticles/company',
//                 spor: '/sportsAccessories/company',
//                 'aj traders': '/sportsAccessories/company',
//                 'electric bikes': '/electribike/company',
//                 'electric bike': '/electribike/company',
//                 'evey electric bike': '/electribike/company',
//                 'money exchange': '/moneyexhange/company',
//                 'pigeon forex pvt ltd': '/moneyexhange/company',
//                 '4 Ever Handicraft': '/handicraft/company',
//                 'handicraft item': '/handicraft/company',
//                 'handicraft items': '/handicraft/company',
//                 bedsheet: '/textile/company',
//                 'pillow cover': '/textile/company',
//                 'pillow covers': '/textile/company',
//                 'shyam ji textile': '/textile/company',
//                 'sharma enterprises': 'sharmaplasticcomp/company',
//                 'm k bharty marvel handicraft': '/mkhandi/company',
//                 'jr crafts india': '/jrcraftcomp/company',
//                 'milan entertainment': '/milanentertainmentcomp/company',
//                 'entertainment event': '/milanentertainmentcomp/company',
//                 'khushi electronics': '/khushielectriccomp/company',
//                 'electronic items': '/khushielectriccomp/company',
//                 'marvel enterprise': '/marvelenterpriceccomp/company',
//                 bathware: '/marvelenterpriceccomp/company',
//                 'ie engimeering works': '/ieengineeringWorksComp/company',
//                 'jyantipur flour mill': '/jayantipurFlourMillComp/company',
//                 wheat: '/jayantipurFlourMillComp/company',
//                 'singh sports and fitness company': '/singhsportscomp/company',
//                 sports: '/singhsportscomp/company',
//                 'bharat trading company': '/bharattradingcomp/company',
//                 'bhadohi arts weave': '/bhadoi/company',
//                 'faizan and sons carpets': '/FaizanCarpetComp/company',
//                 'Woltz Energy': '/woltenergy/company',
//                 'divine ceramica': '/divne/company',
//                 'sabit rugs': '/sabitrugs/company',
//                 'fortune steel': '/fortunesteel/company',

//                 'nida tanners': '/nidatannersComp/company',
//                 'santosh trading company': '/santoshtrading/company',
//                 'jaipur art & rugs': '/jaipurartrugs/company',
//                 'rug beauty': '/rungbeauty/company',
//                 'king pure': 'kingPure/company',
//                 's m fashions': '/smfashion/company',
//                 'ruhaan enterprises': '/ruhanenterprices/company',
//                 'vijendra': '/vijendercomp/company',
//                 'business licence': '/businesslicence/company',
//                 'jai ambe enterprises': '/jaiambeenterprises/company',
//                 'chamunda brass': '/chamundabrass/company',
//                 'plasto tech containers': '/plastocomp/company',
//                 'jay dev garments': '/jaidevgarment/company',
//                 'amorra enterprise': '/amoraenterprises/company',
//                 'vishwakarma enterprises': '/vishwakarma/company',
//                 'jeevan security company': '/jeevans/company',
//                 'rahul enterprises': '/rahulentercomp/company',
//                 'sheemo agro food product': '/shemoagro/company',
//                 'shiv shakti loomtex': '/shivshakti/company',
//                 'radiant star ventures commerce pvt ltd': '/radiantstar/company',
//                 'yug plastic': '/yugplastic/company',

//                 'full and final': '/fullandfinal/company',
//                 'sri balaji industries': '/sribalaji/company',
//                 'hari om industries': '/hariomindustries/company',
//                 'vighnesh enterprises': '/vigneshenterprises/company',
//                 'rain coat': '/vigneshenterprises/company',
//                 'md nursery': '/mdnusery/company',
//                 plants: '/mdnusery/company',

//                 'the white labeliing': '/whitelabeling/company',
//                 shirt: '/whitelabeling/company',
//                 'modi care': '/modicare/company',
//                 grocery: "/modicare/company",
//                 'jaipur prime': '/jaipurprime/company',
//                 'sabya collection': '/sabacollection/company',
//                 'jaipur hastkar': '/jaipurhast/company',
//                 'sunita enterprises': '/sunitaenterprises/company',
//                 'pihu automotive': '/pihuautomative/company',
//                 'car accessories': '/pihuautomative/company',
//                 car: '/pihuautomative/company',
//                 crodniks: '/cordniks/company',
//                 pooja: '/cordniks/company',
//                 'pooja article': '/cordniks/company',
//                 'rozee technist': '/rozeetechnistcomp/company',
//                 clips: '/rozeetechnistcomp/company',
//                 'painter contractor saqib': '/saquib/company',
//                 'Sterling manufacturing co': '/sterling/company',
//                 'krishna enterprises': 'krishnaenterprises/company',
//                 'machine': 'krishnaenterprises/company',
//                 'pandey garment': '/pandeygarment/company',
//                 'rudra agro food tulsi cold Storage': '/rudraagro/company',
//                 potato: '/rudraagro/company',
//                 'tabassum automations': '/tabassum/company',
//                 'crystal creation': '/crystalcreation/company',
//                 crystal: '/crystalcreation/company',
//                 'wellcab winding wire': '/wellcabling/company',
//                 wire: '/wellcabling/company',
//                 'surat engineering plastic': '/suratengineering/company',
//                 granules: '/suratengineering/company',
//                 'trishula global shipping': 'trishula/company',
//                 'banana powder': 'trishula/company',
//                 'shyam trading & manufacture pvt limited': 'shyamtrade/company',
//                 'sesame seeds': 'shyamtrade/company',
//                 sakthi: '/sakhthitex/company',
//                 saree: '/sakhthitex/company',
//                 'sakthi tex': '/sakhthitex/company',
//                 'talukdar store': '/talukdarstore/company',
//                 'medicine': '/talukdarstore/company',
//                 earth: '/earthnature/company',
//                 'earth nature': '/earthnature/company',
//                 'ratan handloom': '/ratanhand/company',
//                 'door mate': '/ratanhand/company',
//                 'asha pure hardware': '/asha/company',
//                 hardware: '/asha/company',
//                 'rupali bengal textile': 'rupali/company',
//                 textlie: 'rupali/company',
//                 'manglam plast': '/manglam/company',
//                 pvc: '/manglam/company',
//                 'advance poly pack': '/manglam/company',
//                 packing: '/advancepoly/company',
//                 'ms halai': '/mshalai/company',
//                 pipe: '/mshalai/company',
//                 'brinda impex ': 'brindaimapex/company',
//                 kitchenware: 'brindaimapex/company',
//                 "aroma spice industries": '/aromaspices/company',
//                 spices: '/aromaspices/company',
//                 'vibrant colortech pvt ltd': '/vibrant/company',
//                 masterbatches: '/vibrant/company',
//                 polymers: '/vibrant/company',
//                 'sarik garments': '/sarikcomp/company',
//                 kid: '/sarikcomp/company',
//                 'swan textiles': '/swantextile/company',
//                 garment: '/swantextile/company',
//                 'blacksmith metal crafts': '/blacksmith/company',
//                 metal: '/blacksmith/company',
//                 'sidhhi vinayak': '/shidhivinayak/company',
//                 'mizaan the trip house': '/mizaan/company',
//                 travel: '/mizaan/company',
//                 'jk groups': '/jkgroup/company',
//                 'sandesh durgawale': '/sandeshdurgesh/company',
//                 seed: '/sandeshdurgesh/company',
//                 riyon: '/riyancomp/company',

//                 'submersible pump': '/riyancomp/company',
//                 'vm bliss': '/vmbliss/company',
//                 saffron: '/vmbliss/company',
//                 maize: '/laxmi/company',
//                 'laxminarain and company': '/laxmi/company',
//                 'vijaya industries': '/vijayindustrial/company',
//                 wiremesh: '/vijayindustrial/company',
//                 wire: '/vijayindustrial/company',
//                 jindal: '/jindal/company',
//                 suitcase: '/jindal/company',
//                 'lidder enterprises': '/lidderenterpri/company',
//                 dry: '/lidderenterpri/company',
//                 'jay dada enterprise': '/jaydada/company',
//                 rcc: '/jaydada/company',
//                 'hv enterprises': '/hventerprises/company',
//                 buckle: '/hventerprises/company',
//                 'rn marketing': '/rnmarketing/company',
//                 fitting: '/rnmarketing/company',
//                 'shree shiv shakti trading co': '/shreeshiv/company',
//                 scrap: '/shreeshiv/company',
//                 'export palletization specialities & solution': '/exportpalle/company',
//                 plate: '/exportpalle/company',
//                 'ocean vidya pipe udyog': '/oceanvidya/company',
//                 pipes: '/oceanvidya/company',
//                 'noble fashion': '/noblefashion/company',
//                 men: '/noblefashion/company',
//                 'ramcharan enterprises': '/ramcharan/company',
//                 "iron scrap": '/ramcharan/company',
//                 'hari textile': '/haritext/company',
//                 'bed sheet': '/haritext/company',
//                 'mauli agro farm': '/mauli/company',
//                 'poultry': '/mauli/company',
//                 'siddhi collection': '/siddhicollec/company',
//                 'chanderi': '/siddhicollec/company',
//                 'fusion glass concepr': 'fusionglass/company',
//                 'fittings': 'fusionglass/company',
//                 'niwar corner': '/niwarcornercomp/company',
//                 jeans: '/niwarcornercomp/company',
//                 'bkagricultural': '/bkaggriculture/company',
//                 fertilizer: '/bkaggriculture/company',
//                 'magna mater eco products pvt ltd': '/maganmater/company',
//                 bag: '/maganmater/company',
//                 'ambika biochem': '/ambikabio/company',
//                 'kunal engineering works': '/kunalworkeng/company',
//                 'credo exports': '/credoexport/company',
//                 "bhugra interior": '/bhugrainterior/company',
//                 'rich decor': '/richdecor/company',
//                 'saifuddin enterprise': '/saifrudhin/company',
//                 scrap: '/saifrudhin/company',
//                 baba: '/jaibabametal/company',
//                 'silver fastners': '/silverfast/company',
//                 'fastners': '/silverfast/company',
//                 'ravi fastners': 'ravi/company',
//                 'flonex lubricant': '/flonexlubricant/company',
//                 'star brass industries': '/starbrass/company',
//                 brass: '/starbrass/company',
//                 'p.k sports ': '/pksprts/company',
//                 toy: '/pksprts/company',
//                 'srm': '/srmsports/company',
//                 'shadab cricket': '/shadabcricket/company',
//                 'Khan barrel supplier': '/khanbarrel/company',
//                 barrel: '/khanbarrel/company',
//                 'computer accessories': '/computeraccessories/company',
//                 computer: '/computeraccessories/company',
//                 'forever green nursery': '/forevergreen/company',
//                 'nursery': '/forevergreen/company',
//                 'maa padmawati enterprises': '/maapadmawati/company',
//                 barrel: '/maapadmawati/company',
//                 'star traders': '/startrader/company',
//                 'trnatva beauty': '/trnatvbeauty/company',
//                 'shree ganesh foot wear': '/shreeganeshwear/company',
//                 'men footwear': '/shreeganeshwear/company',
//                 'milap cosmetics': '/milapcosmetics/company',
//                 amodacandles: '/amodalcandle/company',
//                 candle: '/amodalcandle/company',
//                 'pink root': '/pinkroot/company',
//                 'kanacreations': '/kanacomp/company',
//                 'positive angle': '/positiveangle/company',
//                 'amma enterprises': 'ammaenterprises/company',
//                 furniture: 'ammaenterprises/company',
//                 'slipover pvt. ltd': '/Slipoverpvtltd/company',
//                 'shoe art india': '/Shoeartindia/company',
//                 'footwear': '/Shoeartindia/company',
//                 'colors queen': '/ColorsQueen/company',
//                 'ashima footwear': '/ashimafootwear/company',
//                 'ladies footwear': '/ashimafootwear/company',
//                 'ru innovation': '/ruiinovation/company',
//                 'tribalika lifestyle': '/triblelifestyle/company',
//                 'sbj international': '/sbjinternational/company',
//                 'hari trading company': '/haritrading/company',
//                 'cosmetic': '/sbjinternational/company',
//                 'bajrang stone & art': 'bajrangstoneart/company',
//                 statue: 'bajrangstoneart/company',
//                 'florish profesional pvt. ltd.': '/florishprofessional/company',
//                 'macro footewear': '/macronfootwear/company',
//                 'natural aroma': '/naturalaroma/company',
//                 'r.b tapes private limited': '/rbtprivate/company',
//                 'virani radiant': '/viraniradi/company',
//                 'mh handicraft': '/mhhandicraft/company',
//                 'dharma goods exports pvt ltd': 'dharmagoodsexports/company',
//                 'walavalkar masale': '/walavalkarmasale/company',
//                 'noxbeat': '/noxbeat/company',
//                 'car stereo': '/noxbeat/company',
//                 'inanul enterprises': '/inaulenterprises/company',
//                 'varsha fabrication': '/varshafabrication/company',
//                 'plaza Chemical': '/plazachemical/company',
//                 chemical: '/plazachemical/company',
//                 'jb overseas': '/jboverseas/company',
//                 tshirt: '/jboverseas/company',
//                 'r j old taylor': '/rjoldiron/company',
//                 'perfect mechanical & fabrication work': '/perfectmech/company',
//                 'marcos recycling pvt ltd': '/marcorecycling/company',
//                 'heera collections': '/heeracollaction/company',
//                 'narmada shivling stone': '/narmadashiv/company',
//                 'stone': '/narmadashiv/company',
//                 'newjen fabrics': '/newjenfabric/company',
//                 'ms basu textile': '/msbasutextile/company',
//                 'pharma city': '/pharmacity/company',
//                 'm.a & Sons company': '/mandsons/company',
//                 'eagle exports': '/eagleexports/company',
//                 'winner nippon': '/winnernippons/company',
//                 'tadikonda exports': '/tadikondol/company',
//                 'joya international': '/joyinternational/company',
//                 'glamstone ceramic': 'glamatone/company',
//                 'protective leather ': '/protecttiveleather/company',
//                 gloves: '/protecttiveleather/company',
//                 'az flower': '/azflowers/company',
//                 'ib safety products': '/ibsafety/company',
//                 'jhankar bangles': '/janakbangles/company',
//                 bangles: '/janakbangles/company',
//                 'slotan solutions': '/slothan/company',
//                 grains: '/slothan/company',
//                 'masuman enviro': '/masumenviro/company',
//                 'steel tank': '/masumenviro/company',
//                 'mr trading': '/mrtrading/company',
//                 'Road Safety': '/mrtrading/company',
//                 'patni pumps llp': 'patnipumps/company',
//                 'water pump': 'patnipumps/company',
//                 'ascent water purification system': '/ascentwater/company',
//                 'ascent water': '/ascentwater/company',
//                 ro: '/ascentwater/company',
//                 'shrihaan agro': '/shrihaanagroeximxomp/company',
//                 'agriculture': '/shrihaanagroeximxomp/company',
//                 'agro': '/shrihaanagroeximxomp/company',
//                 'bharat process equipment': '/bharatprocess/company',
//                 'seed': '/bharatprocess/company',
//                 'calcutta trading centre': '/calcuttatrading/company',
//                 'alpha piping system pvt.ltd': '/alphapiping/company',
//                 'fitting': '/alphapiping/company',
//                 'srinivasa agencies': '/srinivas/company',
//                 bag: '/srinivas/company',
//                 'ozone studio': '/ozonestudio/company',
//                 tile: '/ozonestudio/company',
//                 'gopi metalic': '/gopimetali/company',
//                 'jai shree ram rubber': '/jaishreeramrubber/company',
//                 'rubber': '/jaishreeramrubber/company',
//                 'gym': '/jaishreeramrubber/company',
//                 food: '/sudhanshu/company',
//                 'new india global': '/newindiaglobal/company',
//                 'shameem mart gallery': '/SHameeMart/company',
//                 'gallery': '/SHameeMart/company',
//                 "manufacture trophy corporate gifts": '/giftscompany/company',
//                 gifts: '/giftscompany/company',
//                 'guru alankar': '/gurualankarengineering/company',
//                 'sewing': '/gurualankarengineering/company',
//                 'karthikeya water': '/kartikay/company',
//                 'gems': '/quardgems/company',
//                 'marble': '/quardgems/company',
//                 'agmeco faucets pvt ltd': '/agmecofaucet/company',
//                 'bathroom accessories': '/agmecofaucet/company',
//                 'patra fashion': '/patrafasion/company',
//                 'prajwal polyplast': '/prajwal/company',
//                 'tape': '/prajwal/company',
//                 'y s enterprises': '/ysenterprises/company',
//                 light: '/ysenterprises/company',
//                 'mohanjali herbal trading private limited': '/mohanjalherbal/company',
//                 'manure': '/mohanjalherbal/company',
//                 'neo polyplast': '/neopoly/company',
//                 'rajyog paints pvt ltd': '/rajpaint/company',
//                 paint: '/rajpaint/company',
//                 pump: '/maxifli/company',
//                 maxiflo: '/maxifli/company',
//                 'vardhman enterprises': '/vardhmna/company',
//                 'masterbatches': '/vardhmna/company',
//                 'saraswati enterprises': '/saraswatienterprises/company',
//                 'electric panel': '/saraswatienterprises/company',
//                 'sv power system': '/svpowersys/company',
//                 'kk enterprises': '/kkenterprises/company',
//                 'bapasitaram polymer': '/bapsitaracomp/company',
//                 'liv technology': '/livtechnology/company',
//                 'control panel': '/livtechnology/company',

//             }
//         };

//         let path = `/${selectedOption}`;
//         let matched = false;

//         // Check if the query matches any keyword for specific paths
//         const keywordToPath = keywordToPathMapping[selectedOption] || {};
//         for (const [keyword, keywordPath] of Object.entries(keywordToPath)) {
//             if (query.includes(keyword)) {
//                 path = keywordPath;
//                 matched = true;
//                 break;
//             }
//         }

//         if (!matched) {
//             path = '/register-buyer';
//         }

//         navigate(`${path}?search=${searchQuery}`);
//     };

//     return (
//         <header className="App-header">
//             <nav className={`${styles.navbar}`}>
//                 <Link to="/" className={`${styles.logo}`} onClick={removeActive}>
//                     {/* <img width={270} height={130} src="./assets/logo10.png" alt="b2bmart" /> */}
//                     <img width={300} height={70} src="./assets/Globalb2bmart.png" alt="b2bmart" />
//                 </Link>
//                 <div style={{ listStyle: 'none' }} className={`${styles.mainDash}`}>
//                     <form onSubmit={handleFormSubmit} className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
//                         <div className="select-option">
//                             <li>
//                                 <select className={`${styles.selection}`} value={selectedOption} onChange={handleSelectChange}>
//                                     <option value="products">Products</option>
//                                     <option value="buyer">Buyer</option>
//                                     <option value="company">Company</option>
//                                 </select>
//                             </li>
//                         </div>
//                         <li>
//                             <div style={{ display: 'flex', flexDirection: 'row' }}>

//                                 <div className={styles.inputContainer}>
//                                     <input
//                                         className={styles.mainInput}
//                                         type="text"
//                                         placeholder='Search Here...'
//                                         value={searchQuery}
//                                         onChange={handleInputChange}
//                                     />
//                                     {/* <div className={styles.searchIcon}> */}

//                                     {/* </div> */}
//                                 </div>
//                                 {/* <FontAwesomeIcon
//                                     onClick={handleFormSubmit}
//                                     style={{ cursor: 'pointer', background: 'white', padding: '5px 10px' }}
//                                     icon={faMagnifyingGlass}
//                                     className={`${styles.searchIcon}`}
//                                 /> */}
//                                 {/* <button style={{ cursor: 'pointer', background: 'white', border: 'none', borderBottomRightRadius: '5px', borderTopRightRadius: '5px', paddingRight: '5px' }} onClick={handleFormSubmit} >search </button> */}
//                                 {/* <FontAwesomeIcon className='magnifing-glass' icon={faMagnifyingGlass} /> */}
//                                 <FontAwesomeIcon
//                                     className="magnifing-glass"
//                                     onClick={handleFormSubmit}
//                                     icon={faMagnifyingGlass}
//                                     style={{
//                                         marginTop: "0px",
//                                         size: "31px",
//                                         width: "24px",
//                                         // height: "24px",
//                                         height: "20px",
//                                         cursor: "pointer",
//                                         background: "white",
//                                         padding: "13px",
//                                         borderTopRightRadius: '5px',
//                                         borderBottomRightRadius: '5px',
//                                         border: '2px solid black',
//                                         // backgroundColor: '#e4d7d7'
//                                         backgroundColor: '#ffd07a'
//                                     }}
//                                 />

//                             </div>
//                         </li>
//                         <li>
//                             <div className={styles.yourRequirement}>
//                                 <Link to={'/register-buyer'}> <h2>Tell Us Your Requirement</h2></Link>
//                                 {/* <a href="/register-buyer"><h2>Tell Us Your Requirement</h2></a> */}
//                             </div>
//                         </li>
//                         <div className={styles.userDropdown}>
//                             <li>
//                                 <div className={styles.signIn}>
//                                     <FontAwesomeIcon style={{ fontSize: '30px', cursor: 'pointer ' }} icon={faUser} />
//                                     <span style={{ marginLeft: '10px', cursor: 'pointer' }}>Sign In</span>
//                                 </div>
//                                 <div className={styles.dropdownContent}>
//                                     <Link to="/login">Login</Link>
//                                     <Link to="/register-buyer">Buyer Requirements</Link>
//                                     <Link to="/register-Company">Register As Company</Link>
//                                     <Link style={{ display: 'none' }} to="/dashboard">Dashboard</Link>
//                                 </div>
//                             </li>
//                         </div>
//                     </form>
//                 </div>
//                 <div
//                     className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
//                     onClick={toggleActiveClass}
//                 >
//                     <span className={`${styles.bar}`}></span>
//                     <span className={`${styles.bar}`}></span>
//                     <span className={`${styles.bar}`}></span>
//                 </div>
//             </nav>
//         </header >
//     );
// }

// export default Header;
// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const [isActive, setIsActive] = useState(true);
//   const [selectedOption, setSelectedOption] = useState("products");
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   const removeActive = () => {
//     setIsActive(false);
//   };

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const query = searchQuery.toLowerCase();

//     // Get the current path
//     const currentPath = window.location.pathname;

//     // Define paths that should not redirect
//     const nonRedirectPaths = [
//       "/usa",
//       "/dubai",
//       "/australia",
//       "/germany",
//       "/china",
//       "/uk",
//       "/canada",
//       "/saudiarabia",
//       "/oman",
//     ];

//     // Determine if the current path is in the non-redirect paths
//     const isNonRedirectPath = nonRedirectPaths.includes(currentPath);

//     const keywordToPathMapping = {
//       products: {
//         acid: "chemicals",
//         agriculture: "agriculture",

//       },
//       buyer: {
//         furniture: "furniture-buyer",
//         pump: "pump-buyer",
//         paint: "paints-buyer",

//       },
//       company: {
//         // tech: 'chemicals',
//         "sagar trading company": "sagartrading-comp",

//       },
//     };

//     let path = `/${selectedOption}`;
//     let matched = false;

//     // Check if the query matches any keyword for specific paths
//     const keywordToPath = keywordToPathMapping[selectedOption] || {};
//     for (const [keyword, keywordPath] of Object.entries(keywordToPath)) {
//       if (query.includes(keyword)) {
//         path = keywordPath;
//         matched = true;
//         break;
//       }
//     }

//     if (!matched) {
//       path = "/register-buyer";
//     }

//     // If the current path is in non-redirect paths, do not navigate
//     if (!isNonRedirectPath) {
//       navigate(`${path}?search=${searchQuery}`);
//     }
//   };

//   return (
//     <header className="App-header">
//       <nav className={`${styles.navbar}`}>
// <Link to="/" className={`${styles.logo}`} onClick={removeActive}>
//   <img
//     width={300}
//     height={70}
//     src="./assets/Globalb2bmart.png"
//     alt="b2bmart"
//   />
// </Link>
//         <div style={{ listStyle: "none" }} className={`${styles.mainDash}`}>
//           <form
//             onSubmit={handleFormSubmit}
//             className={`${styles.navMenu} ${isActive ? styles.active : ""}`}
//           >
//             <div className="select-option">
//               <li>
//                 <select
//                   className={`${styles.selection}`}
//                   value={selectedOption}
//                   onChange={handleSelectChange}
//                 >
//                   <option value="products">Products</option>
//                   <option value="buyer">Buyer</option>
//                   <option value="company">Company</option>
//                 </select>
//               </li>
//             </div>
//             <li>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <div className={styles.inputContainer}>
//                   <input
//                     className={styles.mainInput}
//                     type="text"
//                     placeholder="Search Here..."
//                     value={searchQuery}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <FontAwesomeIcon
//                   className="magnifing-glass"
//                   onClick={handleFormSubmit}
//                   icon={faMagnifyingGlass}
//                   style={{
//                     marginTop: "0px",
//                     size: "31px",
//                     width: "24px",
//                     height: "20px",
//                     cursor: "pointer",
//                     background: "white",
//                     padding: "13px",
//                     borderTopRightRadius: "5px",
//                     borderBottomRightRadius: "5px",
//                     border: "2px solid black",
//                     backgroundColor: "#ffd07a",
//                   }}
//                 />
//               </div>
//             </li>
//             <li>
//               <div className={styles.yourRequirement}>
//                 <Link to={"/globalb2b-prices"}>
//                   {" "}
//                   <h2>Your Business Plan</h2>
//                 </Link>
//               </div>
//             </li>
//             <div className={styles.userDropdown}>
//               <li>
//                 <div className={styles.signIn}>
//                   <FontAwesomeIcon
//                     style={{ fontSize: "30px", cursor: "pointer " }}
//                     icon={faUser}
//                   />
//                   <span style={{ marginLeft: "10px", cursor: "pointer" }}>
//                     Sign In
//                   </span>
//                 </div>
//                 <div className={styles.dropdownContent}>
//                   <Link to="/login">Login</Link>
//                   <Link to="/register-buyer">Buyer Requirements</Link>
//                   <Link to="/register-Company">Register As Company</Link>
//                   <Link style={{ display: "none" }} to="/dashboard">
//                     Dashboard
//                   </Link>
//                 </div>
//               </li>
//             </div>
//           </form>
//         </div>
//         <div
//           className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
//           onClick={toggleActiveClass}
//         >
//           <span className={`${styles.bar}`}></span>
//           <span className={`${styles.bar}`}></span>
//           <span className={`${styles.bar}`}></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// Header

// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { Link, useNavigate } from "react-router-dom";

// function Header() {
//   const [selectedOption, setSelectedOption] = useState("products");
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const query = searchQuery.toLowerCase();

//     const nonRedirectPaths = [
//       "/usa",
//       "/dubai",
//       "/australia",
//       "/germany",
//       "/china",
//       "/uk",
//       "/canada",
//       "/saudiarabia",
//       "/oman",
//     ];

//     const isNonRedirectPath = nonRedirectPaths.includes(
//       window.location.pathname
//     );

//     const keywordToPathMapping = {
//       products: {
//         acid: "/chemicals",
//         agriculture: "/agriculture",
//         ghee: "/foodsProdcts",
//         fruits: "/apple-seller",
//         vegetables: "/vegetable-supplier",
//         mushroom: "/mushroom-supplier",
//         ghee: "foodsProdcts",

//         vegetables: "vegetable-supplier",

//         mushroom: "/mushroom-supplier",

//         // fruits: 'agriculture',

//         // fruit: 'agriculture',

//         grain: "pulses",

//         pea: "pulses",

//         bean: "pulses",

//         lentil: "pulses",

//         onion: "onion-seeds-dehydrated-onions-white",

//         skirts: "fashion/apprarels",

//         // "t-shirt": "tshirt-seller",

//         tshirt: "tshirt-seller",

//         shirt: "fashion/apprarels",

//         undergarment: "undergarment-seller",

//         plastic: "plastic",

//         // furniture: 'plastic',

//         barrel: "plastic",

//         frp: "plastic",

//         "mobile accessories": "mobile/accessories",

//         "mobile cover": "mobile/accessories",

//         mobile: "mobile/accessories",

//         cases: "mobile/accessories",

//         charger: "mobile/accessories",

//         "mobile charger": "mobile/accessories",

//         "mobile phone": "mobile/accessories",

//         "screen guard": "mobile/accessories",

//         "screen guards": "mobile/accessories",

//         "mobile headsets": "mobile/accessories",

//         headsets: "mobile/accessories",

//         steel: "utensils-seller",

//         "steel utensils": "utensils-seller",

//         utensils: "utensils-seller",

//         cooker: "steel/utensils",

//         plate: "plate-seller",

//         kitchen: "steel/utensils",

//         kitchenware: "steel/utensils",

//         Cutlery: "steel/utensils",

//         "iron utensil": "utensils-seller",

//         "seat covers": "seat/covers",

//         "bike cover": "seat/covers",
//       },
//       buyer: {
//         furniture: "furniture-buyer",
//         pump: "pump-buyer",
//         paint: "paints-buyer",
//       },
//       company: {
//         "sagar trading company": "sagartrading-comp",
//       },
//     };

//     let path = `/${selectedOption}`;
//     let matched = false;

//     const keywordToPath = keywordToPathMapping[selectedOption] || {};
//     for (const [keyword, keywordPath] of Object.entries(keywordToPath)) {
//       if (query.includes(keyword)) {
//         path = keywordPath;
//         matched = true;
//         break;
//       }
//     }

//     if (!matched) {
//       path = "/register-buyer";
//     }

//     if (!isNonRedirectPath) {
//       navigate(`${path}?search=${searchQuery}`);
//     }
//   };

//   return (
//     <header className={styles.header}>
//       <nav className={styles.navbar}>
//         {/* Logo */}
//         {/* <div className={styles.logo}>B2B</div> */}
//         <Link to="/" className={`${styles.logo}`}>
//           <img
//             width={300}
//             height={70}
//             src="./assets/Globalb2bmart.png"
//             alt="b2bmart"
//           />
//         </Link>
//         {/* Search Bar */}
//         <form onSubmit={handleFormSubmit} className={styles.searchForm}>
//           <select
//             className={styles.selection}
//             value={selectedOption}
//             onChange={handleSelectChange}
//           >
//             <option value="products">Products</option>
//             <option value="buyer">Buyer</option>
//             <option value="company">Company</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search your product or requirement..."
//             value={searchQuery}
//             onChange={handleInputChange}
//             className={styles.searchInput}
//           />
//           <button type="submit" className={styles.searchBtn}>
//             🔍
//           </button>
//         </form>

//         {/* Right Links */}
//         <div className={styles.navLinks}>
//           <Link to="/login">Log in</Link>
//           <Link to="/register-buyer">Buyers</Link>
//           <Link to="/register-Company">Company Registration</Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className={styles.hero}>
//         <h1>
//           Connect. Trade.
//           <br />
//           Grow Globally.
//         </h1>
//         <div className={styles.buttonGroup}>
//           <Link to="/globalb2b-prices" className={styles.btnPrimary}>
//             Analyze your Business Growth
//           </Link>

//           <Link to="/register-buyer" className={styles.btnOrange}>
//             Post Your Requirement
//           </Link>

//           <Link to="/register-company" className={styles.btnGold}>
//             Register as company
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

//  Here is new Code

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import styles from "./Navbar.module.css";

function Header() {
  const [selectedOption, setSelectedOption] = useState("products");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => setSelectedOption(event.target.value);
  const handleInputChange = (event) => setSearchQuery(event.target.value);

  // Search Submit Handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const query = searchQuery.toLowerCase();
    const nonRedirectPaths = ["/usa", "/dubai", "/australia", "/germany", "/china", "/uk", "/canada", "/saudiarabia", "/oman"];
    const isNonRedirectPath = nonRedirectPaths.includes(window.location.pathname);
    
    // Using a simplified mapping but maintaining original logic
    const keywordToPathMapping = {
      products: { acid: "/chemicals", agriculture: "/agriculture", fruits: "/apple-seller" },
      buyer: { furniture: "furniture-buyer" },
      company: { "sagar trading company": "sagartrading-comp" }
    };
    
    let path = `/${selectedOption}`;
    let matched = false;
    const keywordToPath = keywordToPathMapping[selectedOption] || {};
    for (const [keyword, keywordPath] of Object.entries(keywordToPath)) {
      if (query.includes(keyword)) { path = keywordPath; matched = true; break; }
    }
    if (!matched) path = "/register-buyer";
    if (!isNonRedirectPath) navigate(`${path}?search=${searchQuery}`);
  };

  const videoOverlayRef = useRef(null);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    gsap.to(videoOverlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        setIsVideoFinished(true);
      },
    });
  };

  const skipVideo = () => {
    gsap.to(videoOverlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        setIsVideoFinished(true);
      },
    });
  };

  return (
    <header className={styles.header}>
      {/* Video Overlay - conditionally rendered */}
      {!isVideoFinished && (
        <div ref={videoOverlayRef} className={styles.videoOverlay}>
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            playsInline
          >
            <source src="/assets/banner_video.mp4" type="video/mp4" />
          </video>
          <button className={styles.skipVideoBtn} onClick={skipVideo}>
            Skip Intro
          </button>
        </div>
      )}

      {/* Main Content - Always Visible */}
      <div className={styles.contentWrapper}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            <img width={300} height={70} src="/assets/Globalb2bmart.png" alt="b2bmart" />
          </Link>

          <form onSubmit={handleFormSubmit} className={styles.searchForm}>
            <select className={styles.selection} value={selectedOption} onChange={handleSelectChange}>
              <option value="products">Products</option>
              <option value="buyer">Buyer</option>
              <option value="company">Company</option>
            </select>
            <input
              type="text"
              placeholder="Search your product or requirement..."
              value={searchQuery}
              onChange={handleInputChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchBtn}>🔍</button>
          </form>

          <div className={styles.navLinks}>
            <Link to="/login">Log in</Link>
            <Link to="/register-buyer">Buyers</Link>
            <Link to="/register-Company">Register Company</Link>
          </div>
        </nav>

        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>
              <span style={{ color: "orange", fontSize: "3.2rem", WebkitTextStroke: "1.5px black", fontWeight: "bold", display: "inline-block" }}>
                Connect Smarter, Trade
              </span>
              <span style={{ color: "white", WebkitTextStroke: "1.5px black", fontSize: "3.2rem", fontWeight: "bold", display: "inline-block", marginLeft: "8px" }}>
                Faster, Grow Bigger.
              </span>
            </h1>
            <div className={styles.buttonGroup}>
              <Link to="/globalb2b-prices" className={styles.btnPrimary}>Analyze Growth</Link>
              <Link to="/register-buyer" className={styles.btnOrange}>Post Your Requirement</Link>
              <Link to="/register-company" className={styles.btnGold}>Register as Company</Link>
            </div>
          </div>

          <div className={styles.featuredSection}>
            <h2>What are you looking for?</h2>
            <div className={styles.featuredGrid}>
              <Link to="/agriculture-farm-tools-suppliers">
                <div className={styles.featureCard}>
                   <img src="/assets/fruits-and-vegetables1.jpg" alt="Agriculture" />
                   <p>Agriculture & Food</p>
                </div>
              </Link>
              <Link to="/best-furnitures-supplier-in-india">
                <div className={styles.featureCard}>
                  <img src="/assets/fu1.jpeg" alt="Furniture" />
                  <p>Furnitures</p>
                </div>
              </Link>
              <Link to="/clothing-apparel-suppliers">
                <div className={styles.featureCard}>
                  <img src="/assets/textile-ai.jpg" alt="Textiles" />
                  <p>Textiles & Apparel</p>
                </div>
              </Link>
              <Link to="/gifts-items">
                <div className={styles.featureCard}>
                  <img src="/assets/gift-new1.jpg" alt="Gifts" />
                  <p>Gifts</p>
                </div>
              </Link>
              <div className={styles.ExploreMoreCard}>
                <Link to="/homeSupplies" className={styles.exploreLink}>Explore More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className={styles.trustedSection}>
          <p>Trusted by Global Businesses</p>
          <div className={styles.brandLogos}>
            <img src="/assets/brand1.png" alt="Brand" />
            <img src="/assets/brand2.png" alt="Brand" />
            <img src="/assets/brand3.png" alt="Brand" />
            <img src="/assets/brand4.png" alt="Brand" />
            <img src="/assets/brand5.png" alt="Brand" />
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;

