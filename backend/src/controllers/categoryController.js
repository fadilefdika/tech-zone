const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        products: true, // Include products for this category
      },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await prisma.category.create({
      data: { name },
    });
    res.status(201).json(newCategory);
  } catch (error) {
    if (error.code === 'P2002') {
      // Prisma error code for unique constraint violation
      res.status(400).json({ error: 'Category name must be unique' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id, 10) },
      data: { name },
    });
    res.json(updatedCategory);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Category name must be unique' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).end(); // No content response for successful deletion
  } catch (error) {
    if (error.code === 'P2025') {
      // Error code Prisma untuk item tidak ditemukan
      res.status(404).json({ error: 'Category not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
