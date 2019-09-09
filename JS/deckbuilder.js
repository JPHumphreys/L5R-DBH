//PRIMARY CLANS
const priCrab = document.getElementById('primary-crab');
const priCrane = document.getElementById('primary-crane');
const priDragon = document.getElementById('primary-dragon');
const priLion = document.getElementById('primary-lion');
const priPhoenix = document.getElementById('primary-phoenix');
const priScorpion = document.getElementById('primary-scorpion');
const priUnicorn = document.getElementById('primary-unicorn');

//STRONGHOLDS
const strongholdCrab = 'Shiro Nishiyama';
const strongholdCrane = 'Shizuka Toshi';
const strongholdDragon = "Mountain's Anvil Castle";
const strongholdLion = 'Yōjin no Shiro';
const strongholdPhoenix = "Isawa Mori Seidō";
const strongholdScorpion = 'City of the Open Hand';
const strongholdUnicorn = 'Golden Plains Outpost';

//SECONDARY CLANS
const secCrab = document.getElementById('splash-crab');
const secCrane = document.getElementById('splash-crane');
const secDragon = document.getElementById('splash-dragon');
const secLion = document.getElementById('splash-lion');
const secPhoenix = document.getElementById('splash-phoenix');
const secScorpion = document.getElementById('splash-scorpion');
const secUnicorn = document.getElementById('splash-unicorn');

//VS CLANS
const vsCrab = document.getElementById('vs-crab');
const vsCrane = document.getElementById('vs-crane');
const vsDragon = document.getElementById('vs-dragon');
const vsLion = document.getElementById('vs-lion');
const vsPhoenix = document.getElementById('vs-phoenix');
const vsScorpion = document.getElementById('vs-scorpion');
const vsUnicorn = document.getElementById('vs-unicorn');

//ELEMENTS
const fire = document.getElementById('fire-button');
const water = document.getElementById('water-button');
const earth = document.getElementById('earth-button');
const air = document.getElementById('air-button');
const voi = document.getElementById('void-button');

//ROLES
const keeper = document.getElementById('keeper-button');
const seeker = document.getElementById('seeker-button');

//PROVINCES
var clan = {
    crab:false,
    crane:false,
    dragon:false,
    lion:false,
    phoenix:false,
    scorpion:false,
    unicorn:false
};

const provinceCrab = {
    role:'earth',
    province:'Defend the Wall'};
const provinceCrane = {
    role:'air',
    province:'The Art of Peace'};
const provinceDragon = {
    role:'fire',
    province:'Restoration of Balance'};
const provinceLion = {
    role:'water',
    province:'The Art of the War'};
const provincePhoenix = {
    role:'void',
    province:'Kuroi Mori'};
const provinceScorpion = {
    role:'air',
    province:'Secret Cache'};
const provinceUnicorn = {
    role:'water',
    province:'Endless Plains'};

var keeper_provinces = {
    fire:'test',
    water:'test',
    void:'test',
    earth:'test',
    air:'test'
};

var seeker_provinces = {
    seeker1:'test',
    seeker2:'test',
    prov1:'test',
    prov2:'test',
    prov3:'test'
};

//FIREPROVINCES
const meditations = document.getElementById('meditations-fire');
const nightRaid = document.getElementById('night-raid-fire');
const otherFire = document.getElementById('other-fire');

let lastPriClan = document.getElementById('primary-crab');
let lastSecClan = document.getElementById('splash-crab');
let lastElement = document.getElementById('temp-button');

var vs_clans = {
    crab:false,
    crane:false,
    dragon:false,
    lion:false,
    phoenix:false,
    scorpion:false,
    unicorn:false
};

