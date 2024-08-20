import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestampst: true } //createdAt , updatedAt => content.createdAt
);

export default mongoose.model('Message', MessageSchema);