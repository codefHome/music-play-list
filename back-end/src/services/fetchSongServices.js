const Song = require("../models/songModel");

exports.getAllSongService = async (page,limit) => {
    
    try {
      const totalSongs = await Song.countDocuments();
      const totalPages = Math.ceil(totalSongs / limit);
  
      const data = await Song.find()
        .skip((page - 1) * limit)
        .limit(limit)
     return({
        data,
        totalPages,
        currentPage: page,
      });
    } catch (err) {
     return err;
    }
  };

  exports.getSongByIdService = async (_id) => {
    try{
      const result =  await Song.findOne({_id})
      console.log(result)
      return result;
    }catch (err) {
     return err
    }
  };

  exports.filterByGenreService = async (genre) => {
    try{
        const query = { genre: new RegExp(genre, "i")  };
      const result=  await Song.find(query)
         return result;
    }catch(err){
       return err;
    }
      
  };


  exports.countCollectionService = async () => {
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
        return formattedResult;
      } else {
       return({ error: "No records found" });
      }
    } catch (err) {
      return err;
    }
  };

  exports.countSongInEachGenreService = async (page,limit) => {
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
      const totalData = await Song.aggregate(genreCountPipeline);
      const totalPages = Math.ceil(totalData.length / limit);
      const data = await Song.aggregate(genreCountPipeline)
        .skip((page - 1) * limit)
        .limit(limit);
  
      return({ data, totalPages, currentPage: page });
    } catch (err) {
      return err;
    }
  };

  exports.countSongAndAlbumOfArtistService = async (page,limit) => {
    try {
      const songAndAlbumPipeline = [
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
      ];
      const totalData = await Song.aggregate(songAndAlbumPipeline);
      const totalPages = Math.ceil(totalData.length / limit);
  
      const result = await Song.aggregate(songAndAlbumPipeline)
        .skip((page - 1) * limit)
        .limit(limit);
  
      const data = result.map((item) => {
        return {
          artist: item.artist,
          title: item.titleCount,
          album: item.albumCount,
        };
      });
  
      return({ data, totalPages, currentPage: page });
    } catch (err) {
     return({ err });
    }
  };

  exports.countSongInEachAlbumService = async (page, limit) => {
    try {
      const songCountPipeline = [
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
      ];
      const totalData = await Song.aggregate(songCountPipeline);
      const totalPages = Math.ceil(totalData.length / limit);
      const data = await Song.aggregate(songCountPipeline)
        .skip((page - 1) * limit)
        .limit(limit);
     return({ data, totalPages, currentPage: page });
    } catch (err) {
      return err 
    }
  };