//* This is the rating object **/

class Rating{

    constructor(username, id, rating, clan){
        this.username = username;
        this.id = id;
        this.rating = rating;
        this.clan = clan;
    }

    setUsername(username){
        this.username = username;
    }

    setId(id){
        this.id = id;
    }

    setRating(value){
        this.rating = value;
    }

    setClan(clan){
        this.clan = clan;
    }

    getClan(){
        return this.clan;
    }

    getID(){
        return this.id;
    }

}

const clans = {
    crab:false,
    crane:false,
    dragon:false,
    lion:false,
    phoenix:false,
    scorpion:false,
    unicorn:false
    };

function setClanToFalse(num){
    let button;
    if(num >= 0 && num < 7){
        switch(num){
            case 0:
                button = document.querySelectorAll(".btn-crab");
                button[0].classList.remove("btn-crab-selected");
                clans.crab = false;
            break;
            case 1:
                button = document.querySelectorAll(".btn-crane");
                button[0].classList.remove("btn-crane-selected");
                clans.crane = false;
            break;
            case 2:
                button = document.querySelectorAll(".btn-dragon");
                button[0].classList.remove("btn-dragon-selected");
                clans.dragon = false;
            break;
            case 3: 
                button = document.querySelectorAll(".btn-lion");
                button[0].classList.remove("btn-lion-selected");
                clans.lion = false;
            break;
            case 4:
                button = document.querySelectorAll(".btn-phoenix");
                button[0].classList.remove("btn-phoenix-selected");
                clans.phoenix = false;
            break;
            case 5:
                button = document.querySelectorAll(".btn-scorpion");
                button[0].classList.remove("btn-scorpion-selected");
                clans.scorpion = false;
            break;
            case 6:
                button = document.querySelectorAll(".btn-unicorn");
                button[0].classList.remove("btn-unicorn-selected");
                clans.unicorn = false;
            break;
        }
    }
    
}