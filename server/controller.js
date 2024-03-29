const dbjson = require('./db.json'); 

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    'getAllFortuneQuotes': (req, res) => {
        res.status(200).send(dbjson);
    }, 

    'deleteAQuote': (req, res) => {
        for (let i = 0; i < dbjson.length; i++){
            if (dbjson[i].id == +req.params.quoteID) {
                dbjson.splice(i, 1);
            }
        }
        res.status(200).send(dbjson);
    },
    
    'deleteQuoteWithInputWord': (req, res) => {
        const fortunes = [ 
            {id: 1, quote:`A beautiful, smart, and loving person will be coming into your life.`, numberOfLikes: 0},
            {id: 2, quote:`A dubious friend may be an enemy in camouflage.`, numberOfLikes: 0},
            {id: 3, quote:`A faithful friend is a strong defense.`, numberOfLikes: 0},
            {id: 4, quote:`A feather in the hand is better than a bird in the air.`, numberOfLikes: 0},
            {id: 5, quote:`A fresh start will put you on your way.`, numberOfLikes: 0},
            {id: 6, quote:`A friend asks only for your time not your money.`, numberOfLikes: 0},
            {id: 7, quote:`A friend is a present you give yourself.`, numberOfLikes: 0}
        ]; 
        const filteredFortunes = []
        for (let i = 0; i < fortunes.length; i++) { 
            if (!(fortunes[i].quote.includes(req.params.wordToBeDeleteValue))) {
                filteredFortunes.push(fortunes[i].quote);
            }
        }
        res.status(200).send(filteredFortunes); 
    },
    
    'getFortune' : (req, res) => {
        const fortunes = [ 
            {id: 1, quote:`A beautiful, smart, and loving person will be coming into your life.`, numberOfLikes: 0},
            {id: 2, quote:`A dubious friend may be an enemy in camouflage.`, numberOfLikes: 0},
            {id: 3, quote:`A faithful friend is a strong defense.`, numberOfLikes: 0},
            {id: 4, quote:`A feather in the hand is better than a bird in the air.`, numberOfLikes: 0},
            {id: 5, quote:`A fresh start will put you on your way.`, numberOfLikes: 0},
            {id: 6, quote:`A friend asks only for your time not your money.`, numberOfLikes: 0},
            {id: 7, quote:`A friend is a present you give yourself.`, numberOfLikes: 0}
        ]; 
        // choose random fortune 
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        console.log(`random index is: ${randomIndex}`);
        let randomFortune = fortunes[randomIndex].quote; 
        res.status(200).send(randomFortune); 
    },
    'getFortuneWithFriend': (req, res) => {
        const fortunes = [ 
            {id: 1, quote:`A beautiful, smart, and loving person will be coming into your life.`, numberOfLikes: 0},
            {id: 2, quote:`A dubious friend may be an enemy in camouflage.`, numberOfLikes: 0},
            {id: 3, quote:`A faithful friend is a strong defense.`, numberOfLikes: 0},
            {id: 4, quote:`A feather in the hand is better than a bird in the air.`, numberOfLikes: 0},
            {id: 5, quote:`A fresh start will put you on your way.`, numberOfLikes: 0},
            {id: 6, quote:`A friend asks only for your time not your money.`, numberOfLikes: 0},
            {id: 7, quote:`A friend is a present you give yourself.`, numberOfLikes: 0}
        ]; 
        const friendArray = [];
        for (element of fortunes){ 
            if (element.quote.includes("friend")){
                friendArray.push(element.quote);
            }
        }
        res.status(200).send(friendArray);
    },
    'addNewFortuneQuote': (req, res) => {
        const fortunes = [
            `A beautiful, smart, and loving person will be coming into your life.`,
            `A dubious friend may be an enemy in camouflage.`
        ];
        const {newFortuneQuote} = req.body;
        fortunes.push(req.body.newFortuneQuote);
        res.status(200).send(fortunes);
    },

    'increaseLike': (req, res) => {
        for (let i = 0; i < dbjson.length; i++) {
            if (dbjson[i].id === + req.params.id){
                dbjson[i].numberOfLikes++;
            }
        }
        res.status(200).send(dbjson); 
    }  
}