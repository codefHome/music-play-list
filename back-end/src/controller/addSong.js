
const Song = require("../models/songModel")
const { addSongService } = require("../services/addSongService")

exports.addSong= async(req,res)=>{
    await addSongService({...req.body}).then(result=>{
        res.status(200).json({msg:'Added Successfully',success:true},)
    }).catch(err=>{
        res.status(500).json({success:false,msg: err.code === 11000 ? 'Title duplicated' : err})
        console.log(err)
    })
}






