const cardRenderLocation = document.getElementById("card-render-location");

function hoverBlurr(element){
    let parent = element.parentElement;
    
    for(let i = 0; i < parent.children.length; i++){
        parent.children[i].classList.toggle("hover-row");
    }
}

function cardClick(element){
    console.log("beep boop", element);
}