function mainClan(ele){
    let element = ele.innerText;

    switch(element){
        case 'Crab':
         //set new to crab 
         priCrab.classList.remove('btn-light');
         priCrab.classList.add('btn-warning');
         //set old to blank
         if(priCrab != lastPriClan)
         {
             lastPriClan.classList.remove('btn-warning');
             lastPriClan.classList.add('btn-light');
             lastPriClan = priCrab;
         }
 
        break;
        case 'Crane':
         //set new to crab 
         priCrane.classList.remove('btn-light');
         priCrane.classList.add('btn-warning');
         //set old to blank
         if(priCrane != lastPriClan)
         {
             lastPriClan.classList.remove('btn-warning');
             lastPriClan.classList.add('btn-light');
             lastPriClan = priCrane;
         }
        break;
        case 'Dragon':
             priDragon.classList.remove('btn-light');
             priDragon.classList.add('btn-warning');
             //set old to blank
             if(priDragon != lastPriClan)
             {
                 lastPriClan.classList.remove('btn-warning');
                 lastPriClan.classList.add('btn-light');
                 lastPriClan = priDragon;
             }
        break;
        case 'Lion':
         priLion.classList.remove('btn-light');
         priLion.classList.add('btn-warning');
         //set old to blank
         if(priLion != lastPriClan)
         {
             lastPriClan.classList.remove('btn-warning');
             lastPriClan.classList.add('btn-light');
             lastPriClan = priLion;
         }
        break;
        case 'Phoenix':
             priPhoenix.classList.remove('btn-light');
             priPhoenix.classList.add('btn-warning');
             //set old to blank
             if(priPhoenix != lastPriClan)
             {
                 lastPriClan.classList.remove('btn-warning');
                 lastPriClan.classList.add('btn-light');
                 lastPriClan = priPhoenix;
             }
        break;
        case 'Scorpion':
         priScorpion.classList.remove('btn-light');
         priScorpion.classList.add('btn-warning');
         //set old to blank
         if(priScorpion != lastPriClan)
         {
             lastPriClan.classList.remove('btn-warning');
             lastPriClan.classList.add('btn-light');
             lastPriClan = priScorpion;
         }
        break;
        case 'Unicorn':
             priUnicorn.classList.remove('btn-light');
             priUnicorn.classList.add('btn-warning');
             //set old to blank
             if(priUnicorn != lastPriClan)
             {
                 lastPriClan.classList.remove('btn-warning');
                 lastPriClan.classList.add('btn-light');
                 lastPriClan = priUnicorn;
             }
        break;
    }
}

function splashClan(ele){
    let element = ele.innerText;

    switch(element){
        case 'Crab':
         //set new to crab 
         secCrab.classList.remove('btn-light');
         secCrab.classList.add('btn-warning');
         //set old to blank
         if(secCrab != lastSecClan)
         {
             lastSecClan.classList.remove('btn-warning');
             lastSecClan.classList.add('btn-light');
             lastSecClan = secCrab;
         }
 
        break;
        case 'Crane':
         //set new to crab 
         secCrane.classList.remove('btn-light');
         secCrane.classList.add('btn-warning');
         //set old to blank
         if(secCrane != lastSecClan)
         {
             lastSecClan.classList.remove('btn-warning');
             lastSecClan.classList.add('btn-light');
             lastSecClan = secCrane;
         }
        break;
        case 'Dragon':
             secDragon.classList.remove('btn-light');
             secDragon.classList.add('btn-warning');
             //set old to blank
             if(secDragon != lastSecClan)
             {
                 lastSecClan.classList.remove('btn-warning');
                 lastSecClan.classList.add('btn-light');
                 lastSecClan = secDragon;
             }
        break;
        case 'Lion':
         secLion.classList.remove('btn-light');
         secLion.classList.add('btn-warning');
         //set old to blank
         if(secLion != lastSecClan)
         {
             lastSecClan.classList.remove('btn-warning');
             lastSecClan.classList.add('btn-light');
             lastSecClan = secLion;
         }
        break;
        case 'Phoenix':
             secPhoenix.classList.remove('btn-light');
             secPhoenix.classList.add('btn-warning');
             //set old to blank
             if(secPhoenix != lastSecClan)
             {
                 lastSecClan.classList.remove('btn-warning');
                 lastSecClan.classList.add('btn-light');
                 lastSecClan = secPhoenix;
             }
        break;
        case 'Scorpion':
         secScorpion.classList.remove('btn-light');
         secScorpion.classList.add('btn-warning');
         //set old to blank
         if(secScorpion != lastSecClan)
         {
             lastSecClan.classList.remove('btn-warning');
             lastSecClan.classList.add('btn-light');
             lastSecClan = secScorpion;
         }
        break;
        case 'Unicorn':
             secUnicorn.classList.remove('btn-light');
             secUnicorn.classList.add('btn-warning');
             //set old to blank
             if(secUnicorn != lastSecClan)
             {
                 lastSecClan.classList.remove('btn-warning');
                 lastSecClan.classList.add('btn-light');
                 lastSecClan = secUnicorn;
             }
        break;
    }
}

