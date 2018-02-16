import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [2, 'First name should be at least 2 characters long'],
      maxlength: [15, 'First name can not be longer than 15 characters'],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [2, 'Last name should be at least 2 characters long'],
      maxlength: [15, 'Last name can not be longer than 15 characters'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
