
const Song = require("../models/songModel")

exports.updateSongService= async(_id,data)=>{
    await Song.findOneAndUpdate(_id, data,  { new: true }).then(result=>{
       return({...req.body})
    }).catch(err=>{
       return err
    })
}






