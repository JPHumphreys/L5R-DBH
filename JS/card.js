//* This is the card object **/

function Card(){

    let clan = undefined;
    let deck = undefined;
    let type = undefined;

    Object.defineProperty(this, "clan", {
        get: function(){
            return clan;
        },
        set: function(value){
            clan = value;
        }
    });

    Object.defineProperty(this, "deck", {
        get: function(){
            return deck;
        },
        set: function(value){
            deck = value;
        }
    });

    Object.defineProperty(this, "type", {
        get: function(){
            return type;
        },
        set: function(value){
            type = value;
        }
    });

}

//* Consult the L5R-JSON-DATA for names *//
//* https://github.com/JPHumphreys/L5R-JSON-Data *//
//* https://github.com/JPHumphreys/L5R-WEBAPI/blob/master/Models/Card.cs *//

function getImageLocation(obj, i){
    return obj[i].imglocation;
}

function getID(obj, i){
    return obj[i].id;
}

function getClan(obj, i){
    return obj[i].clan;
}

function getDeck(obj, i){
    return obj[i].side;
}

function getType(obj, i){
    return obj[i].type;
}
