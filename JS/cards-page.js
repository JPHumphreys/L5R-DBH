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
    
    //*sets the value of the card to the aspect of the card.
    card[item] = name;

    const clan = setToCAPS(card.clan);
    const deck = setToCAPS(card.deck);
    const type = setToCAPS(card.type);

    //debugger;

    for(let i = 0; i < cards.length; i++){

        const localClan = setToCAPS(cards[i].attributes['clan'].value);
        const localDeck = setToCAPS(cards[i].attributes['deck'].value);
        const localType = setToCAPS(cards[i].attributes['type'].value);

        if(
        (clan === localClan || clan === undefined )
        &&
        (deck === localDeck || deck === undefined )
        &&
        (type === localType || type === undefined )){
            cards[i].hidden = false;
        }
        else{
            
            cards[i].hidden = true;
        }

    }

}

function setToCAPS(element){
    if(element != undefined){
        return element.toUpperCase();
    }
    else{
        return element;
    }
}