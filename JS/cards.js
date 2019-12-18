const cardRenderLocation = document.getElementById("card-render-location");

function hoverBlurr(element, type){
    
    let parent = element.parentElement;
    switch(type){
            case "enter": 
                for(let i = 0; i < parent.children.length; i++){
                    parent.children[i].classList.add("hover-row");
                }
                return;
            case "leave":
                for(let i = 0; i < parent.children.length; i++){
                parent.children[i].classList.remove("hover-row");
                }
                return;
            default: console.alert("try refreshing the page - something went wrong");
                return;
        } 
}

function cardClick(element){
    console.log("beep boop", element);
}

function clanSelect(element){

}

function deckTypeSelect(element){

}

function cardTypeSelect(element){

}

