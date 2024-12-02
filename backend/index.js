const express = require("express");
const cors = require('cors');
const fs = require('fs');

const application = express();

application.use(cors())
application.use(express.json())

let arr = []

application.get('/task02/data', (req, res) => {
    res.status(200).json(arr);
});


application.post('/task02/data', (req, res) => {
    arr.push(req.body)

    res.sendStatus(200);
});

// Pokedex

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

const types = require("./pokedex/types.json");
const pokedex = require("./pokedex/pokedex.json");

const task3_router = express.Router();

task3_router.get("/types", (req, res) => {
    res.status(200).json(types);
});

task3_router.get("/:id", (req, res) => {
    res.status(200).json(pokedex.find((x) => x.id === Number(req.params.id)));
});

task3_router.get("/type/:type", (req, res) => {
    res.status(200).json(pokedex.filter(pokemon => pokemon.type.includes(req.params.type)));
});

task3_router.get("/image/:id", (req, res) => {
    res.status(200).send(base64_encode(`./pokedex/images/${(req.params.id).padStart(3, '0')}.png`));
});

task3_router.get("", (req, res) => {
    res.status(200).json(pokedex.filter(pokemon => req.query.types.every(type => pokemon.type.includes(type))));
});

application.use("/task3/pokemon", task3_router);


application.listen(8000, () => {console.log("server status")});

