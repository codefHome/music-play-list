
const Song = require("../models/songModel");
const { updateSongService } = require("../services/updateSongService");

exports.updateSong= async(req,res)=>{
const update = req.body;
const filter= {_id: req.params}
    await updateSongService(filter,update).then(result=>{
        res.status(200).json({...req.body})
    }).catch(err=>{
        res.status(500).json(err)
    })
}






