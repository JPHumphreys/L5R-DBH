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
        ui[item] = element;
        card[item] = getName(element);
        element.classList.add(design);
    }
    else if(element !== ui[item]){
        ui[item].classList.remove(...ui[item].classList);
        ui[item].classList.add(onGridClass);
        element.classList.add(design);
        ui[item] = element;
        card[item] = getName(element);
    }

}
