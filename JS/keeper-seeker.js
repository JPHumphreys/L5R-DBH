//ELEMENTS
const fire = document.getElementById("fire-button");
const water = document.getElementById("water-button");
const earth = document.getElementById("earth-button");
const air = document.getElementById("air-button");
const voi = document.getElementById("void-button");

//ROLES
const keeper = document.getElementById("keeper-button");
const seeker = document.getElementById("seeker-button");


let lastElement = document.getElementById("temp-button");
let lastRole = document.getElementById("keeper-button");


function roleCheck(ele){

    let role = document.getElementById(ele.id);

    role.classList.remove("btn-light");
    role.classList.add("btn-danger");

    if(role !== lastRole){
        lastRole.classList.remove("btn-danger");
        lastRole.classList.add("btn-light");
        lastRole = role;
    }
}


function elementCheck(ele){

    let element = document.getElementById(ele.id);

    element.classList.remove("btn-light");
    element.classList.add("btn-danger");
    //set others back
    lastElement.classList.remove("btn-danger");
    lastElement.classList.add("btn-light");
    lastElement = element;
}

