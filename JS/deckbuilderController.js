const decknameValue = document.getElementById("deck-name");

//STRONGHOLDS
const strongholds = {
    crab:"1 Shiro Nishiyama",
    crane:"1 Shizuka Toshi",
    dragon:"1 Mountain's Anvil Castle",
    lion:"1 Yōjin no Shiro",
    phoenix:"1 Isawa Mori Seidō",
    scorpion:"1 City of the Open Hand",
    unicron:"1 Golden Plains Outpost"
};

const airProvince = "1 Fertile Fields";
const voidProvince = "1 Shameful Display";
const earthProvince = "1 Entrenched Position";
const fireProvince = "1 Meditations on the Tao";
const waterProvince = "1 Rally to the Cause";

let decks = [];
let currentStronghold;

function returnRoleAndElement(role, element){
    return "1 "+ role + " of " + element;
}

function createDeck(){
    let obj = {
        name:decknameValue.value,
        primary:priclan,
        secondary:splashclan,
        text:"text",
        cards:[]
    };







    decks.push(obj);

}

function submitDeck(){
    //submits the deck if available
    //need a check on whether the deck is legal or not
}

function strongholdSelector(primary){
    switch(primary){
        case "crab":
            currentStronghold = strongholds.crab;
        break;
        case "crane":
            currentStronghold = strongholds.crane;
        break;
        case "dragon":
            currentStronghold = strongholds.dragon;
        break;
        case "lion":
            currentStronghold = strongholds.lion;
        break;
        case "phoenix":
            currentStronghold = strongholds.phoenix;
        break;
        case "scorpion":
            currentStronghold = strongholds.scorpion;
        break;
        case "unicorn":
            currentStronghold = strongholds.unicron;
        break;
    }
}

