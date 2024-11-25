const express = require("express");
import cors from "cors";

const application = express();

application.use(cors())
application.use(express.json())

import pokedex from "./pokedex/pokedex.json";
import types from "./pokedex/types.json";

let arr = []


application.get('/task02/data', (req, res) => {
    res.status(200).json(arr);
});


application.post('/task02/data', (req, res) => {
    arr.push(req.body)

    res.sendStatus(200);
});

const task3_router = express.Router();

task3_router.get("/types", (req, res) => {

});

task3_router.get("/", (req, res) => {
    pokemons[req.params.id]
});

task3_router.get("/types", (req, res) => {
    
});

task3_router.get("/imgs", (req, res) => {
    
});

task3_router.get("", (req, res) => {
    
});

task3.use("/task3/pokemon", task3_router);


application.listen(8000, () => {console.log("server status")});

