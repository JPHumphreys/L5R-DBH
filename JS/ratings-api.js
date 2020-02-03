const addRatingValue = document.getElementById("add-rating-text");

const rating = new Rating(undefined, undefined, {});

function handleRatingVote(){

    if(addRatingValue.value >= 1.0 && addRatingValue.value <= 10.0){


        
        //* push to API **/

    }else{
        alert("please type a rating that is between 1.0 and 10.0");
    }
}

function makeRatingPushRequest(id, rating, clans){


    /*
        ratingAddReq.open("PUT", addRatingURL + "crab" + "/" + id);
                ratingAddReq.setRequestHeader("Content-Type", "application/json");
            obj = {
                    "ratingcrab":ratingVariableNames[i],
                };
                saveRating(id, currentRating, "crab");
                ratingAddReq.send(JSON.stringify(obj));

    */
}

