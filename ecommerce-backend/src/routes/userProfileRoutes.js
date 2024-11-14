const express = require('express');
const { getProfile, updateProfile, deleteProfile, createProfile } = require('../controllers/userProfileController');
const router = express.Router();
const { profileSchema } = require('../validators/userProfileValidators');
const validate = require('../middleware/validate');

router.get('/:userId', getProfile);
router.post('/', validate(profileSchema), createProfile);
router.put('/:userId', validate(profileSchema), updateProfile);
router.delete('/:userId', deleteProfile);

module.exports = router;
