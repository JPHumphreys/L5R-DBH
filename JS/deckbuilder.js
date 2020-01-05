const onGridClass = "on-grid";
const vsIDText = "vs-";

const vsClansContainer = document.getElementById("vs-clan");
const submitButton = document.getElementById("submit-button");

let ui = new Deck();
addReadyReturner(ui);
let deck = new Deck();
addVSClans(deck);

function deckSelect(element, item){

    const design = element.attributes.name.value;

    if(deck[item] === undefined){
        ui[item] = element;
        deck[item] = getName(element);
        element.classList.add(design);
    }
    else if(element !== ui[item]){
        ui[item].classList.remove(...ui[item].classList);
        ui[item].classList.add(onGridClass);
        element.classList.add(design);
        ui[item] = element;
        deck[item] = getName(element);
    }
    isDeckFinished();
}

function vsClans(element){

    const clan = element.innerText;

    switch(clan){
        case "Crab":
            deck.vsClans.crab = (deck.vsClans.crab === true) ? false : true;
        break;
        case "Crane":
            deck.vsClans.crane = (deck.vsClans.crane === true) ? false : true;
        break;
        case "Dragon":
            deck.vsClans.dragon = (deck.vsClans.dragon === true) ? false : true;
        break;
        case "Lion":
            deck.vsClans.lion = (deck.vsClans.lion === true) ? false : true;
        break;
        case "Phoenix":
            deck.vsClans.phoenix = (deck.vsClans.phoenix === true) ? false : true;
        break;
        case "Scorpion":
            deck.vsClans.scorpion = (deck.vsClans.scorpion === true) ? false : true;
        break;
        case "Unicorn":
            deck.vsClans.unicorn = (deck.vsClans.unicorn === true) ? false : true;
        break;
        default:
            alert("something went wrong with selecting vs clan");
        break;
    }

    vsClanDisplayer();
    isDeckFinished();
}

function vsClanDisplayer(){
    for(let i in deck.vsClans){

        const currentClan = document.getElementById(vsIDText + i);
        const design = currentClan.attributes.name.value;

        if(deck.vsClans[i] === true){
            //* display the design *//
            currentClan.classList.add(design);
        }
        else{
            //* spread operator *//
            currentClan.classList.remove(...currentClan.classList);

            //* add deckbuilder back and add the new design onto the new current *//
            currentClan.classList.add(onGridClass);
            //* remove the design *//

        }
    }
}


function getName(element){
    return element.innerText;
}

function getDeck(){
    return deck;
}

function isDeckFinished(){

    if(ui.deckValue() >= 4){ //* primary + secondary + role + element
        submitButton.classList.remove("btn-outline-danger");
        submitButton.classList.add("btn-success");
        ui.isDeckReady = true;
    }
    //console.log(ui.deckValue());
}

function addVSClans(obj){
    obj.vsClans = {
        crab:false,
        crane:false,
        dragon:false,
        lion:false,
        phoenix:false,
        scorpion:false,
        unicorn:false
    };
}

function addReadyReturner(obj){
    obj.deckValue = function (){
        let value = 0;

        if(this.primary !== undefined) value++;
        if(this.secondary !== undefined) value++;
        if(this.role !== undefined) value++;
        if(this.element !== undefined) value++;
        
        return value;
    };
    obj.isDeckReady = false;
}
