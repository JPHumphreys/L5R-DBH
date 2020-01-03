function addText(element){
    const text = document.querySelector("." + element);
    text.style.opacity = 1;
}

function removeText(element){
    const text = document.querySelector("." + element);
    text.style.opacity = 0;
}