var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills')

// GET request to /skills
router.get('/', skillsController.index);

router.get('/new', skillsController.new);
// GET /skills/:id
router.get('/:id', skillsController.show);

router.delete('/:id', skillsController.delete);

router.post('/', skillsController.create);

module.exports = router;
