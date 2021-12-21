const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema(
  {
    //set custom id to avoid confusion with parent comment_id
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    replyBody: {
      type: String,
      required: true,
      trim: true
    },
    writtenBy: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const CommentSchema = new Schema(
  {
    writtenBy: {
      type: String,
      required: true
    },
    commentBody: {
      type: String.apply,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    //use Reply schema to validate data for a reply
    replies: [ReplySchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//get total count of  replies on retrieval 
CommentSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

//create pizza model using the pizza schema
const Comment = model('Comment', CommentSchema);

module.exports = Comment;
