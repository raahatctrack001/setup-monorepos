import express from 'express'

import { NUMBER, backendURL } from '@repo/common/config';

console.log(NUMBER);


const app = express();

app.get("/", (req, res)=>{
    res.json({message: `everything is going good bro and number import is ${backendURL}`});
})

app.listen(3002, ()=>{console.log("server is up and live on 3002")});