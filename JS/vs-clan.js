//VS CLANS
const vsCrab = document.getElementById("vs-crab");
const vsCrane = document.getElementById("vs-crane");
const vsDragon = document.getElementById("vs-dragon");
const vsLion = document.getElementById("vs-lion");
const vsPhoenix = document.getElementById("vs-phoenix");
const vsScorpion = document.getElementById("vs-scorpion");
const vsUnicorn = document.getElementById("vs-unicorn");


var vsClans = {
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