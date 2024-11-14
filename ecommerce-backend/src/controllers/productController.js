const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, stock, categoryId, sellerId } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: { name, description, price, stock, categoryId, sellerId },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    if (error.code === 'P2003') {
      res.status(400).json({ error: 'Invalid categoryId or sellerId' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, categoryId, sellerId } = req.body;

  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, description, price, stock, categoryId, sellerId },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.product.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).end(); // Mengembalikan 204 No Content untuk penghapusan yang berhasil
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
