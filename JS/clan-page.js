const clanParent = document.getElementById("clan-main-button");
const sideParent = document.getElementById("clan-side-button");
const vsParent = document.getElementById("vs-main-button");

const searchButton = document.getElementById("search-button");
const clanRenderLocation = document.getElementById("clan-card-images");
const cardRenderLocation = document.getElementById("card-render-location");

const crabVs = document.getElementById("crab-vs-button");
const craneVs = document.getElementById("crane-vs-button");
const dragonVs = document.getElementById("dragon-vs-button");
const lionVs = document.getElementById("lion-vs-button");
const phoenixVs = document.getElementById("phoenix-vs-button");
const scorpionVs = document.getElementById("scorpion-vs-button");
const unicornVs = document.getElementById("unicorn-vs-button");

let updateSliderValue;

let vsClansList = {
    "crab":false,
    "crane":false,
    "dragon":false,
    "lion":false,
    "phoenix":false,
    "scorpion":false,
    "unicorn":false
};

function clanSelect(ele){
    clanParent.innerText = ele.textContent;
    buttonCheck();
}

function sideSelect(ele){
    sideParent.innerText = ele.textContent;
    buttonCheck();
}

function buttonCheck(){
    if(clanParent.innerText === "Clan Select"){

    }else if(sideParent.innerText === "Deck Select"){

    }
    else{
        searchButton.classList.remove("btn-danger");
        searchButton.classList.add("btn-success");
    }
}

function changeButtonStyle(obj){

    if(obj.classList.contains("btn-dark")){
        obj.classList.remove("btn-dark");
        obj.classList.add("btn-success");
    }
    else{
        obj.classList.remove("btn-success");
        obj.classList.add("btn-dark");
    }
}

function vsClanChecker(obj, clanName){

    switch(clanName){
        case "crab":
            vsClansList.crab = (vsClansList.crab === true) ? false : true;
            //console.log(vsClansList.crab);
        break;
        case "crane":
            vsClansList.crane = (vsClansList.crane === true) ? false : true;
        break;
        case "dragon":
            vsClansList.dragon = (vsClansList.dragon === true) ? false : true;
        break;
        case "lion":
            vsClansList.lion = (vsClansList.lion === true) ? false : true;
        break;
        case "phoenix":
            vsClansList.phoenix = (vsClansList.phoenix === true) ? false : true;
        break;
        case "scorpion":
            vsClansList.scorpion = (vsClansList.scorpion === true) ? false : true;
        break;
        case "unicorn":
            vsClansList.unicorn = (vsClansList.unicorn === true) ? false : true;
        break;
        default:
            alert("something went wrong with selecting vs clan");
        break;
    }

}

function vsAdd(ele){
    //collect textcontent
   switch(ele.innerText){
       case "Crab":
            changeButtonStyle(crabVs);
            vsClanChecker(vsClansList,"crab");
       break;
       case "Crane":
            changeButtonStyle(craneVs);
            vsClanChecker(vsClansList,"crane");
       break;
        case "Dragon":
            changeButtonStyle(dragonVs);
            vsClanChecker(vsClansList,"dragon");
        break;
        case "Lion":
            changeButtonStyle(lionVs);
            vsClanChecker(vsClansList,"lion");
        break;
        case "Phoenix":
            changeButtonStyle(phoenixVs);
            vsClanChecker(vsClansList,"phoenix");
        break;
        case "Scorpion":
            changeButtonStyle(scorpionVs);
            vsClanChecker(vsClansList,"scorpion");
        break;
        case "Unicorn":
            changeButtonStyle(unicornVs);
            vsClanChecker(vsClansList,"unicorn");
        break;
   }
    
}

