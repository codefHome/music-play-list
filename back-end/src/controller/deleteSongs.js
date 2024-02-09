
const Song = require("../models/songModel")
const { deleteSongService } = require("../services/deleteSongService")

exports.hardDelete=async(req,res) =>{
    const{_id}=req.params
    await deleteSongService(_id).then(result =>{
        res.status(204).json(result)
    }).catch(err => {
        res.status(500).json(err)
    })
}









