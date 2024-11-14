const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const placeBid = async (req, res) => {
  const { auctionId } = req.params; // Mendapatkan auctionId dari URL
  const { userId, bidAmount } = req.body; // Mendapatkan userId dan bidAmount dari body

  try {
    // Periksa apakah lelang ada
    const auction = await prisma.auction.findUnique({
      where: { id: parseInt(auctionId, 10) },
    });

    if (!auction) {
      return res.status(404).json({ error: 'Auction not found' });
    }

    // Pastikan bidAmount lebih besar dari currentBid
    if (bidAmount <= auction.currentBid) {
      return res.status(400).json({ error: 'Bid must be higher than the current bid' });
    }

    // Tempatkan penawaran baru
    const newBid = await prisma.bid.create({
      data: {
        auctionId: auction.id,
        userId: userId, // Pastikan userId valid dan sudah ada
        amount: bidAmount,
      },
    });

    // Update currentBid di tabel Auction
    await prisma.auction.update({
      where: { id: auction.id },
      data: { currentBid: bidAmount },
    });

    res.status(201).json({ message: 'Bid placed successfully', newBid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan penawaran tertinggi untuk lelang tertentu
const getHighestBid = async (req, res) => {
  const { auctionId } = req.params;

  try {
    // Cari penawaran tertinggi berdasarkan auctionId
    const highestBid = await prisma.bid.findFirst({
      where: { auctionId: parseInt(auctionId, 10) },
      orderBy: { amount: 'desc' }, // Mengurutkan berdasarkan penawaran tertinggi
    });

    if (!highestBid) {
      return res.status(404).json({ error: 'No bids found for this auction' });
    }

    res.json(highestBid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan riwayat penawaran untuk lelang tertentu
const getBidHistory = async (req, res) => {
  const { auctionId } = req.params;

  try {
    // Ambil semua penawaran untuk lelang tertentu
    const bidHistory = await prisma.bid.findMany({
      where: { auctionId: parseInt(auctionId, 10) },
      orderBy: { amount: 'desc' }, // Urutkan berdasarkan jumlah penawaran tertinggi
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
