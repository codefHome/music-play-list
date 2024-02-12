const { Schema,model, default: mongoose } =require( "mongoose")


const SongModel = new Schema({

  title: {
    type:String,
    unique: true,
  },
  artist: {
    type:String,
    unique:true
  },
  album: {
    type:String
  },
  genre: {
    type:String
  },
  isDeleted:{
    type:Boolean,
    default:false
  },
  userId:String,
  cd:String,
},
{
  timestamps: true,
}
);

const Song = model('songs', SongModel);

module.exports= Song