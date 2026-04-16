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
const ProductController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadsprducts/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('File is not an image'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Route to add a new product
router.post('/products/add/:userId', upload.array('images', 200), ProductController.addProduct);

// Route to update an existing product
router.put('/products/update/:userId/:productId', upload.array('images', 200), ProductController.updateProduct);

// Route to get products for a user
// Route to get products for a user
router.get('/products/:userId', ProductController.getProductsByUserId);

router.get('/products/images/:userId/:imageName', ProductController.getProductImage);

router.get('/search', ProductController.searchProducts);

module.exports = router;
