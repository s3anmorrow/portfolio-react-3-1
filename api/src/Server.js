let express = require("express");
let fileSystem = require("fs");
let cors = require('cors');
let path = require('path');

// get absolute path to /build folder (production build of react web app) relative to this Server.js file
const CLIENT_BUILD_PATH = path.join(__dirname, "./../../client/build/");

// construct application object via express
let app = express();

// implementing middleware for allowing CORs
app.use(cors());
// adding middleware to define static files location
app.use("/", express.static(CLIENT_BUILD_PATH));

app.get("/portfolio", (request, response) => {
    // read json from a file
    fileSystem.readFile("./samples.json", (error, data) => {
        console.log("JSON LOADED");
        // convert loaded JSON string from samples.json to objects/arrays
        let sampleJSON = JSON.parse(data);
        // response set to be JSON
        response.send(sampleJSON);
    });
});

// wildcard to handle all other non-api URL routings (/selected, /all, /random, /search)
app.use("/*", express.static(CLIENT_BUILD_PATH));

// startup the Express server - listening on port 80
app.listen(80, () => console.log("Listening on port 80"));