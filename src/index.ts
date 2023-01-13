import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('La cheniiiiiiiiiille'));
app.get('/testDocker', (req, res) => res.send('the last: ' + process.env.id));

app.listen(3009, ()=> console.log("Application démarrée sur le port 3009"));