const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email, password, role },
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002' && error.meta.target.includes('email')) {
      res.status(400).json({ error: 'Email must be unique' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: { name, email, password, role },
    });
    res.json(updatedUser);
  } catch (error) {
    if (error.code === 'P2002' && error.meta.target.includes('email')) {
      res.status(400).json({ error: 'Email must be unique' });
    } else if (error.code === 'P2025') {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).end();
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, getUserById };
