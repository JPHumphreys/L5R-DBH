//* This is the deck object **/

function Deck(){

    //* private variables *//
    let primary = undefined;
    let secondary = undefined;
    let role = undefined;
    let element = undefined;
    //*-------------------*//

    Object.defineProperty(this, "primary", {
        get: function(){
            return primary;
        },
        set: function(value){
            primary = value;
        }
    });
    
    Object.defineProperty(this, "secondary", {
        get: function(){
            return secondary;
        },
        set: function(value){
            secondary = value;
        }
    });

    Object.defineProperty(this, "role", {
        get: function(){
            return role;
        },
        set: function(value){
            role = value;
        }
    });

    Object.defineProperty(this, "element",{
        get: function(){
            return element;
        },
        set: function(value){
            element = value;
        }
    });

};