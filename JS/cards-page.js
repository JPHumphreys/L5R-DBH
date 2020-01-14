const onGridClass = "on-grid";

const card = new Card();
const ui = new Card();


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

function getName(element){
    return element.innerText;
}

function cardSelect(element, item){

    const design = element.attributes.name.value;

    if(card[item] === undefined){
        
        element.classList.add(design);
    }
    else if(element !== ui[item]){
        
        ui[item].classList.remove(...ui[item].classList);
        ui[item].classList.add(onGridClass);
        element.classList.add(design);
    }

    card[item] = getName(element);
    ui[item] = element;

    //* removes card that dont apply to that filter *//
    cardFilter(element.innerText, item);

}

function cardFilter(name, item){

    const cards = document.querySelectorAll(".card");
    
    //sets the value of the card to the aspect of the card.
    card[item] = name;

    for(let i = 0; i < cards.length; i++){

        if(card[item].toUpperCase() === 
        cards[i].attributes[item].value
        .toUpperCase()){
            cards[i].style.visibility = "visible";
        }
        else{
            //console.log(cards[i].style.visibility);
            cards[i].style.visibility = "hidden";
        }

    }

}