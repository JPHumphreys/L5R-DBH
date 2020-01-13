//* This is the card object **/

function Card(){

    let primary = undefined;
    let deck = undefined;
    let type = undefined;

    Object.defineProperty(this, "primary", {
        get: function(){
            return primary;
        },
        set: function(value){
            primary = value;
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

function getImageLocation(obj, i){
    return obj[i].imglocation;
}

function getObjectID(obj, i){
    return obj[i].id;
}

function getCardClan(obj, i){
    return obj[i].clan;
}

function getCardDeck(obj, i){
    return obj[i].side;
}

function getCardType(obj, i){
    return obj[i].typeof;
}
