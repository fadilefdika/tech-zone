const express = require('express');
const { getProducts, getProductById, getProductByCategory, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const validate = require('../middleware/validate');
const { productSchema } = require('../validators/productValidators');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', validate(productSchema), createProduct);
router.put('/:id', validate(productSchema), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
