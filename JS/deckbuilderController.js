const decknameValue = document.getElementById("deck-name");


function getDecks(){
    return decks;
}

  
let currentDeck = {
    name:"",
    primary:"",
    secondary:"",
    text:"",
    cards:[]
};


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
    one:"3 Favorable Ground",
    two:"3 Imperial Storehouse",
    three:"3 Miya Mystic"
};

const conflictMusts = {
    one:"3 banzai!",
    two:"3 Court Games",
    three:"3 Fine Katana",
    four:"3 Ornate Fan",
    five:"2 Assassination"
};

const splashes = {
    crab:{
        one:"3 Reprieve",
        two:"2 Jade Tetsubō"
    },
    crane:{
        one:"3 Political Rival",
        two:"2 Admit Defeat"
    },
    dragon:{
        one:"3 Let Go",
        two:"2 Tattooed Wanderer"
    },
    lion:{
        one:"2 Ready for Battle",
        two:"3 Strength in Numbers"
    },
    phoenix:{
        one:"3 Against the Waves",
        two:"2 Seeker of Knowledge"
    },
    scorpion:{
        one:"2 Calling in Favors",
        two:"3 Court Mask"
    },
    unicorn:{
        one:"3 Iuchi Wayfinder",
        two:"2 Favored Mount"
    }
};

let currentStronghold;


let dynastyCount;
let conflictCount;

let finalDynastyOrder = [];
let finalConflictOrder = [];

let firstPass;
let secondPass;

let aboveSeven = [];
let aboveFive = [];
let aboveThree = [];
let aboveNothing = [];


function returnRoleAndElement(role, element){
    return "1 "+ role + " of " + element;
}

function deckbuilderOnload(){
    dynastyCount = 9;//9 neutral
    conflictCount = 19;//14 neutral + 5 splash
}

function createDeck(){

    deckCardSort(primaryValue, "dynasty");
    currentDeck.name = decknameValue.value;
    currentDeck.primary = primaryValue;
    currentDeck.secondary = secondaryValue;

}

function secondPassCreateDeck(){

    firstPass = data;

    deckCardSort(primaryValue, "conflict");
}

function getRatingPasses(){

    secondPass = data;
    getDeckRatings(primaryValue);

}

function calculateRatings(){
    for(let i = 0; i < ratingData.length; i++){
        if(i < 2){

        }
        else{
            if(ratingData[i].overallrating >= 7){
                aboveSeven.push(ratingData[i].id);
            }
            else if(ratingData[i].overallrating >= 5){
                aboveFive.push(ratingData[i].id);
    
            }else if(ratingData[i].overallrating >= 3){
                aboveThree.push(ratingData[i].id);
            }
            else{
                aboveNothing.push(ratingData[i].id);
            }
        }
    }
}

function filterBySides(){
 //filter by side;

    //dynasty


    for(let i = 0; i < firstPass.length; i++){
        for(let j = 0; j < aboveSeven.length; j++){
            if(firstPass[i].id === aboveSeven[j]){
                finalDynastyOrder.push(firstPass[i].name);
            }
        }
    }

    for(let i = 0; i < firstPass.length; i++){
        for(let j = 0; j < aboveFive.length; j++){
            if(firstPass[i].id === aboveFive[j]){
                finalDynastyOrder.push(firstPass[i].name);
            }
        }
    }

    for(let i = 0; i < firstPass.length; i++){
        for(let j = 0; j < aboveThree.length; j++){
            if(firstPass[i].id === aboveThree[j]){
                finalDynastyOrder.push(firstPass[i].name);
            }
        }
    }

    for(let i = 0; i < firstPass.length; i++){
        for(let j = 0; j < aboveNothing.length; j++){
            if(firstPass[i].id === aboveNothing[j]){
                finalDynastyOrder.push(firstPass[i].name);
            }
        }
    }

    //conflict

    for(let i = 0; i < secondPass.length; i++){
        for(let j = 0; j < aboveSeven.length; j++){
            if(secondPass[i].id === aboveSeven[j]){
                finalConflictOrder.push(secondPass[i].name);
            }
        }
    }

    for(let i = 0; i < secondPass.length; i++){
        for(let j = 0; j < aboveFive.length; j++){
            if(secondPass[i].id === aboveFive[j]){
                finalConflictOrder.push(secondPass[i].name);
            }
        }
    }

    for(let i = 0; i < secondPass.length; i++){
        for(let j = 0; j < aboveThree.length; j++){
            if(secondPass[i].id === aboveThree[j]){
                finalConflictOrder.push(secondPass[i].name);
            }
        }
    }

    for(let i = 0; i < secondPass.length; i++){
        for(let j = 0; j < aboveNothing.length; j++){
            if(secondPass[i].id === aboveNothing[j]){
                finalConflictOrder.push(secondPass[i].name);
            }
        }
    }

    let i = 0;

    while(dynastyCount <= 40){
        i++;
        dynastyCount += 3;
    }

    finalDynastyOrder.splice(i, finalDynastyOrder.length);

    i = 0;

    while(conflictCount <= 40){
        i++;
        conflictCount += 3;
    }

    finalConflictOrder.splice(i,finalConflictOrder.length);
}

