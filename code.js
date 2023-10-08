var dealerSum=0; //These are global values
var yourSum=0;//These are global values

var dealerAceCount=0;//These are global values
var yourAceCount=0;//These are global values

var hidden; //Keeps track of the dealers hidden card
var deck;

var canHit=true;  //allows the player (you) to draw while yourSum <= 21

window.onload = function() {   //When the pages loads it will conduct these actions
    buildDeck();
    shuffleDeck();
    startGame();
}
function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i <types.length; i++){
        for (let j = 0; j <values.length; j++) {
            deck.push(values[j] + "-" + types[i]);//Ace-Clubs -> King-Clubs, Ace-Diamonds -> King-Diamonds
        }
    }
}
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++ ) {
    let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
    let temp =deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
console.log(deck);
}
function startGame(){
    hidden = deck.pop(); // Removes a card from the end of the array
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    console.log(hidden);
    console.log(dealerSum);
    while (dealerSum < 17) { // Dealer will pull cards until the sum is 17 or greater
        let cardImg = document.createElement("img"); // Crated an image tag
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";  //example <img src="./cards/4-C.png">
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum)

    for (let i = 0; i < 2; i++){
        let cardImg = document.createElement("img"); // Crated an image tag
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";  //example <img src="./cards/4-C.png">
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
        }
        console.log(yourSum)
        document.getElementById("hit").addEventListener("click", hit); // Allows the player to get another card by clicking on the hit button
        document.getElementById("stay").addEventListener("click", stay); // Allows the player to not pull a card
function hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";  //example <img src="./cards/4-C.png">
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { /* Checks your sum and ace count to see if you are over 21
 and if you can replace a 11 with a 1 A, J, 8 -> 1 + 10 + 8 */
    canHit = false;
}
}
function stay(){
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum,yourAceCount);

    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";

    let message = "";
    if (yourSum > 21) {
    message = "You Lose!" }//Win and lose conditions
else if (dealerSum > 21) {//Win and lose conditions
    message = "You win!"
}
//Both you and dealer <= 21
else if (yourSum == dealerSum){//Win and lose conditions
    message = "Tie!"
}
else if (yourSum > dealerSum){//Win and lose conditions
    message = "You win!"
}
else if (yourSum < dealerSum) {//Win and lose conditions
    message = "You lose!"
}
document.getElementById("dealer-sum").innerText = dealerSum; //dispays dealers sum on page
document.getElementById("your-sum").innerText = yourSum; //displays your sum on page 
document.getElementById("results").innerText = message; //displays win or lose message on page
}


}
function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { // if not a number meaning A,J,Q,K
        if (value == "A"){
            return 11;
        }
        return 10;
    }

    return parseInt(value); // If not a letter returns the number
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}
function reduceAce(yourSum, yourAceCount) { 
    while (yourSum > 21 && yourAceCount > 0) { // If player sum is over 21 and they have aces this will change aces into ones until they are under 21
    yourSum -= 10;
    yourAceCount -=1;
    }
    return yourSum
}
function boards()
{
    location.replace("boards.html");
}
function meme()
{
    location.replace("meme.html");
}
function game()
{
    location.replace("game.html");
}
function check()
{
    location.replace("check.html");
}
function user()
{
    location.replace("strings.html");
}
function move()
{
    location.replace("move.html");
}
function music()
{
    location.replace("music.html");
}
function boards()
{
    location.replace("boards.html");
}
function meme()
{
    location.replace("meme.html");
}
function game()
{
    location.replace("game.html");
}
function check()
{
    location.replace("check.html");
}
function user()
{
    location.replace("strings.html");
}
function move()
{
    location.replace("move.html");
}
function music()
{
    location.replace("music.html");
}
function nav()
{
    location.replace("nav.html");
}
