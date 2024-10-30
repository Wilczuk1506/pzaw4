const express = require("express");

const application = express();

application.get("/", (request, response) => {response.send("<div>Kanapka</div>");});

application.post("/abc", (request, response) => { response.statusCode = 500; response.send("<div>asdasd</div>");});

application.delete("/abc", (request, response) => {response.send("<div>ledetee</div>");});

// sci/4c/abc

const SCI_router = express.Router();
SCI_router.get("/", (request, response) => {response.send("<div>sci</div>");})

SCI_router.get("/json", (req, res) => {
    const data = [{
        "key1" : "text",
        "key2" : 69
    }]

    res.json(data);
});


application.use("/sci", SCI_router)

application.listen(8000, () => {console.log("server status")});