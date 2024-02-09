
const Song = require("../models/songModel")

exports.addSongService= async(data)=>{
    await Song.insertMany({...data}).then(result=>{
       return({msg:'Added Successfully',success:true})
    }).catch(err=>{
       return({success:false,msg: err.code === 11000 ? 'Title duplicated' : err})
    })
}






