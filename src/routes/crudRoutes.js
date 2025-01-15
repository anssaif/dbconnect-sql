const express = require('express');
const router = express.Router();

const CrudController = require('../controllers/crudController');
const controller = new CrudController();

// Define your CRUD operations here
router.post('/', (req, res) => {
  // Create item logic
  res.send('Create item');
});

// Define your query operation here
router.get('/:id', controller.store);
// Schedule operation
router.get('/schedule/:id',controller.schedule);

// transcom operation
router.get('/transcom/:id',controller.Transcom);

// Define your dynamic Custom query  operation here
router.put('/query',controller.query);

router.delete('/:id', (req, res) => {
  // Delete item logic
  res.send('Delete item');
});

module.exports = router;