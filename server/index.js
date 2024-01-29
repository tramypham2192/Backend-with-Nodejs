const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); 
// const { default: axios } = require('axios');
const controller = require('./controller');

// get all fortune quotes
app.get("/api/fortunes", controller.getAllFortuneQuotes)
// get all compliments
app.get("/api/compliment", controller.getCompliment); 
// get one single fortune quote
app.get("/api/fortune", controller.getFortune); 
// increase the times a fortune quote is hit like 
app.get("/api/fortunes/like/:numberOfLikes", controller.increaseLike);
// get a fortune quote having the friend word
app.get("/api/fortune/friend", controller.getFortuneWithFriend);
// create a new fortune quote
app.post("/api/addNewFortuneQuote", controller.addNewFortuneQuote);
// delete a fortune quote having the word in the input
app.delete(`/api/fortune/:wordToBeDeleteValue`, controller.deleteQuote);

app.listen(4000, () => console.log("Server running on 4000")); 




