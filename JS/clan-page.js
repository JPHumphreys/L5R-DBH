const clanParent = document.getElementById("clan-main-button");
const sideParent = document.getElementById("clan-side-button");
const searchButton = document.getElementById("search-button");
const clanRenderLocation = document.getElementById("clan-card-images");
const cardRenderLocation = document.getElementById("card-render-location");


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