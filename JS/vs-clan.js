//VS CLANS
const vsCrab = document.getElementById("vs-crab");
const vsCrane = document.getElementById("vs-crane");
const vsDragon = document.getElementById("vs-dragon");
const vsLion = document.getElementById("vs-lion");
const vsPhoenix = document.getElementById("vs-phoenix");
const vsScorpion = document.getElementById("vs-scorpion");
const vsUnicorn = document.getElementById("vs-unicorn");


var vs_clans = {
    crab:false,
    crane:false,
    dragon:false,
    lion:false,
    phoenix:false,
    scorpion:false,
    unicorn:false
};


function versusClan(ele){
   
    let element = document.getElementById(ele.id);

    if(element.classList.contains("btn-light")){
        element.classList.remove("btn-light");
        element.classList.add("btn-danger");
    }
    else{
        element.classList.remove("btn-danger");
        element.classList.add("btn-light");
    }
    updateVSClans(element);
}

function updateVSClans(obj){

    let clan = obj.innerText;

    switch(clan){
        case "Crab":
            vs_clans.crab = (vs_clans.crab === true) ? false : true;
        break;
        case "Crane":
            vs_clans.crane = (vs_clans.crane === true) ? false : true;
        break;
        case "Dragon":
            vs_clans.dragon = (vs_clans.dragon === true) ? false : true;
        break;
        case "Lion":
            vs_clans.lion = (vs_clans.lion === true) ? false : true;
        break;
        case "Phoenix":
            vs_clans.phoenix = (vs_clans.phoenix === true) ? false : true;
        break;
        case "Scorpion":
            vs_clans.scorpion = (vs_clans.scorpion === true) ? false : true;
        break;
        case "Unicorn":
            vs_clans.unicorn = (vs_clans.unicorn === true) ? false : true;
        break;
        default:
            alert("something went wrong with selecting vs clan");
        break;
    }
}