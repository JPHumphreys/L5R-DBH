const url = "http://34.89.95.16:9000/cards";
const req = new XMLHttpRequest();

let data;

let cardTypes = [];
let cardClans = [];


req.onload = () => {
    data = JSON.parse(req.response);
    console.log(data);
};


function makeRequest(){
    req.open("GET",url);
    req.send();
}

function sortByCardType(dat, type){
    for(let i = 0; i < dat.length; i++){
        if(dat[i].side === type){
            cardTypes.push(dat[i]);
        }
    }
}

function sortByCardClan(dat, clan){
    for(let i = 0; i < dat.length; i++){
        if(dat[i].clan === clan){
            cardClans.push(dat[i]);
        }
    }

}

function test(){
    console.log("beep boop");
}