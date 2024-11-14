const express = require('express');
const { createOrder, getOrderById, updateOrderStatus, getOrdersByUser } = require('../controllers/orderController');
const router = express.Router();
const validate = require('../middleware/validate');
const { createOrderSchema } = require('../validators/orderValidators');

router.post('/', validate(createOrderSchema), createOrder);
router.get('/:orderId', getOrderById);
router.put('/:orderId/status', updateOrderStatus);
router.get('/user/:userId', getOrdersByUser);

module.exports = router;
