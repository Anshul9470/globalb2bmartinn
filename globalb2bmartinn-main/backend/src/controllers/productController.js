// // productController.js
// const Product = require('../models/product'); // Adjust the path to your Product model

// exports.addProduct = async (req, res) => {
//     const { userId } = req.params;
//     const { title, description } = req.body;
//     const images = req.files.map(file => `/uploadsprducts/${file.filename}`); // Update this line

//     try {
//         const product = await Product.findOne({ userId });

//         if (!product) {
//             const newProduct = new Product({
//                 userId,
//                 products: [{ title, description, images }]
//             });
//             await newProduct.save();
//             return res.json(newProduct);
//         }

//         product.products.push({ title, description, images });
//         await product.save();
//         res.json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// exports.updateProduct = async (req, res) => {
//     const { userId, productId } = req.params;
//     const { title, description } = req.body;
//     const images = req.files.map(file => file.path);

//     try {
//         // Find the user's product entry
//         const product = await Product.findOne({ userId });

//         if (!product) {
//             return res.status(404).json({ message: 'Product entry not found for the user' });
//         }

//         // Find the product to update
//         const productToUpdate = product.products.id(productId);

//         if (!productToUpdate) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Update the product details
//         productToUpdate.title = title;
//         productToUpdate.description = description;
//         productToUpdate.images = images;

//         await product.save();
//         res.json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// exports.getProductsByUserId = async (req, res) => {
//     const { userId } = req.params;

//     try {
//         const products = await Product.findOne({ userId }).select('products');
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const Product = require('../models/product'); // Adjust the path to your Product model

