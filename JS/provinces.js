//FIREPROVINCES
const meditations = document.getElementById("meditations-fire");
const nightRaid = document.getElementById("night-raid-fire");
const otherFire = document.getElementById("other-fire");

//AIRPROVICENS 
const manicured = document.getElementById("manicured-air");
const fertile = document.getElementById("fertile-air");
const otherAir = document.getElementById("other-air");

//WATERPROVINCES
const rally = document.getElementById("rally-water");
const elemental = document.getElementById("elemental-water");
const otherWater = document.getElementById("other-water");

//EARTHPROVINCES
const entrenched = document.getElementById("entrenched-earth");
const ancestral = document.getElementById("ancestral-earth");
const otherEarth = document.getElementById("other-earth");

//VOIDPROVINCES
const shameful = document.getElementById("shameful-void");
const pilgrimage = document.getElementById("pilgrimage-void");
const otherVoid = document.getElementById("other-void");

//MASSPROVINCES
let provinces;
function setUp(){
    provinces = [otherAir, otherEarth, otherFire, otherVoid, otherWater];
}

const provinceCrab = {
    role:"earth",
    province:"Defend the Wall"};
const provinceCrane = {
    role:"air",
    province:"The Art of Peace"};
const provinceDragon = {
    role:"fire",
    province:"Restoration of Balance"};
const provinceLion = {
    role:"water",
    province:"The Art of the War"};
const provincePhoenix = {
    role:"void",
    province:"Kuroi Mori"};
const provinceScorpion = {
    role:"air",
    province:"Secret Cache"};
const provinceUnicorn = {
    role:"water",
    province:"Endless Plains"};

    var keeper_provinces = {
        fire:"test",
        water:"test",
        void:"test",
        earth:"test",
        air:"test"
    };
    
    var seeker_provinces = {
        seeker1:"test",
        seeker2:"test",
        prov1:"test",
        prov2:"test",
        prov3:"test"
    };

function provinceClear(){

    for(let i = 0; i < provinces.length; i++){
        provinces[i].innerText = ";
        provinces[i].classList.remove("visible");
        provinces[i].classList.add("invisible");
    }
}

function clanCheck(ele){
    //checks to see which clan is the primary and load the province respectfuly.
    provinceClear();

    switch(ele){
        case priCrab:
            otherEarth.innerText = provinceCrab.province;
            otherEarth.classList.remove("invisible");
            otherEarth.classList.add("visible");
        break;
        case priCrane:
            otherAir.innerText = provinceCrane.province;
            otherAir.classList.remove("invisible");
            otherAir.classList.add("visible");
        break;
        case priDragon:
            otherFire.innerText = provinceDragon.province;
            otherFire.classList.remove("invisible");
            otherFire.classList.add("visible");
        break;
        case priLion:
            otherWater.innerText = provinceLion.province;
            otherWater.classList.remove("invisible");
            otherWater.classList.add("visible");
        break;
        case priPhoenix:
            otherVoid.innerText = provincePhoenix.province;
            otherVoid.classList.remove("invisible");
            otherVoid.classList.add("visible");
        break;
        case priScorpion:
            otherAir.innerText = provinceScorpion.province;
            otherAir.classList.remove("invisible");
            otherAir.classList.add("visible");
        break;
        case priUnicorn:
            otherWater.innerText = provinceUnicorn.province;
            otherWater.classList.remove("invisible");
            otherWater.classList.add("visible");
        break;
    }

}