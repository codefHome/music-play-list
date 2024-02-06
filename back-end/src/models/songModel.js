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

SongModel.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

SongModel.pre('findOneAndUpdate', function (next) {
  this._update.updatedAt = Date.now();
  next();
});
const Song = model('songs', SongModel);

module.exports= Song