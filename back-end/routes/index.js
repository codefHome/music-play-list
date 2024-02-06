var express = require("express");
const { addSong } = require("../src/controller/addSong");
const {
  getAllSongs,
  getSongById,
  filterByGenre,
  countArtist,
  countSong,
  countAlbum,
  countGenre,
  countSongInEachGenre,
  countSongAndAlbumOfArtist,
  countAllSongs,
  countSongInEachAlbum,
  countCollection,
} = require("../src/controller/fetchSongs");
const { hardDelete } = require("../src/controller/deleteSongs");
const { updateSong } = require("../src/controller/updateSong");

var router = express.Router();


router.post("/addSong", addSong);
router.get("/getAllSongs", getAllSongs);
router.get("/filterByGenre/:genre", filterByGenre);
router.get("/getSongById/:_id", getSongById);
router.delete("/deleteSong/:_id", hardDelete);
router.put("/updateSong/:_id", updateSong);
router.get("/songInEachGenre", countSongInEachGenre);
router.get("/countSongAndAlbumForArtist", countSongAndAlbumOfArtist);
router.get("/songInEachAlbum", countSongInEachAlbum);
router.get("/countCollection", countCollection);


module.exports = router;
