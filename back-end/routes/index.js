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
const { addSongMiddleware } = require("../src/middlewares/addSongMiddleware");
const { deleteSongMiddleware } = require("../src/middlewares/deleteMiddleware");
const { signInMiddleware } = require("../src/middlewares/userMiddlewares");
const {
  registerUser,
  signInController,
} = require("../src/controller/userController");

var router = express.Router();

router.post("/addSong", addSongMiddleware, addSong);
router.get("/getAllSongs", getAllSongs);
router.get("/filterByGenre/:genre", filterByGenre);
router.get("/getSongById/:_id", getSongById);
router.delete("/deleteSong/:_id", deleteSongMiddleware, hardDelete);
router.put("/updateSong/:_id", updateSong);
router.get("/songInEachGenre", countSongInEachGenre);
router.get("/countSongAndAlbumForArtist", countSongAndAlbumOfArtist);
router.get("/songInEachAlbum", countSongInEachAlbum);
router.get("/countCollection", countCollection);
router.post("/register", registerUser);
router.post("/login", signInMiddleware, signInController);

module.exports = router;
