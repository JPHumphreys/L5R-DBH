//VS CLANS
const vsCrab = document.getElementById("vs-crab");
const vsCrane = document.getElementById("vs-crane");
const vsDragon = document.getElementById("vs-dragon");
const vsLion = document.getElementById("vs-lion");
const vsPhoenix = document.getElementById("vs-phoenix");
const vsScorpion = document.getElementById("vs-scorpion");
const vsUnicorn = document.getElementById("vs-unicorn");

function versusClan(ele){
    let element = ele.innerText;

    switch(element){
        case "Crab":
            if(vs_clans.crab !== true){
                vsCrab.classList.remove("btn-light");
                vsCrab.classList.add("btn-danger");
                vs_clans.crab = true;
            }
            else{
                vsCrab.classList.remove("btn-danger");
                vsCrab.classList.add("btn-light");
                vs_clans.crab = false;
            }
            //console.log(vs_clans);
        break;
        case "Crane":
            if(vs_clans.crane !== true){
                vsCrane.classList.remove("btn-light");
                vsCrane.classList.add("btn-danger");
                vs_clans.crane = true;
            }
            else{
                vsCrane.classList.remove("btn-danger");
                vsCrane.classList.add("btn-light");
                vs_clans.crane = false;
            }
            //console.log(vs_clans);
        break;
        case "Dragon":
            if(vs_clans.dragon !== true){
                vsDragon.classList.remove("btn-light");
                vsDragon.classList.add("btn-danger");
                vs_clans.dragon = true;
            }
            else{
                vsDragon.classList.remove("btn-danger");
                vsDragon.classList.add("btn-light");
                vs_clans.dragon = false;
            }
            //console.log(vs_clans);
        break;
        case "Lion":
            if(vs_clans.lion !== true){
                vsLion.classList.remove("btn-light");
                vsLion.classList.add("btn-danger");
                vs_clans.lion = true;
            }
            else{
                vsLion.classList.remove("btn-danger");
                vsLion.classList.add("btn-light");
                vs_clans.lion = false;
            }
            //console.log(vs_clans);
        break;
        case "Phoenix":
            if(vs_clans.phoenix !== true){
                vsPhoenix.classList.remove("btn-light");
                vsPhoenix.classList.add("btn-danger");
                vs_clans.phoenix = true;
            }
            else{
                vsPhoenix.classList.remove("btn-danger");
                vsPhoenix.classList.add("btn-light");
                vs_clans.phoenix = false;
            }
            //console.log(vs_clans);
        break;
        case "Scorpion":
            if(vs_clans.scorpion !== true){
                vsScorpion.classList.remove("btn-light");
                vsScorpion.classList.add("btn-danger");
                vs_clans.scorpion = true;
            }
            else{
                vsScorpion.classList.remove("btn-danger");
                vsScorpion.classList.add("btn-light");
                vs_clans.scorpion = false;
            }
            //console.log(vs_clans);
        break;
        case "Unicorn":
            if(vs_clans.unicorn !== true){
                vsUnicorn.classList.remove("btn-light");
                vsUnicorn.classList.add("btn-danger");
                vs_clans.unicorn = true;
            }
            else{
                vsUnicorn.classList.remove("btn-danger");
                vsUnicorn.classList.add("btn-light");
                vs_clans.unicorn = false;
            }
            //console.log(vs_clans);
        break;
        
    }
}