function pushCardsIntoDeck(){
    for(let i = 0; i < finalDynastyOrder.length; i++){
        currentDeck.cards.push("3 " + finalDynastyOrder[i]);
    }
    for(let i = 0; i < finalConflictOrder.length; i++){
        currentDeck.cards.push("3 " + finalConflictOrder[i]);
    }
    currentDeck.cards.push(dynastyMusts.one);
    currentDeck.cards.push(dynastyMusts.two);
    currentDeck.cards.push(dynastyMusts.three);

    currentDeck.cards.push(conflictMusts.one);
    currentDeck.cards.push(conflictMusts.two);
    currentDeck.cards.push(conflictMusts.three);
    currentDeck.cards.push(conflictMusts.four);
    currentDeck.cards.push(conflictMusts.five);

    currentDeck.cards.push(airProvince);
    currentDeck.cards.push(fireProvince);
    currentDeck.cards.push(voidProvince);
    currentDeck.cards.push(earthProvince);
    currentDeck.cards.push(waterProvince);

    currentDeck.cards.push(returnRoleAndElement(roleValue, elementValue));

    switch(primaryValue){
        case "crab":
            currentDeck.cards.push(strongholds.crab);
        break;
        case "crane":
            currentDeck.cards.push(strongholds.crane);
        break;
        case "dragon":
            currentDeck.cards.push(strongholds.dragon);
        break;
        case "lion":
            currentDeck.cards.push(strongholds.lion);
        break;
        case "phoenix":
            currentDeck.cards.push(strongholds.phoenix);
        break;
        case "scorpion":
            currentDeck.cards.push(strongholds.scorpion);
        break;
        case "unicorn":
            currentDeck.cards.push(strongholds.unicron);
        break;
    }

    switch(secondaryValue){
        case "crab":
                currentDeck.cards.push(splashes.crab.one);
                currentDeck.cards.push(splashes.crab.two);
        break;
        case "crane":
                currentDeck.cards.push(splashes.crane.one);
                currentDeck.cards.push(splashes.crane.two);
            break;
            case "dragon":
                    currentDeck.cards.push(splashes.dragon.one);
                    currentDeck.cards.push(splashes.dragon.two);
                break;
                case "lion":
                        currentDeck.cards.push(splashes.lion.one);
                        currentDeck.cards.push(splashes.lion.two);
                    break;
                    case "phoenix":
                            currentDeck.cards.push(splashes.phoenix.one);
                            currentDeck.cards.push(splashes.phoenix.two);
                        break;
                        case "scorpion":
                                currentDeck.cards.push(splashes.scorpion.one);
                                currentDeck.cards.push(splashes.scorpion.two);
                            break;
                            case "unicorn":
                                    currentDeck.cards.push(splashes.unicorn.one);
                                    currentDeck.cards.push(splashes.unicorn.two);
                                break;
    }
}

function finaliseDeck(){


   calculateRatings();

   filterBySides();

   pushCardsIntoDeck();

   for(let i = 0; i < currentDeck.cards.length; i++){
       currentDeck.text += currentDeck.cards[i] + " ";
   }


    console.log(currentDeck);

    localStorage.setItem("deck", JSON.stringify(currentDeck));

    location.href = "decklist.html";

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

