
const Song = require("../models/songModel")

exports.addSongService= async(data)=>{
   try{
      await Song.insertMany({...data})
      return({msg:'Added Successfully',success:true})
   }catch(err){
      return({success:false,msg: err.code === 11000 ? 'Title duplicated' : err})
   }
   
}






