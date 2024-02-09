const { set } = require("mongoose");
const Song = require("../models/songModel");
const {
  getAllSongService,
  getSongByIdService,
  filterByGenreService,
  countCollectionService,
  countSongInEachGenreService,
  countSongAndAlbumOfArtistService,
  countSongInEachAlbumService,
} = require("../services/fetchSongServices");
exports.getAllSongs = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 7;
  try {
    const data = await getAllSongService(page, limit);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSongById = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await getSongByIdService(_id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.filterByGenre = async (req, res) => {
  const { genre } = req.params;
  await filterByGenreService(genre)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.countCollection = async (req, res) => {
  try {
    const result = await countCollectionService();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.countSongInEachGenre = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  try {
    const result = await countSongInEachGenreService(page,limit)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.countSongAndAlbumOfArtist = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 7;
  try {
    const result = await countSongAndAlbumOfArtistService(page,limit)
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.countSongInEachAlbum = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 7;
  try {
   
    const result = await countSongInEachAlbumService(page,limit)
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err });
  }
};
