const mongoose =require("mongoose")

const settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const connection= async()=>{
 
        const user=process.env.USER
        const password=process.env.PASSWORD
        const db=process.env.DB
        // const dbUrl=(`mongodb+srv://${user}:${password}@cluster0.a5dsbs2.mongodb.net/${db}?retryWrites=true&w=majority`)
        const dbUrl=`mongodb://mongodb:27017/ExpressTest`
        await mongoose.connect(dbUrl,settings).then(()=>{
            console.log("Connected to the DB")
        }).catch((e)=>{
            console.log("Error",e)
        })
        
        
  
}
module.exports= connection