const deckbuilderClass = "deckbuilder-grid";

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

function tester(ele){
    console.log(ele.innerText);
}

/*
function updateVSClans(obj){

    let clan = obj.innerText;

    switch(clan){
        case "Crab":
            vsClans.crab = (vsClans.crab === true) ? false : true;
        break;
        case "Crane":
            vsClans.crane = (vsClans.crane === true) ? false : true;
        break;
        case "Dragon":
            vsClans.dragon = (vsClans.dragon === true) ? false : true;
        break;
        case "Lion":
            vsClans.lion = (vsClans.lion === true) ? false : true;
        break;
        case "Phoenix":
            vsClans.phoenix = (vsClans.phoenix === true) ? false : true;
        break;
        case "Scorpion":
            vsClans.scorpion = (vsClans.scorpion === true) ? false : true;
        break;
        case "Unicorn":
            vsClans.unicorn = (vsClans.unicorn === true) ? false : true;
        break;
        default:
            alert("something went wrong with selecting vs clan");
        break;
    }
}

*/

