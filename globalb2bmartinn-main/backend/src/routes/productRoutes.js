// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const ProductController = require('../controllers/productController');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploadsprducts/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true); // Accept the file
//     } else {
//         cb(new Error('File is not an image'), false); // Reject the file
//     }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// // Route to add a new product
// router.post('/products/add/:userId', upload.array('images', 200), ProductController.addProduct);

// // Route to update an existing product
// router.put('/products/update/:userId/:productId', upload.array('images', 200), ProductController.updateProduct);

// // Route to get products for a user
// router.get('/products/:userId', ProductController.getProductsByUserId);


// module.exports = router;




const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ProductController = require('../controllers/productController');
const CatalogController = require('../controllers/catalogController');

// Ensure upload folder exists
const uploadDir = path.join(__dirname, '../../uploadsprducts');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('File type not supported'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Route to add a new product
router.post('/products/add/:userId', upload.array('images', 200), ProductController.addProduct);

// Route to update an existing product
router.put('/products/update/:userId/:productId', upload.array('images', 200), ProductController.updateProduct);

// Catalog Routes
router.post('/catalog/add/:userId', upload.array('files', 10), CatalogController.addCatalog);
router.get('/catalog/:userId', CatalogController.getCatalogsByUserId);
router.delete('/catalog/delete/:catalogId', CatalogController.deleteCatalog);

// Route to get products for a user
router.get('/products/:userId', ProductController.getProductsByUserId);

router.get('/products/images/:userId/:imageName', ProductController.getProductImage);

router.get('/all-products', ProductController.getAllProducts);
router.get('/search', ProductController.searchProducts);
router.delete('/delete-product/:userId/:productId', ProductController.deleteProduct);
router.put('/products/publish/:userId/:productId', ProductController.publishProduct);
router.get('/products/category/:category', ProductController.getProductsByCategory);

module.exports = router;
