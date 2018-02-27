import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [1, 'Title should be at least 1 character'],
      maxlength: [30, 'Title can not be longer than 30 characters'],
    },
    description: {
      type: String,
      required: false,
      maxlength: [1024, 'Description can not be longer than 1024 characters'],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Event', EventSchema);
