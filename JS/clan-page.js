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

function vsAdd(ele){
    //collect textcontent
   switch(ele.innerText){
       case "Crab":
            changeButtonStyle(crabVs);
       break;
       case "Crane":
            changeButtonStyle(craneVs);
       break;
        case "Dragon":
            changeButtonStyle(dragonVs);
        break;
        case "Lion":
            changeButtonStyle(lionVs);
        break;
        case "Phoenix":
            changeButtonStyle(phoenixVs);
        break;
        case "Scorpion":
            changeButtonStyle(scorpionVs);
        break;
        case "Unicorn":
            changeButtonStyle(unicornVs);
        break;
   }
    
}

