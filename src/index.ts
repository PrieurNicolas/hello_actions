import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon 1'));

app.listen(3000, ()=> console.log("Application démarrée sur le port 3009"));