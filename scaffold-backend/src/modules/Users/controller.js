import bcrypt from 'bcrypt';

import { User, LoginHistory } from './model';


export const createUser = async (req, res) => {
  // Destructure the request
  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body;

  // Check if a user with the same email address already exists
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    return res.status(400).json({ error: true, message: 'A user with that email already exists' });
  }

  // Encrypt the password
  const hash = bcrypt.hashSync(password, 10);

  try {
    // Save the new user
    const newUser = await new User({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hash,
    }).save();

    // If the register works, it counts as a first login which we record
    new LoginHistory({
      user: newUser._id,
    }).save();

    // Send back the user info if succesful but without the password
    return res.status(201).json({
      error: false,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    });
  } catch (e) {
    // Send error if the save failed
    return res.status(400).json({ error: true, message: e.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Try to find the user matching the email
  const user = await User.findOne({ email: email.toLowerCase() });
  if (user) {
    // Check if the password is correct
    if (bcrypt.compareSync(password, user.password)) {
      // Record every time a user logs in
      new LoginHistory({
        user: user._id,
      }).save();

      return res.status(201).json({
        error: false,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    }
    return res.status(400).json({ error: true, message: 'Email address and pasword don\'t match' });
  }
  return res.status(400).json({ error: true, message: 'No user with this email address found' });
};

export const getAllUsers = async (req, res) => {
  try {
    return res.status(201).json({ error: false, users: await User.find() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error while getting all users' });
  }
};
