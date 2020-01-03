function addElement(property, newElement){
    let counter = 0 ;
    for(let value in property){
        if(newElement != property[value]){
            counter++;
        }
    }
    //* if counter does not equal length - then 1 element matched *//
    if(counter === property.length){
        property.push(newElement);
    }
}

function removeElement(property, element){
    for(let value in property){
        if(element === property[value]){
            property.splice(value, 1);
        }
    }
}