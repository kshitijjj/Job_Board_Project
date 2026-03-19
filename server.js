import express from 'express'
import cors from 'cors'
import databaseConnect from './config/db.js'
import authRoute from './routes/auth.js'
import jobRoute from './routes/jobs.js'
import homeRoute from './routes/home.js';
import summaryRoute from './routes/ollamaSummary.js';
databaseConnect();

const app=express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/home',homeRoute);
app.use('/user',authRoute);
app.use('/',jobRoute);
app.use('/ollama',summaryRoute);


app.listen(PORT,(req,res)=>{
    console.log(`Backend server connected successfully at port ${process.env.PORT}`)
})


