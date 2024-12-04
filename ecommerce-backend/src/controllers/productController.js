const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

const getProducts = async (req, res) => {
  try {
    // Ambil semua produk beserta informasi kategori
    const products = await prisma.product.findMany({
      include: {
        category: true, // Mengambil relasi category
      },
    });

    // Menyusun data untuk response, ambil nama kategori dari relasi
    const result = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      status: product.status,
      categoryId: product.category.name,
    }));

    res.json(result);
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
  const { name, description, price, stock, status, categoryId } = req.body;
  try {
    const category = await prisma.category.findUnique({ where: { id: parseInt(categoryId) } });

    if (!category) {
      return res.status(400).json({ error: 'Kategori tidak ditemukan' });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        status,
        categoryId,
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error:', error);
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Invalid categoryId' });
    } else {
      return res.status(500).json({ error: 'Terjadi kesalahan pada server', details: error.message });
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
