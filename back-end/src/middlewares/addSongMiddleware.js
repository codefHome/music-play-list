const Song = require("../models/songModel");

exports.addSongMiddleware = async (req, res, next) => {
  const { title, artist } = req.body;

  if (!title || !artist) {
    return res.status(400).json({ success: false, message: 'Title and artist are required fields' });
  }

  try {
    const existingSong = await Song.findOne({ title });
    if (existingSong) {
      return res.status(409).json({ success: false, message: 'Title already exists' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

  next();
};