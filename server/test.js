console.log("a friend".includes("friend"));
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
// console.log(friendArray);

// choose random fortune 
let randomIndex = Math.floor(Math.random() * fortunes.length);
// console.log(`random index is: ${randomIndex}`);
let randomFortune = fortunes[randomIndex].quote; 
// console.log(randomFortune);

const dbjson = require('./db.json'); 

for (let i = 0; i < dbjson.length; i++) {
    if (dbjson[i].id == 1) {
        dbjson.splice(i, 1);
    }
}
console.log(dbjson);