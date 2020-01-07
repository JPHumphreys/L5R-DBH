//* This is the rating object **/

class Rating{

    constructor(id, value, clans){
        this.id = id;
        this.value = value;
        this.clans = clans;
    }

    get(){
        const data = {id, value, clans};
        return data;
    }

}