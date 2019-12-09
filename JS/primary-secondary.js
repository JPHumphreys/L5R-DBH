//PRIMARY CLANS
const priCrab = document.getElementById("primary-crab");
const priCrane = document.getElementById("primary-crane");
const priDragon = document.getElementById("primary-dragon");
const priLion = document.getElementById("primary-lion");
const priPhoenix = document.getElementById("primary-phoenix");
const priScorpion = document.getElementById("primary-scorpion");
const priUnicorn = document.getElementById("primary-unicorn");

//SECONDARY CLANS
const secCrab = document.getElementById("splash-crab");
const secCrane = document.getElementById("splash-crane");
const secDragon = document.getElementById("splash-dragon");
const secLion = document.getElementById("splash-lion");
const secPhoenix = document.getElementById("splash-phoenix");
const secScorpion = document.getElementById("splash-scorpion");
const secUnicorn = document.getElementById("splash-unicorn");

const deckbuilder = "deckbuilder-grid";

let currentSelectedPrimaryClan;
let currentSelectedSecondaryClan;

let primaryValue;
let secondaryValue;

function primaryClan(ele){

    let design = ele.attributes.name.value;
    if(currentSelectedPrimaryClan === undefined){
        currentSelectedPrimaryClan = ele;
        ele.classList.add(design);
    }
    else if(ele !== currentSelectedPrimaryClan){
        //* spread operator *//
        currentSelectedPrimaryClan.classList.remove(...currentSelectedPrimaryClan.classList);
        //* add deckbuilder back and add the new design onto the new current*//
        currentSelectedPrimaryClan.classList.add(deckbuilder);
        ele.classList.add(design);
        currentSelectedPrimaryClan = ele;
    }

}

function splashClan(ele){

    let secondaryClan = document.getElementById(ele.id);

    secondaryClan.classList.remove("btn-light");
    secondaryClan.classList.add("btn-warning");

    if(secondaryClan !== lastSecClan){
        lastSecClan.classList.remove("btn-warning");
        lastSecClan.classList.add("btn-light");
        lastSecClan = secondaryClan;
        secondaryValue = lastSecClan.getAttribute("value");
    }
}

function tester(ele){
    console.log(ele.innerText);
}
