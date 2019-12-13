function tester(){
    console.log("beep boop");
}

function overHoverBlurr(element){
    let parent = element.parentElement;
    
    for(let i = 0; i < parent.children.length; i++){
        //console.log(parent.children[i]);
        parent.children[i].classList.add("hover-row");
    }
   
}

function leaveHoverBlurr(element){
    console.log("beep boop");
}

