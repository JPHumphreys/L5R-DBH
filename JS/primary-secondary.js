//PRIMARY CLANS
const priCrab = document.getElementById("primary-crab");
const priCrane = document.getElementById("primary-crane");
const priDragon = document.getElementById("primary-dragon");
const priLion = document.getElementById("primary-lion");
const priPhoenix = document.getElementById("primary-phoenix");
const priScorpion = document.getElementById("primary-scorpion");
const priUnicorn = document.getElementById("primary-unicorn");

//SECONDARY CLANS
const secCrab = document.getElementById("splash-crab");
const secCrane = document.getElementById("splash-crane");
const secDragon = document.getElementById("splash-dragon");
const secLion = document.getElementById("splash-lion");
const secPhoenix = document.getElementById("splash-phoenix");
const secScorpion = document.getElementById("splash-scorpion");
const secUnicorn = document.getElementById("splash-unicorn");

function mainClan(ele){
    let element = ele.innerText;

    switch(element){
        case "Crab":
         //set new to crab 
         priCrab.classList.remove("btn-light");
         priCrab.classList.add("btn-warning");
         clanCheck(priCrab);
         //set old to blank
         if(priCrab != lastPriClan)
         {
             lastPriClan.classList.remove("btn-warning");
             lastPriClan.classList.add("btn-light");
             lastPriClan = priCrab;
         }
 
        break;
        case "Crane":
         //set new to crab 
         priCrane.classList.remove("btn-light");
         priCrane.classList.add("btn-warning");
         clanCheck(priCrane);
         //set old to blank
         if(priCrane != lastPriClan)
         {
             lastPriClan.classList.remove("btn-warning");
             lastPriClan.classList.add("btn-light");
             lastPriClan = priCrane;
         }
        break;
        case "Dragon":
             priDragon.classList.remove("btn-light");
             priDragon.classList.add("btn-warning");
             clanCheck(priDragon);
             //set old to blank
             if(priDragon != lastPriClan)
             {
                 lastPriClan.classList.remove("btn-warning");
                 lastPriClan.classList.add("btn-light");
                 lastPriClan = priDragon;
             }
        break;
        case "Lion":
         priLion.classList.remove("btn-light");
         priLion.classList.add("btn-warning");
         clanCheck(priLion);
         //set old to blank
         if(priLion != lastPriClan)
         {
             lastPriClan.classList.remove("btn-warning");
             lastPriClan.classList.add("btn-light");
             lastPriClan = priLion;
         }
        break;
        case "Phoenix":
             priPhoenix.classList.remove("btn-light");
             priPhoenix.classList.add("btn-warning");
             clanCheck(priPhoenix);
             //set old to blank
             if(priPhoenix != lastPriClan)
             {
                 lastPriClan.classList.remove("btn-warning");
                 lastPriClan.classList.add("btn-light");
                 lastPriClan = priPhoenix;
             }
        break;
        case "Scorpion":
         priScorpion.classList.remove("btn-light");
         priScorpion.classList.add("btn-warning");
         clanCheck(priScorpion);
         //set old to blank
         if(priScorpion != lastPriClan)
         {
             lastPriClan.classList.remove("btn-warning");
             lastPriClan.classList.add("btn-light");
             lastPriClan = priScorpion;
         }
        break;
        case "Unicorn":
             priUnicorn.classList.remove("btn-light");
             priUnicorn.classList.add("btn-warning");
             clanCheck(priUnicorn);
             //set old to blank
             if(priUnicorn != lastPriClan)
             {
                 lastPriClan.classList.remove("btn-warning");
                 lastPriClan.classList.add("btn-light");
                 lastPriClan = priUnicorn;
             }
        break;
    }
}

function splashClan(ele){
    let element = ele.innerText;

    switch(element){
        case "Crab":
         //set new to crab 
         secCrab.classList.remove("btn-light");
         secCrab.classList.add("btn-warning");
         //set old to blank
         if(secCrab != lastSecClan)
         {
             lastSecClan.classList.remove("btn-warning");
             lastSecClan.classList.add("btn-light");
             lastSecClan = secCrab;
         }
 
        break;
        case "Crane":
         //set new to crab 
         secCrane.classList.remove("btn-light");
         secCrane.classList.add("btn-warning");
         //set old to blank
         if(secCrane != lastSecClan)
         {
             lastSecClan.classList.remove("btn-warning");
             lastSecClan.classList.add("btn-light");
             lastSecClan = secCrane;
         }
        break;
        case "Dragon":
             secDragon.classList.remove("btn-light");
             secDragon.classList.add("btn-warning");
             //set old to blank
             if(secDragon != lastSecClan)
             {
                 lastSecClan.classList.remove("btn-warning");
                 lastSecClan.classList.add("btn-light");
                 lastSecClan = secDragon;
             }
        break;
        case "Lion":
         secLion.classList.remove("btn-light");
         secLion.classList.add("btn-warning");
         //set old to blank
         if(secLion != lastSecClan)
         {
             lastSecClan.classList.remove("btn-warning");
             lastSecClan.classList.add("btn-light");
             lastSecClan = secLion;
         }
        break;
        case "Phoenix":
             secPhoenix.classList.remove("btn-light");
             secPhoenix.classList.add("btn-warning");
             //set old to blank
             if(secPhoenix != lastSecClan)
             {
                 lastSecClan.classList.remove("btn-warning");
                 lastSecClan.classList.add("btn-light");
                 lastSecClan = secPhoenix;
             }
        break;
        case "Scorpion":
         secScorpion.classList.remove("btn-light");
         secScorpion.classList.add("btn-warning");
         //set old to blank
         if(secScorpion != lastSecClan)
         {
             lastSecClan.classList.remove("btn-warning");
             lastSecClan.classList.add("btn-light");
             lastSecClan = secScorpion;
         }
        break;
        case "Unicorn":
             secUnicorn.classList.remove("btn-light");
             secUnicorn.classList.add("btn-warning");
             //set old to blank
             if(secUnicorn != lastSecClan)
             {
                 lastSecClan.classList.remove("btn-warning");
                 lastSecClan.classList.add("btn-light");
                 lastSecClan = secUnicorn;
             }
        break;
    }
}
