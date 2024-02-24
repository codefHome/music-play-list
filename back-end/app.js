
const express =require('express')
const app =express();
const cors = require("cors");
const dotenv=require('dotenv')
const router=require('./routes/index.js')
const connection =require('./src/config/connection.js')

dotenv.config()
const port1 = process.env.PORT1 || 5173;

const corsOptions = {
  origin: [
    // `http://localhost:${parseInt(port1)}`,
    `https://develop--my-react-pet-app.netlify.app`,

    
  ],
};
app.use(cors(corsOptions))
app.use(express.json());
connection();
app.use(express.urlencoded({ extended: true }));
app.use('/',router)
app.listen(5000,()=>{
  console.log("Server running on port 5000")
});
