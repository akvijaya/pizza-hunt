const router = require ('express').Router();

const { addComment, removeComment, addReply, removeReply} = require('../../controllers/comment-controller');



//POST /api/comments/pizzaid
router.route('/:pizzaId').post(addComment);

//DELETE /api/comments/pizzaid/commentid
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment)
    .put(addReply);

//DELETE /api/comments/pizzaid/commentid/replyid
router 
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);


module.exports = router;
