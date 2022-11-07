import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplonzzz ABC'));

app.listen(3009, ()=> console.log("Application démarrée sur le port 3009"));