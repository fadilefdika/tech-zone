const express = require('express');
const { placeBid, getHighestBid, getBidHistory } = require('../controllers/bidController');
const validate = require('../middleware/validate');
const { bidSchema } = require('../validators/bidValidators');

const router = express.Router();

router.post('/:auctionId', validate(bidSchema), placeBid);
router.get('/highest/:auctionId', getHighestBid);
router.get('/history/:auctionId', getBidHistory);

module.exports = router;
