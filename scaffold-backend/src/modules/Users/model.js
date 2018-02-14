import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: [2, 'First name should be at least 2 characters long'],
    max: [15, 'First name can not be longer than 15 characters'],
  },
  lastName: {
    type: String,
    required: true,
    min: [2, 'Last name should be at least 2 characters long'],
    max: [15, 'Last name can not be longer than 15 characters'],
  },
  email: String,
  password: String,
});

export default mongoose.model('User', UserSchema);
