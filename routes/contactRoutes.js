
const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

// Fetch all contacts
router.get('/contacts', getAllContacts);

// Fetch a single contact by ID
router.get('/contacts/:id', getContactById);

// Create a new contact
router.post('/contacts', createContact);

// Update an existing contact by ID
router.put('/contacts/:id', updateContact);

// Delete a contact by ID
router.delete('/contacts/:id', deleteContact);

module.exports = router;

