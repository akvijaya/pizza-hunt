const router = require ('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controller');



//POST /api/comment/pizzaid
router.route('/:pizzaId').post(addComment);

//DELETE /api/comments/pizzaid/commentid
router.route('/:pizzaId/:commentId').delete(removeComment);




module.exports = router;
