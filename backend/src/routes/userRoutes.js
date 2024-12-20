const express = require('express');
const { getUsers, createUser, updateUser, deleteUser, getUserById } = require('../controllers/userController');
const validate = require('../middleware/validate');
const { userSchema } = require('../validators/userValidators');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', validate(userSchema), createUser);
router.put('/:id', validate(userSchema), updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
