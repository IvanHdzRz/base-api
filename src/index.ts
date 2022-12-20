import dotenv from 'dotenv';
import app from './app'

// config enviroment vars
dotenv.config();
//try to connect to database, if success start server, else display error
const OdrPort=3000;
const Port=5000;

app.listen(OdrPort);
app.listen(Port);