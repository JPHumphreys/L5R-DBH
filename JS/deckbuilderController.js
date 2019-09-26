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

const dynastyMusts = {
    0:"3 Favorable Ground",
    1:"3 Imperial Storehouse",
    2:"3 Miya Mystic"
};

const conflictMusts = {
    0:"3 banzai!",
    1:"3 Court Games",
    2:"3 Fine Katana",
    3:"3 Ornate Fan",
    4:"2 Assassination"
};

const splashes = {
    crab:{
        0:"3 Reprieve",
        1:"2 Jade Tetsubō"
    },
    crane:{
        0:"3 Political Rival",
        1:"2 Admit Defeat"
    },
    dragon:{
        0:"3 Let Go",
        1:"2 Tattooed Wanderer"
    },
    lion:{
        0:"2 Ready for Battle",
        1:"3 Strength in Numbers"
    },
    phoenix:{
        0:"3 Against the Waves",
        1:"2 Seeker of Knowledge"
    },
    scorpion:{
        0:"2 Calling in Favors",
        1:"3 Court Mask"
    },
    unicorn:{
        0:"3 Iuchi Wayfinder",
        1:"2 Favored Mount"
    }
};

let decks = [];
let currentStronghold;
let dynastyCount;
let conflictCount;

function returnRoleAndElement(role, element){
    return "1 "+ role + " of " + element;
}

function deckbuilderOnload(){
    dynastyCount = 9;//9 neutral
    conflictCount = 19;//14 neutral + 5 splash
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

