const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();
const fs = require('fs').promises; // Menggunakan fs.promises untuk async/await
const path = require('path');
const { uploadImageToSupabase } = require('../utils/supabaseUploader');

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
      categoryName: product.category.name,
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

    const category = await prisma.category.findUnique({ where: { id: product.categoryId } });
    product.categoryName = category.name;

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, stock, status, categoryName } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'Product image is required' });
  }

  // Validasi harga dan stok
  const parsedPrice = parseFloat(price);
  const parsedStock = parseInt(stock, 10);

  if (isNaN(parsedPrice) || parsedPrice <= 0) {
    return res.status(400).json({ error: 'Invalid price' });
  }

  if (isNaN(parsedStock) || parsedStock < 0) {
    return res.status(400).json({ error: 'Invalid stock' });
  }

  const filePath = path.join(__dirname, '../../uploads', req.file.filename);

  try {
    // Upload gambar ke Supabase
    const imageUrl = await uploadImageToSupabase(filePath, req.file.filename);

    // Hapus file lokal setelah diunggah
    await fs.unlink(filePath);

    // Cek kategori
    const category = await prisma.category.findUnique({ where: { name: categoryName } });
    if (!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    // Simpan produk
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: parsedPrice,
        stock: parsedStock,
        status,
        categoryId: category.id,
        imageUrl,
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Create Product Error:', error.message);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, status, categoryName } = req.body;

  try {
    const existingProduct = await prisma.product.findUnique({ where: { id: parseInt(id) } });

    if (!existingProduct) {
      return res.status(404).json({ error: 'Produk tidak ditemukan' });
    }

    const category = await prisma.category.findUnique({
      where: {
        name: categoryName,
      },
    });

    if (!category) {
      return res.status(400).json({ error: 'Kategori tidak ditemukan' });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        status,
        categoryId: category.id,
      },
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Terjadi kesalahan pada server', details: error.message });
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
