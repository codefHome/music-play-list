
const Song = require("../models/songModel")

exports.deleteSongService=async(_id) =>{
    await Song.deleteOne({_id}).then(result =>{
       return result
    }).catch(err => {
        return err
    })
}









