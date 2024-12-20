const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const profile = await prisma.profile.findUnique({ where: { userId: parseInt(userId) } });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfile = async (req, res) => {
  const { userId, address, phone } = req.body;
  try {
    const newProfile = await prisma.profile.create({
      data: { userId: parseInt(userId), address, phone },
    });
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { address, phone } = req.body;
  try {
    const updatedProfile = await prisma.profile.update({
      where: { userId: parseInt(userId) },
      data: { address, phone },
    });
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    await prisma.profile.delete({
      where: { userId: parseInt(userId, 10) },
    });
    res.status(204).end();
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Profile not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { getProfile, updateProfile, deleteProfile, createProfile };
