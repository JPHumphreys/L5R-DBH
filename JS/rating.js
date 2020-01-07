//* This is the rating object **/

function Rating(){

    let id = undefined;
    let value = undefined;
    let clans = {};

    Object.defineProperty(this, "id", {
        get: function (){
            return id;
        },
        set: function(value){
            id = value;
        }
    });

    Object.defineProperty(this, "value", {
        get: function (){
            return value;
        },
        set: function(score){
            value = score;
        }
    });

    Object.defineProperty(this, "clans",{
        get: function(){
            return clans;
        }
    });

    function get(){
        const data = {id, value, clans};
        return data;
    }

}