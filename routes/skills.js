var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills')

// GET request to /skills
router.get('/', skillsController.index);
// GET /skills/:id
router.get('/:id', skillsController.show);



module.exports = router;
