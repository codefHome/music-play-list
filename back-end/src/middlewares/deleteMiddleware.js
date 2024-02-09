const Song = require("../models/songModel");

exports.deleteSongMiddleware = async (req, res, next) => {
    const{_id}=req.params
    try {
        const song = await Song.findById(_id);
        if (!song) {
          return res.status(404).json({ success: false, message: 'Song not found' });
        }
      } catch (err) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
    
      next();
};