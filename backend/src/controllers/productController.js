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
    const { title, description } = req.body;

    let images = [];
    if (req.files) {
        images = req.files.map(file => `/uploadsprducts/${file.filename}`);
    }

    try {
        const product = await Product.findOne({ userId });

        if (!product) {
            const newProduct = new Product({
                userId,
                products: [{ title, description, images }]
            });
            await newProduct.save();
            return res.json(newProduct);
        }

        product.products.push({ title, description, images });
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { userId, productId } = req.params;
    const { title, description } = req.body;

    let images = [];
    if (req.files) {
        images = req.files.map(file => `/uploadsprducts/${file.filename}`);
    }

    try {
        // Find the user's product entry
        const product = await Product.findOne({ userId });

        if (!product) {
            return res.status(404).json({ message: 'Product entry not found for the user' });
        }

        // Find the product to update
        const productToUpdate = product.products.id(productId);

        if (!productToUpdate) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product details
        productToUpdate.title = title;
        productToUpdate.description = description;
        productToUpdate.images = images;

        await product.save();
        res.json(product);
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
        }).populate('userId', 'name companyName email mobileNumber cityname statename role');

        // Flatten the products array and filter matching products
        let results = [];
        products.forEach(productDoc => {
            productDoc.products.forEach(product => {
                if (
                    product.title.some(title => new RegExp(query, 'i').test(title)) ||
                    product.description.some(desc => new RegExp(query, 'i').test(desc))
                ) {
                    results.push({
                        ...product.toObject(),
                        seller: productDoc.userId
                    });
                }
            });
        });

        res.json(results);
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
        const imagePath = path.join(__dirname, '..', productImage);
        // Send the image file
        res.sendFile(imagePath);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};