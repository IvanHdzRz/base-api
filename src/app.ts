import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
//app middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//routes
app.get('/',(req,res)=>{
    res.send("Hola mundo");
});

export default app;