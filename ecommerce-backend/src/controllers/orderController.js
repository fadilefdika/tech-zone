const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrder = async (req, res) => {
  const { userId, items } = req.body; // `items` adalah array yang berisi informasi produk yang dipesan

  try {
    // Hitung total amount dari semua order items
    const totalAmount = items.reduce((total, item) => total + item.quantity * item.price, 0);

    // Buat pesanan baru
    const newOrder = await prisma.order.create({
      data: {
        userId: userId,
        totalAmount: totalAmount,
        orderItems: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await prisma.order.findUnique({
      where: { id: parseInt(orderId, 10) },
      include: {
        orderItems: true, // Mengambil informasi item pesanan
        user: true, // Mengambil informasi user
      },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const validStatuses = ['PENDING', 'PAID', 'SHIPPED', 'COMPLETED', 'CANCELLED'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(orderId, 10) },
      data: { status },
    });

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await prisma.order.findMany({
      where: { userId: parseInt(userId, 10) },
      include: {
        orderItems: true,
      },
    });

    if (!orders.length) {
      return res.status(404).json({ error: 'No orders found for this user' });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
