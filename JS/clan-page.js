let clanParent = document.getElementById("clan-main-button");
let sideParent = document.getElementById("clan-side-button");
let searchButton = document.getElementById("search-button");


function clanSelect(ele){
    clanParent.innerText = ele.textContent;
    test();
    buttonCheck();
}

function sideSelect(ele){
    sideParent.innerText = ele.textContent;
    test();
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