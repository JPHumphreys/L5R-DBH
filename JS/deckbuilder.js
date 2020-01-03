const onGridClass = "on-grid";
const vsIDText = "vs-";

const vsClansContainer = document.getElementById("vs-clan");
const submitButton = document.getElementById("submit-button");

function Deck(){

    //* private variables *//
    let primary = undefined;
    let secondary = undefined;
    let role = undefined;
    let element = undefined;
    //*-------------------*//

    Object.defineProperty(this, "primary", {
        get: function(){
            return primary;
        },
        set: function(value){
            primary = value;
        }
    });
    
    Object.defineProperty(this, "secondary", {
        get: function(){
            return secondary;
        },
        set: function(value){
            secondary = value;
        }
    });

    Object.defineProperty(this, "role", {
        get: function(){
            return role;
        },
        set: function(value){
            role = value;
        }
    });

    Object.defineProperty(this, "element",{
        get: function(){
            return element;
        },
        set: function(value){
            element = value;
        }
    });

};

let ui = new Deck();
addReadyReturner(ui);
let deck = new Deck();
addVSClans(deck);

function primaryClan(element){

    const design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(ui.primary === undefined){

        ui.primary = element;
        deck.primary = getClanName(element);
        element.classList.add(design);
        
    }
    else if(element !== ui.primary){

        //* spread operator *//
        ui.primary.classList.remove(...ui.primary.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        ui.primary.classList.add(onGridClass);
        element.classList.add(design);
        ui.primary = element;

        //* set the primary result of the deck to the deckresult object *//
        deck.primary = getClanName(element);
    }
    isDeckFinished();
}

function splashClan(element){

    const design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(ui.secondary === undefined){

        ui.secondary = element;
        deck.secondary = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== ui.secondary){

        //* spread operator *//
        ui.secondary.classList.remove(...ui.secondary.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        ui.secondary.classList.add(onGridClass);
        element.classList.add(design);
        ui.secondary = element;

        //* set the primary result of the deck to the deckresult object *//
        deck.secondary = getClanName(element);
    }
    isDeckFinished();
}

function roleSelector(element){

    const design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(ui.role === undefined){

        ui.role = element;
        deck.role = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== ui.role){

        //* spread operator *//
        ui.role.classList.remove(...ui.role.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        ui.role.classList.add(onGridClass);
        element.classList.add(design);
        ui.role = element;

        //* set the primary result of the deck to the deckresult object *//
        deck.role = getClanName(element);
    }
    isDeckFinished();
}

function elementSelector(element){

    const design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(ui.element === undefined){

        ui.element = element;
        deck.element = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== ui.element){

        //* spread operator *//
        ui.element.classList.remove(...ui.element.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        ui.element.classList.add(onGridClass);
        element.classList.add(design);
        ui.element = element;

        //* set the primary result of the deck to the deckresult object *//
        deck.element = getClanName(element);
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


function getClanName(element){
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
