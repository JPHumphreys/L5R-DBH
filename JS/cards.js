const cardRenderLocation = document.getElementById("card-render-location");

function overHoverBlurr(element){
    let parent = element.parentElement;
    
    for(let i = 0; i < parent.children.length; i++){
        //console.log(parent.children[i]);
        parent.children[i].classList.add("hover-row");
        console.log(element.children);
    }

    let buttonDiv = element.querySelectorAll(".card-buttons");
    //console.log(buttonDiv[0].hidden);
    //buttonDiv[0].hidden = false;
   
}

function leaveHoverBlurr(element){
    let parent = element.parentElement;
    
    for(let i = 0; i < parent.children.length; i++){
        //console.log(parent.children[i]);
        parent.children[i].classList.remove("hover-row");
    }

    let buttonDiv = element.querySelectorAll(".card-buttons");
    //console.log(buttonDiv[0].hidden);
    //buttonDiv[0].hidden = true;
}

