
const Song = require("../models/songModel")

exports.hardDelete=async(req,res) =>{
    const{_id}=req.params
    await Song.deleteOne({_id}).then(result =>{
        res.status(204).json(result)
    }).catch(err => {
        res.status(500).json(err)
    })
}









