//ELEMENTS
const fire = document.getElementById("fire-button");
const water = document.getElementById("water-button");
const earth = document.getElementById("earth-button");
const air = document.getElementById("air-button");
const voi = document.getElementById("void-button");

//ROLES
const keeper = document.getElementById("keeper-button");
const seeker = document.getElementById("seeker-button");

function roleSelect(ele){
    if(ele.innerText == "Keeper"){
        //set new button type
        keeper.classList.remove("btn-light");
        keeper.classList.add("btn-danger");
        //put old as old
        seeker.classList.remove("btn-danger");
        seeker.classList.add("btn-light");
    }
    else{
        //set new button type
        seeker.classList.remove("btn-light");
        seeker.classList.add("btn-danger");
        //put old and old
        keeper.classList.remove("btn-danger");
        keeper.classList.add("btn-light");
    }
    
}

function elementSelect(ele){
    element = ele.innerText;

     switch(element){
         case "Fire":
            //set this to danger
            fire.classList.remove("btn-light");
            fire.classList.add("btn-danger");
            //set others back to light
            lastElement.classList.remove("btn-danger");
            lastElement.classList.add("btn-light");
            lastElement = fire;
         break;
         case "Air":
            //set this to danger
             air.classList.remove("btn-light");
             air.classList.add("btn-danger");
            //set others back to light
             lastElement.classList.remove("btn-danger");
             lastElement.classList.add("btn.light");
             lastElement = air;
         break;
         case "Earth":
         //set this to danger
             earth.classList.remove("btn-light");
             earth.classList.add("btn-danger");
         //set others back to light
             lastElement.classList.remove("btn-danger");
             lastElement.classList.add("btn.light");
             lastElement = earth;
         break;
         case "Water":
         //set this to danger
             water.classList.remove("btn-light");
             water.classList.add("btn-danger");
         //set others back to light
             lastElement.classList.remove("btn-danger");
             lastElement.classList.add("btn.light");
             lastElement = water;
         break;
         case "Void":
         //set this to danger
             voi.classList.remove("btn-light");
             voi.classList.add("btn-danger");
         //set others back to light
             lastElement.classList.remove("btn-danger");
             lastElement.classList.add("btn.light");
             lastElement = voi;
        break;
     }
}