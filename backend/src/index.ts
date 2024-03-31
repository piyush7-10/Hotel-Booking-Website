import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get("/api/test", async(req: Request, res: Response) => {
    res.json({message: "Hello from json endpoint"});
});

app.listen(5002, ()=> {
    console.log("server is running on localhost 5002");
})