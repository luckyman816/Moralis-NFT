//Set Up Express Server Here

const express = require("express");
const cors = require("cors");

const moonbirds = require("./moonbirdsOwners.js");
const moonbirdsH = require("./moonbirdsHistory.js");

const bayc = require("./baycOwners.js");
const baycH = require("./baycHistory.js");

const azuki = require("./azukiOwners.js");
const azukiH = require("./azukiHistory.js");

const cryptoPunks = require("./cryptoPunksOwners.js");
const cryptoPunksH = require("./cryptoPunksHistory.js");

const collections = {
     "0x23581767a106ae21c074b2276D25e5C3e136a68b":{
       owners: moonbirds,
       history: moonbirdsH
     },
     "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D":{
      owners: bayc,
      history: baycH
     },
     "0xED5AF388653567Af2F388E6224dC7C4b3241C544":{
      owners: azuki,
      history: azukiH
     },
     "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB":{
      owners: cryptoPunks,
      history: cryptoPunksH
     },  

}
const app = express();
 
const port = 4000;
 
app.use(cors());
 
 
app.get("/", (req, res) => {
 res.send("Welcome to the Block-Scope server");
});

app.get("/collection", (req, res) => {
    const slug = req.query.slug;
    res.send(collections[slug].owners);
 });
  
 app.get("/user", (req, res) => {
    const slug = req.query.slug;
    const address = req.query.address;
    res.send(collections[slug].history[address]);
  });
 
app.listen(port, () =>
 console.log(`Block-Scope server running on ${port}`)
);