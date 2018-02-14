import User from './model';


/* eslint-disable import/prefer-default-export */
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    return res.status(201).json({ error: false, user: await newUser.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error while creating user' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    return res.status(201).json({ error: false, users: await User.find() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error while getting all users' });
  }
};
