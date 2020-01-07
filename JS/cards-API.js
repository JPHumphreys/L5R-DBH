const addRatingValue = document.getElementById("add-rating-text");

function handleRatingVote(){

    if(addRatingValue.value >= 1.0 && addRatingValue.value <= 10.0){
        
        //* push to API **/

    }else{
        alert("please type a rating that is between 1.0 and 10.0");
    }
}