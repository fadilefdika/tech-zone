const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const placeBid = async (req, res) => {
  const { auctionId } = req.params;
  const { userId, bidAmount } = req.body;

  try {
    const auction = await prisma.auction.findUnique({
      where: { id: parseInt(auctionId, 10) },
    });

    if (!auction) {
      return res.status(404).json({ error: 'Auction not found' });
    }

    if (bidAmount <= auction.currentBid) {
      return res.status(400).json({ error: 'Bid must be higher than the current bid' });
    }

    const newBid = await prisma.bid.create({
      data: {
        auctionId: auction.id,
        userId: userId,
        amount: bidAmount,
      },
    });

    await prisma.auction.update({
      where: { id: auction.id },
      data: { currentBid: bidAmount },
    });

    res.status(201).json({ message: 'Bid placed successfully', newBid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHighestBid = async (req, res) => {
  const { auctionId } = req.params;

  try {
    const highestBid = await prisma.bid.findFirst({
      where: { auctionId: parseInt(auctionId, 10) },
      orderBy: { amount: 'desc' },
    });

    if (!highestBid) {
      return res.status(404).json({ error: 'No bids found for this auction' });
    }

    res.json(highestBid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBidHistory = async (req, res) => {
  const { auctionId } = req.params;

  try {
    const bidHistory = await prisma.bid.findMany({
      where: { auctionId: parseInt(auctionId, 10) },
      orderBy: { amount: 'desc' },
    });

    if (!bidHistory.length) {
      return res.status(404).json({ error: 'No bid history found for this auction' });
    }

    res.json(bidHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { placeBid, getHighestBid, getBidHistory };
