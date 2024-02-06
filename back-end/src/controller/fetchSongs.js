const { set } = require("mongoose");
const Song = require("../models/songModel");
let totalArtist, totalSong, totalAlbum, totalGenre;
exports.getAllSongs = async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 8; 
  try {
    const totalSongs = await Song.countDocuments();
    const totalPages = Math.ceil(totalSongs / limit);

    const data = await Song.find()
      .skip((page - 1) * limit)
      .limit(limit)

    res.status(200).json({
      data,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSongById = async (req, res) => {
  const { _id } = req.params;
  await Song.findOne({ _id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.statas(500).json(err);
    });
};

exports.filterByGenre = async (req, res) => {
  const { genre } = req.params;
  const query = { genre: new RegExp(genre, "i")  };
  console.log(query)
  // if(query === 'all'){
  //   const page = parseInt(req.query.page) || 1; 
  // const limit = parseInt(req.query.limit) || 8; 
  // try {
  //   const totalSongs = await Song.countDocuments();
  //   const totalPages = Math.ceil(totalSongs / limit);

  //   const data = await Song.find()
  //     .skip((page - 1) * limit)
  //     .limit(limit)

  //   res.status(200).json({
  //     data,
  //     totalPages,
  //     currentPage: page,
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  // }
  await Song.find(query)
    .then((result) => {
      res.status(200).json(result);
      console.log(query)
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.countCollection = async (req, res) => {
  try {
    const countPipeline = [
      {
        $group: {
          _id: null,
          total_song: { $addToSet: "$title" },
          total_album: { $addToSet: "$album" },
          total_artist: { $addToSet: "$artist" },
          total_genre: { $addToSet: "$genre" },
        },
      },
      {
        $project: {
          _id: 0,
          total_song: { $size: "$total_song" },
          total_album: { $size: "$total_album" },
          total_artist: { $size: "$total_artist" },
          total_genre: { $size: "$total_genre" },
        },
      },
    ];

    const result = await Song.aggregate(countPipeline);

    if (result.length > 0) {
      const countObject = result[0];
      const formattedResult = Object.entries(countObject).map(([name, value]) => ({ name, value }));
      res.status(200).json(formattedResult);
    } else {
      res.status(404).json({ error: "No records found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.countSongInEachGenre = async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 8;
  try {
   
    const genreCountPipeline = [
      {
        $group: {
          _id: "$genre",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          genre: "$_id",
          count: 1,
        },
      },
    ];
    const totalData = await Song.aggregate(genreCountPipeline)
    const totalPages = Math.ceil(totalData.length / limit);
    const data = await Song.aggregate(genreCountPipeline)
    .skip((page - 1) * limit)
    .limit(limit)

    res.status(200).json({data,totalPages,currentPage:page});
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.countSongAndAlbumOfArtist = async (req, res) => {

  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 8;
  try {
    const songAndAlbumPipeline=[
      {
        $group: {
          _id: "$artist",
          titleCount: { $sum: 1 },
          albums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          artist: "$_id",
          titleCount: 1,
          albumCount: { $size: "$albums" },
        },
      },
    ]
    const totalData = await Song.aggregate(songAndAlbumPipeline);
    const totalPages = Math.ceil(totalData.length / limit);
   
    const result = await Song.aggregate(songAndAlbumPipeline)
    .skip((page - 1) * limit)
    .limit(limit)

    const data = result.map(item => {
      return {
        artist: item.artist,
        title: item.titleCount,
        album: item.albumCount
      };
    });

    res.status(200).json({data,totalPages,currentPage:page});
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.countSongInEachAlbum = async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 8;
  try {
    const songCountPipeline=[
      {
        $group: {
          _id: "$album",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          album: "$_id",
          titles: "$count",
        },
      },
    ]
    const totalData = await Song.aggregate(songCountPipeline);
    const totalPages = Math.ceil(totalData.length / limit);
    const data = await Song.aggregate(songCountPipeline)
    .skip((page - 1) * limit)
    .limit(limit)
    res.status(200).json({data,totalPages,currentPage:page});
  } catch (err) {
    res.status(500).json({ err });
  }
};
