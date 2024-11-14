const express = require('express');
const { getAuction, getAuctionByProduct, startAuction, endAuction, updateAuction, deleteAuction } = require('../controllers/auctionController');
const validate = require('../middleware/validate');
const { auctionSchema } = require('../validators/auctionValidators');

const router = express.Router();

router.get('/', getAuction);
router.get('/product/:productId', getAuctionByProduct);
router.post('/start/:productId', validate(auctionSchema), startAuction);
router.post('/end/:productId', endAuction);
router.put('/:productId', validate(auctionSchema), updateAuction);
router.delete('/:productId', deleteAuction);

module.exports = router;