exports.addProduct = async (req, res) => {
    const { userId } = req.params;
    
    // Ensure req.body.images doesn't interfere with req.files
    if (req.body.images) delete req.body.images;

    let { title, description, category, subCategory, country, state, city, experience, price, unit, moq, isPublished } = req.body;

    // Robust sanitization to ensure we always have strings and never nested arrays
    const ensureString = (val) => {
        if (Array.isArray(val)) {
            // If it's an array, take the first non-array element
            let first = val[0];
            while (Array.isArray(first)) first = first[0];
            return String(first || '');
        }
        if (typeof val === 'string') return val;
        return String(val || '');
    };

    title = ensureString(title);
    description = ensureString(description);
    category = ensureString(category);
    subCategory = ensureString(subCategory);
    country = ensureString(country);
    state = ensureString(state);
    city = ensureString(city);
    experience = ensureString(experience);
    price = ensureString(price);
    unit = ensureString(unit);
    moq = ensureString(moq);
    isPublished = isPublished === 'true' || isPublished === true;

    let images = [];
    if (req.files) {
        // Map and ensure each path is a plain string
        images = req.files.map(file => String(`/uploadsprducts/${file.filename}`));
    }

    try {
        const productDoc = await Product.findOne({ userId });

        const newProductEntry = { 
            title, 
            description, 
            images: Array.isArray(images) ? images.flat() : [images], // Flatten just in case
            category: category || 'General', 
            subCategory: subCategory || 'General', 
            country: country || 'India', 
            state: state || '', 
            city: city || '', 
            experience: experience || '',
            price: price || '',
            unit: unit || 'kg',
            moq: moq || '',
            stockStatus: req.body.stockStatus || 'In Stock',
            specifications: req.body.specifications ? (typeof req.body.specifications === 'string' ? JSON.parse(req.body.specifications) : req.body.specifications) : [],
            tieredPricing: req.body.tieredPricing ? (typeof req.body.tieredPricing === 'string' ? JSON.parse(req.body.tieredPricing) : req.body.tieredPricing) : [],
            keyFeatures: req.body.keyFeatures ? (typeof req.body.keyFeatures === 'string' ? JSON.parse(req.body.keyFeatures) : req.body.keyFeatures) : [],
            isPublished
        };

        if (!productDoc) {
            const newProduct = new Product({
                userId,
                products: [newProductEntry]
            });
            await newProduct.save();
            return res.json(newProduct);
        }

        // --- AGGRESSIVE REPAIR EXISTING DATA ---
        if (productDoc.products && productDoc.products.length > 0) {
            const deepFix = (val) => {
                if (Array.isArray(val)) {
                    let first = val[0];
                    while (Array.isArray(first)) first = first[0];
                    return String(first || '');
                }
                return String(val || '');
            };

            productDoc.products.forEach((p, idx) => {
                let changed = false;
                if (Array.isArray(p.title)) { p.title = deepFix(p.title); changed = true; }
                if (Array.isArray(p.description)) { p.description = deepFix(p.description); changed = true; }
                if (Array.isArray(p.category)) { p.category = deepFix(p.category); changed = true; }
                if (Array.isArray(p.subCategory)) { p.subCategory = deepFix(p.subCategory); changed = true; }
                
                // Fix images: ensure it's a flat array of strings
                if (Array.isArray(p.experience)) { p.experience = deepFix(p.experience); changed = true; }
                if (Array.isArray(p.price)) { p.price = deepFix(p.price); changed = true; }
                if (Array.isArray(p.moq)) { p.moq = deepFix(p.moq); changed = true; }
                
                // Fix images: ensure it's a flat array of strings
                if (Array.isArray(p.images)) {
                    const fixedImages = p.images.map(img => deepFix(img)).filter(img => img);
                    if (JSON.stringify(p.images) !== JSON.stringify(fixedImages)) {
                        p.images = fixedImages;
                        changed = true;
                    }
                }

                if (changed) {
                    productDoc.markModified(`products.${idx}`);
                }
            });
            productDoc.markModified('products');
        }

        // Add the new product to the array
        productDoc.products.push(newProductEntry);
        
        // Save and handle validation errors
        try {
            await productDoc.save();
            res.json(productDoc);
        } catch (saveError) {
            console.error("Standard Save Failed, attempting bypass:", saveError);
            try {
                // Last resort: Save without validation to clear the corruption
                await productDoc.save({ validateBeforeSave: false });
                res.json(productDoc);
            } catch (bypassError) {
                res.status(400).json({ 
                    message: "Critical: Could not repair database corruption.", 
                    error: bypassError.message 
                });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { userId, productId } = req.params;
    let { title, description, category, subCategory, country, state, city, experience, price, unit, moq, isPublished } = req.body;

    const ensureString = (val) => {
        if (Array.isArray(val)) {
            let first = val[0];
            while (Array.isArray(first)) first = first[0];
            return String(first || '');
        }
        if (typeof val === 'string') return val;
        return String(val || '');
    };

    let images = [];
    if (req.files) {
        images = req.files.map(file => String(`/uploadsprducts/${file.filename}`));
    }

    try {
        // Find the user's product entry
        const product = await Product.findOne({ userId });

        if (!product) {
            return res.status(404).json({ message: 'Product entry not found for the user' });
        }

        // --- AGGRESSIVE REPAIR EXISTING DATA ---
        if (product.products && product.products.length > 0) {
            const deepFix = (val) => {
                if (Array.isArray(val)) {
                    let first = val[0];
                    while (Array.isArray(first)) first = first[0];
                    return String(first || '');
                }
                return String(val || '');
            };

            product.products.forEach((p, idx) => {
                let changed = false;
                if (Array.isArray(p.title)) { p.title = deepFix(p.title); changed = true; }
                if (Array.isArray(p.description)) { p.description = deepFix(p.description); changed = true; }
                if (Array.isArray(p.category)) { p.category = deepFix(p.category); changed = true; }
                if (Array.isArray(p.subCategory)) { p.subCategory = deepFix(p.subCategory); changed = true; }
                if (Array.isArray(p.experience)) { p.experience = deepFix(p.experience); changed = true; }
                if (Array.isArray(p.price)) { p.price = deepFix(p.price); changed = true; }
                if (Array.isArray(p.moq)) { p.moq = deepFix(p.moq); changed = true; }
                if (Array.isArray(p.images)) {
                    const fixedImages = p.images.map(img => deepFix(img)).filter(img => img);
                    if (JSON.stringify(p.images) !== JSON.stringify(fixedImages)) {
                        p.images = fixedImages;
                        changed = true;
                    }
                }
                if (changed) product.markModified(`products.${idx}`);
            });
            product.markModified('products');
        }

        // Find the product to update
        const productToUpdate = product.products.id(productId);

        if (!productToUpdate) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product details
        if (title) productToUpdate.title = ensureString(title);
        if (description) productToUpdate.description = ensureString(description);
        if (category) productToUpdate.category = ensureString(category);
        if (subCategory) productToUpdate.subCategory = ensureString(subCategory);
        if (country) productToUpdate.country = ensureString(country);
        if (state) productToUpdate.state = ensureString(state);
        if (city) productToUpdate.city = ensureString(city);
        if (experience) productToUpdate.experience = experience;
        productToUpdate.price = price;
        productToUpdate.unit = unit;
        productToUpdate.moq = moq;
        productToUpdate.isPublished = isPublished;
        productToUpdate.stockStatus = req.body.stockStatus || productToUpdate.stockStatus;
        productToUpdate.specifications = req.body.specifications ? (typeof req.body.specifications === 'string' ? JSON.parse(req.body.specifications) : req.body.specifications) : productToUpdate.specifications;
        productToUpdate.tieredPricing = req.body.tieredPricing ? (typeof req.body.tieredPricing === 'string' ? JSON.parse(req.body.tieredPricing) : req.body.tieredPricing) : productToUpdate.tieredPricing;
        productToUpdate.keyFeatures = req.body.keyFeatures ? (typeof req.body.keyFeatures === 'string' ? JSON.parse(req.body.keyFeatures) : req.body.keyFeatures) : productToUpdate.keyFeatures;
        
        if (images.length > 0) {
            productToUpdate.images = images;
        }

        try {
            await product.save();
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const products = await Product.findOne({ userId }).select('products');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchProducts = async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        const products = await Product.find({
            $or: [
                { 'products.title': { $regex: query, $options: 'i' } },
                { 'products.description': { $regex: query, $options: 'i' } }
            ]
        }).populate('userId', 'name companyName email mobileNumber cityname statename role featuredProductIds isCatalogActive');

        // Flatten the products array and filter matching products
        let results = [];
        products.forEach(productDoc => {
            productDoc.products.filter(product => 
                (new RegExp(query, 'i').test(product.title) ||
                new RegExp(query, 'i').test(product.description)) &&
                product.isPublished === true
            ).forEach(product => {
                results.push({
                    ...product.toObject(),
                    seller: productDoc.userId
                });
            });
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const products = await Product.find({
            'products.category': { $regex: new RegExp(`^${category}$`, 'i') }
        }).populate('userId', 'name companyName email mobileNumber cityname statename role featuredProductIds isCatalogActive');

        let results = [];
        products.forEach(productDoc => {
            productDoc.products.filter(product => 
                new RegExp(`^${category}$`, 'i').test(product.category) &&
                product.isPublished === true
            ).forEach(product => {
                results.push({
                    ...product.toObject(),
                    seller: productDoc.userId
                });
            });
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const productDocs = await Product.find().populate('userId', 'name companyName email mobileNumber cityname statename featuredProductIds isCatalogActive');
        // Flatten the products
        let allProducts = [];
        productDocs.forEach(doc => {
            if (doc.products && doc.products.length > 0) {
                doc.products.forEach(p => {
                    allProducts.push({
                        ...p.toObject(),
                        userId: doc.userId?._id,
                        seller: doc.userId
                    });
                });
            }
        });
        res.json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getProductImage = async (req, res) => {
    try {
        const { userId, imageName } = req.params;
        // Fetch the product images based on userId
        const product = await Product.findOne({ userId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found for the user' });
        }

        // Check if the image exists in the product images
        const productImage = product.products.flatMap(productDetail => productDetail.images).find(image => image.includes(imageName));
        if (!productImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Construct the path to the image file
        const imagePath = path.join(__dirname, '../../', productImage);
        console.log(`Serving image for user ${userId}: ${imagePath}`);
        
        // Send the image file
        res.sendFile(imagePath);
    } catch (error) {
        console.error(`Error serving image: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const productDoc = await Product.findOne({ userId });

        if (!productDoc) {
            return res.status(404).json({ message: 'Product entry not found for the user' });
        }

        productDoc.products.pull(productId);
        await productDoc.save();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.publishProduct = async (req, res) => {
    const { userId, productId } = req.params;
    const { isPublished } = req.body;

    try {
        const productDoc = await Product.findOne({ userId });
        if (!productDoc) return res.status(404).json({ message: 'Product entry not found' });

        const product = productDoc.products.id(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        product.isPublished = isPublished;
        if (req.body.category) {
            product.category = String(req.body.category);
        }

        // --- AGGRESSIVE REPAIR EXISTING DATA ---
        if (productDoc.products && productDoc.products.length > 0) {
            const deepFix = (val) => {
                if (Array.isArray(val)) {
                    let first = val[0];
                    while (Array.isArray(first)) first = first[0];
                    return String(first || '');
                }
                return String(val || '');
            };

            productDoc.products.forEach((p, idx) => {
                let changed = false;
                if (Array.isArray(p.title)) { p.title = deepFix(p.title); changed = true; }
                if (Array.isArray(p.description)) { p.description = deepFix(p.description); changed = true; }
                if (Array.isArray(p.category)) { p.category = deepFix(p.category); changed = true; }
                if (Array.isArray(p.subCategory)) { p.subCategory = deepFix(p.subCategory); changed = true; }
                if (Array.isArray(p.experience)) { p.experience = deepFix(p.experience); changed = true; }
                if (Array.isArray(p.price)) { p.price = deepFix(p.price); changed = true; }
                if (Array.isArray(p.moq)) { p.moq = deepFix(p.moq); changed = true; }
                if (Array.isArray(p.images)) {
                    const fixedImages = p.images.map(img => deepFix(img)).filter(img => img);
                    if (JSON.stringify(p.images) !== JSON.stringify(fixedImages)) {
                        p.images = fixedImages;
                        changed = true;
                    }
                }
                if (changed) productDoc.markModified(`products.${idx}`);
            });
            productDoc.markModified('products');
        }

        try {
            await productDoc.save();
        } catch (err) {
            console.error("Publish Save Bypass:", err);
            await productDoc.save({ validateBeforeSave: false });
        }
        
        res.json({ message: `Product ${isPublished ? 'Published' : 'Unpublished'} successfully`, product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};