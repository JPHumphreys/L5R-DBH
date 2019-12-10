const deckbuilderClass = "deckbuilder-grid";
const vsIDText = "vs-";
const vsClansContainer = document.getElementById("vs-clan");

let deckResult = {
    primary:"",
    secondary:"",
    role:"",
    element:"",
    vsclans : {
        crab:false,
        crane:false,
        dragon:false,
        lion:false,
        phoenix:false,
        scorpion:false,
        unicorn:false
    }
};

let currentSelectedPrimaryClan;
let currentSelectedSecondaryClan;
let currentSelectedRole;
let currentSelectedElement;

function primaryClan(element){

    let design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(currentSelectedPrimaryClan === undefined){

        currentSelectedPrimaryClan = element;
        deckResult.primary = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== currentSelectedPrimaryClan){

        //* spread operator *//
        currentSelectedPrimaryClan.classList.remove(...currentSelectedPrimaryClan.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        currentSelectedPrimaryClan.classList.add(deckbuilderClass);
        element.classList.add(design);
        currentSelectedPrimaryClan = element;

        //* set the primary result of the deck to the deckresult object *//
        deckResult.primary = getClanName(element);
    }
}

function getClanName(element){
    return element.innerText;
}

function splashClan(element){

    let design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(currentSelectedSecondaryClan === undefined){

        currentSelectedSecondaryClan = element;
        deckResult.secondary = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== currentSelectedSecondaryClan){

        //* spread operator *//
        currentSelectedSecondaryClan.classList.remove(...currentSelectedSecondaryClan.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        currentSelectedSecondaryClan.classList.add(deckbuilderClass);
        element.classList.add(design);
        currentSelectedSecondaryClan = element;

        //* set the primary result of the deck to the deckresult object *//
        deckResult.secondary = getClanName(element);
    }

}

function roleSelector(element){

    let design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(currentSelectedRole === undefined){

        currentSelectedRole = element;
        deckResult.role = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== currentSelectedRole){

        //* spread operator *//
        currentSelectedRole.classList.remove(...currentSelectedRole.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        currentSelectedRole.classList.add(deckbuilderClass);
        element.classList.add(design);
        currentSelectedRole = element;

        //* set the primary result of the deck to the deckresult object *//
        deckResult.role = getClanName(element);
    }
}

function elementSelector(element){

    let design = element.attributes.name.value; //* uses the name attribute to set the style *//

    if(currentSelectedElement === undefined){

        currentSelectedElement = element;
        deckResult.element = getClanName(element);
        element.classList.add(design);
    }
    else if(element !== currentSelectedElement){

        //* spread operator *//
        currentSelectedElement.classList.remove(...currentSelectedElement.classList);

        //* add deckbuilder back and add the new design onto the new current *//
        currentSelectedElement.classList.add(deckbuilderClass);
        element.classList.add(design);
        currentSelectedElement = element;

        //* set the primary result of the deck to the deckresult object *//
        deckResult.element = getClanName(element);
    }
}

function vsClans(element){

    let clan = element.innerText;

    switch(clan){
        case "Crab":
            deckResult.vsclans.crab = (deckResult.vsclans.crab === true) ? false : true;
        break;
        case "Crane":
            deckResult.vsclans.crane = (deckResult.vsclans.crane === true) ? false : true;
        break;
        case "Dragon":
            deckResult.vsclans.dragon = (deckResult.vsclans.dragon === true) ? false : true;
        break;
        case "Lion":
            deckResult.vsclans.lion = (deckResult.vsclans.lion === true) ? false : true;
        break;
        case "Phoenix":
            deckResult.vsclans.phoenix = (deckResult.vsclans.phoenix === true) ? false : true;
        break;
        case "Scorpion":
            deckResult.vsclans.scorpion = (deckResult.vsclans.scorpion === true) ? false : true;
        break;
        case "Unicorn":
            deckResult.vsclans.unicorn = (deckResult.vsclans.unicorn === true) ? false : true;
        break;
        default:
            alert("something went wrong with selecting vs clan");
        break;
    }

    vsClanDisplayer();
}

function vsClanDisplayer(){
    for(let i in deckResult.vsclans){

        let currentClan = document.getElementById(vsIDText + i);
        let design = currentClan.attributes.name.value;

        if(deckResult.vsclans[i] === true){
            //* display the design *//
            currentClan.classList.add(design);
        }
        else{
            //* spread operator *//
            currentClan.classList.remove(...currentClan.classList);

            //* add deckbuilder back and add the new design onto the new current *//
            currentClan.classList.add(deckbuilderClass);
            //* remove the design *//

        }
    }
}

function getDeck(){
    return deckResult;
}