function versusClan(ele){
    let element = ele.innerText;

    switch(element){
        case 'Crab':
            if(vs_clans.crab != true){
                vsCrab.classList.remove('btn-light');
                vsCrab.classList.add('btn-danger');
                vs_clans.crab = true;
            }
            else{
                vsCrab.classList.remove('btn-danger');
                vsCrab.classList.add('btn-light');
                vs_clans.crab = false;
            }
            //console.log(vs_clans);
        break;
        case 'Crane':
            if(vs_clans.crane != true){
                vsCrane.classList.remove('btn-light');
                vsCrane.classList.add('btn-danger');
                vs_clans.crane = true;
            }
            else{
                vsCrane.classList.remove('btn-danger');
                vsCrane.classList.add('btn-light');
                vs_clans.crane = false;
            }
            //console.log(vs_clans);
        break;
        case 'Dragon':
            if(vs_clans.dragon != true){
                vsDragon.classList.remove('btn-light');
                vsDragon.classList.add('btn-danger');
                vs_clans.dragon = true;
            }
            else{
                vsDragon.classList.remove('btn-danger');
                vsDragon.classList.add('btn-light');
                vs_clans.dragon = false;
            }
            //console.log(vs_clans);
        break;
        case 'Lion':
            if(vs_clans.lion != true){
                vsLion.classList.remove('btn-light');
                vsLion.classList.add('btn-danger');
                vs_clans.lion = true;
            }
            else{
                vsLion.classList.remove('btn-danger');
                vsLion.classList.add('btn-light');
                vs_clans.lion = false;
            }
            //console.log(vs_clans);
        break;
        case 'Phoenix':
            if(vs_clans.phoenix != true){
                vsPhoenix.classList.remove('btn-light');
                vsPhoenix.classList.add('btn-danger');
                vs_clans.phoenix = true;
            }
            else{
                vsPhoenix.classList.remove('btn-danger');
                vsPhoenix.classList.add('btn-light');
                vs_clans.phoenix = false;
            }
            //console.log(vs_clans);
        break;
        case 'Scorpion':
            if(vs_clans.scorpion != true){
                vsScorpion.classList.remove('btn-light');
                vsScorpion.classList.add('btn-danger');
                vs_clans.scorpion = true;
            }
            else{
                vsScorpion.classList.remove('btn-danger');
                vsScorpion.classList.add('btn-light');
                vs_clans.scorpion = false;
            }
            //console.log(vs_clans);
        break;
        case 'Unicorn':
            if(vs_clans.unicorn != true){
                vsUnicorn.classList.remove('btn-light');
                vsUnicorn.classList.add('btn-danger');
                vs_clans.unicorn = true;
            }
            else{
                vsUnicorn.classList.remove('btn-danger');
                vsUnicorn.classList.add('btn-light');
                vs_clans.unicorn = false;
            }
            //console.log(vs_clans);
        break;
        
    }
}

function roleSelect(ele){
    if(ele.innerText == 'Keeper'){
        //set new button type
        keeper.classList.remove('btn-light');
        keeper.classList.add('btn-danger');
        //put old as old
        seeker.classList.remove('btn-danger');
        seeker.classList.add('btn-light');
    }
    else{
        //set new button type
        seeker.classList.remove('btn-light');
        seeker.classList.add('btn-danger');
        //put old and old
        keeper.classList.remove('btn-danger');
        keeper.classList.add('btn-light');
    }
    
}

function elementSelect(ele){
    element = ele.innerText;

     switch(element){
         case 'Fire':
            //set this to danger
            fire.classList.remove('btn-light');
            fire.classList.add('btn-danger');
            //set others back to light
            lastElement.classList.remove('btn-danger');
            lastElement.classList.add('btn-light');
            lastElement = fire;
         break;
         case 'Air':
            //set this to danger
             air.classList.remove('btn-light');
             air.classList.add('btn-danger');
            //set others back to light
             lastElement.classList.remove('btn-danger');
             lastElement.classList.add('btn.light');
             lastElement = air;
         break;
         case 'Earth':
         //set this to danger
             earth.classList.remove('btn-light');
             earth.classList.add('btn-danger');
         //set others back to light
             lastElement.classList.remove('btn-danger');
             lastElement.classList.add('btn.light');
             lastElement = earth;
         break;
         case 'Water':
         //set this to danger
             water.classList.remove('btn-light');
             water.classList.add('btn-danger');
         //set others back to light
             lastElement.classList.remove('btn-danger');
             lastElement.classList.add('btn.light');
             lastElement = water;
         break;
         case 'Void':
         //set this to danger
             voi.classList.remove('btn-light');
             voi.classList.add('btn-danger');
         //set others back to light
             lastElement.classList.remove('btn-danger');
             lastElement.classList.add('btn.light');
             lastElement = voi;
        break;
     }
}

function provinceSelect(ele){
    //selects between the province in that elemement
}

function clanCheck(){
    //checks to see which clan is the primary and load the province respectfuly.
}

function submitDeck(){
    //submits the deck if available
    //need a check on whether the deck is legal or not
}

function strongholdSelector(primary){
    switch(primary){

    }
}