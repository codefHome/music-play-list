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
  isDeleted:Boolean
},
{
  timestamps: true,
}
);

const Song = model('songs', SongModel);

module.exports= Song