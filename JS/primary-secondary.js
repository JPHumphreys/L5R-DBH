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

let lastPriClan = document.getElementById("primary-crab");
let lastSecClan = document.getElementById("splash-crab");

let primaryValue;
let secondaryValue;

function primaryClan(ele){

    let mainClan = document.getElementById(ele.id);

    mainClan.classList.remove("btn-light");
    mainClan.classList.add("btn-warning");

    if(mainClan !== lastPriClan){
        lastPriClan.classList.remove("btn-warning");
        lastPriClan.classList.add("btn-light");
        lastPriClan = mainClan;
        primaryValue = lastPriClan.getAttribute("value");
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
