const addRatingValue = document.getElementById("add-rating-text");

const userRatingURL = "http://localhost:56390/api/userRating";

const rating = new Rating();

function handleRatingVote(){

    if(addRatingValue.value >= 1.0 && addRatingValue.value <= 10.0){

        if(user.username !== undefined){
            //* push to API **/

        }else{
            
        }



    }else{
        alert("please type a rating that is between 1.0 and 10.0");
    }
}

function makeRatingPushRequest(id, rating, clans){


}

function resetClans(){

}

function renewRating(){
    
}