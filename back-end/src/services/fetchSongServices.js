const Song = require("../models/songModel");

exports.getAllSongService = async (page,limit,userId) => {
    
    try {
      const totalSongs = await Song.countDocuments();
      const totalPages = Math.ceil(totalSongs / limit);
  
      const data = await Song.find({userId})
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

  exports.filterByGenreService = async (searchText,userId) => {
    try{
      const query = {
        $or: [
          { genre: new RegExp(searchText, "i") },
          { title: new RegExp(searchText, "i") }
        ]
      };
      
      const result=  await Song.find(query,{userId})
         return result;
    }catch(err){
       return err;
    }
      
  };


  exports.countCollectionService = async (userId) => {
    try {
      const countPipeline = [
        {
          $match: {
              userId: userId 
          }
      },
        {
          $group: {
            _id: null,
            song: { $addToSet: "$title" },
            album: { $addToSet: "$album" },
            artist: { $addToSet: "$artist" },
            genre: { $addToSet: "$genre" },
          },
        },
        {
          $project: {
            _id: 0,
            song: { $size: "$song" },
            album: { $size: "$album" },
            artist: { $size: "$artist" },
            genre: { $size: "$genre" },
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

  exports.countSongInEachGenreService = async (page,limit,userId) => {
    try {
      const genreCountPipeline = [
        {
          $match: {
              userId: userId 
          }
      },
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

  exports.countSongAndAlbumOfArtistService = async (page,limit,userId) => {
    try {
      const songAndAlbumPipeline = [
        {
          $match: {
              userId: userId 
          }
      },
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

  exports.countSongInEachAlbumService = async (page, limit,userId) => {
    try {
      const songCountPipeline = [
        {
          $match: {
              userId: userId 
          }
      },
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