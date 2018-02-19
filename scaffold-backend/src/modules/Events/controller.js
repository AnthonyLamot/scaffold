import Event from './model';


export const createEvent = async (req, res) => {
  const { title, description, userId } = req.body;

  const newEvent = new Event({
    title,
    description,
    createdBy: userId,
  });

  try {
    return res.status(201).json({ error: false, event: await newEvent.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

export const getUserEvents = async (req, res) => {
  const { userId } = req.body;

  try {
    return res.status(201).json({ error: false, events: await Event.find({ createdBy: userId }) });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};
