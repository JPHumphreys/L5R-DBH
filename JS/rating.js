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