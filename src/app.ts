import express, { response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {Request, Response} from 'express';
import axios, {Axios} from 'axios'
import VoiceLinkResponce from './models/voiceLinkResponce';
import VoiceLinkRequest from './models/voiceLinkRequest';
import generateDoc from './helpers/generateDoc';
const app = express();
//app middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//VoiceLink Server data
const voiceLinkServicePath='/VoiceLink/services/proxyRestService/executeCommand';
const host="20.7.158.209"
const port="9090"
const protocol="http"
const displayReqData=(req: Request)=>{
   
    return {
        body:req.body,
     }
}
//routes
//POST
app.post(voiceLinkServicePath,async(req:Request,res:Response)=>{
    const request:VoiceLinkRequest =req.body 
    console.log("-------------REQUEST-------------")
    console.log(request);
    console.log("-------------RESPONCE------------")
    const {data}= await axios.post<VoiceLinkResponce>(`${protocol}://${host}:${port}${voiceLinkServicePath}`,{
        ...req.body
    })
    const response:VoiceLinkResponce=data;
    console.log(response);
    await generateDoc(request,response);
    res.status(200).json(response).end();
});

//other methods
app.get(voiceLinkServicePath,(req:Request,res:Response)=>{
    
    console.log("GET---------------------------")
    res.status(200).end();
    
});
app.put(voiceLinkServicePath,(req:Request,res:Response)=>{
    console.log("PUT--------------------------")
    res.status(200).end();
});

app.delete(voiceLinkServicePath,(req:Request,res:Response)=>{
    console.log("DELETE-------------------------")
    res.status(200).end();
});

app.patch(voiceLinkServicePath,(req:Request,res:Response)=>{
    console.log("")
    res.status(200).end();
});


export default app;