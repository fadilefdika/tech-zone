const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAuction = async (req, res) => {
  try {
    const auctions = await prisma.auction.findMany();
    if (auctions.length === 0) {
      return res.status(404).json({ error: 'No auctions found' });
    }
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAuctionByProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const productAuction = await prisma.auction.findUnique({
      where: { productId: parseInt(productId, 10) },
    });
    if (!productAuction) {
      return res.status(404).json({ error: 'Auction for product not found' });
    }
    res.json(productAuction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const startAuction = async (req, res) => {
  const { productId } = req.params;
  const { startPrice, endDate } = req.body;

  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(productId, 10) },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (product.isAuction) {
      return res.status(400).json({ error: 'Product is already in auction' });
    }

    await prisma.product.update({
      where: { id: product.id },
      data: { isAuction: true },
    });

    const auction = await prisma.auction.create({
      data: {
        productId: product.id,
        startPrice,
        currentBid: startPrice,
        endDate,
      },
    });

    res.status(201).json({ message: 'Product is now in auction', auction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const endAuction = async (req, res) => {
  const { productId } = req.params;

  try {
    const auction = await prisma.auction.findUnique({
      where: { productId: parseInt(productId, 10) },
    });

    if (!auction) {
      return res.status(404).json({ error: 'Auction for this product not found' });
    }

    const currentTime = new Date();
    if (currentTime < new Date(auction.endDate)) {
      return res.status(400).json({ error: 'Auction is still ongoing' });
    }

    const winnerBid = await prisma.bid.findFirst({
      where: { auctionId: auction.id },
      orderBy: { amount: 'desc' },
    });

    await prisma.auction.update({
      where: { id: auction.id },
      data: { status: 'completed' },
    });

    await prisma.product.update({
      where: { id: auction.productId },
      data: { isAuction: false, ownerId: winnerBid ? winnerBid.userId : null },
    });

    res.status(200).json({
      message: 'Auction ended successfully',
      winner: winnerBid ? winnerBid.userId : 'No bids placed',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAuction = async (req, res) => {
  const { productId } = req.params;
  const { startPrice, endDate, currentBid } = req.body;

  try {
    const auction = await prisma.auction.findUnique({
      where: { productId: parseInt(productId, 10) },
    });

    if (!auction) {
      return res.status(404).json({ error: 'Auction for this product not found' });
    }

    const updatedAuction = await prisma.auction.update({
      where: { productId: parseInt(productId, 10) },
      data: {
        startPrice: startPrice !== undefined ? startPrice : auction.startPrice,
        currentBid: currentBid !== undefined ? currentBid : auction.currentBid,
        endDate: endDate !== undefined ? endDate : auction.endDate,
      },
    });

    res.json({ message: 'Auction updated successfully', updatedAuction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAuction = async (req, res) => {
  const { productId } = req.params;

  try {
    const auction = await prisma.auction.findUnique({
      where: { productId: parseInt(productId, 10) },
    });

    if (!auction) {
      return res.status(404).json({ error: 'Auction for this product not found' });
    }

    await prisma.auction.delete({
      where: { productId: parseInt(productId, 10) },
    });

    await prisma.product.update({
      where: { id: parseInt(productId, 10) },
      data: { isAuction: false },
    });

    res.status(200).json({ message: 'Auction deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAuction, getAuctionByProduct, startAuction, endAuction, updateAuction, deleteAuction };
