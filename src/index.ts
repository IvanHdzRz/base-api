import dotenv from 'dotenv';
import app from './app'
import connectDB from './database/config'
// config enviroment vars
dotenv.config();
//try to connect to database, if success start server, else display error
connectDB()
    .then(()=>{
        app.listen(process.env.PORT);
        console.log("Server runnning on port: ",process.env.PORT)
    })
    .catch(e=>{
        console.log("Error ocurret in Database connection",e)
    })
