const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.js');


router.get('/', postController.index);

router.get('/:slug', postController.show);

router.post('/', postController.store);

router.put('/:slug', postController.update);

router.delete('/:slug', postController.destroy);

module.exports = router;