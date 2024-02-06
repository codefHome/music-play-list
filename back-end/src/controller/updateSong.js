
const Song = require("../models/songModel")

exports.updateSong= async(req,res)=>{
const update = req.body;
const filter= {_id: req.params}
    await Song.findOneAndUpdate(filter, update,  { new: true }).then(result=>{
        res.status(200).json({...req.body})
    }).catch(err=>{
        res.status(500).json(err)
    })
}






