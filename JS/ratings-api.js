const addRatingValue = document.getElementById("add-rating-text");

const userRatingURL = "http://localhost:56390/api/userRating";

const userRatingPOSTReq = new XMLHttpRequest();

const rating = new Rating();


userRatingPOSTReq.onload = () =>{
    if(userRatingPOSTReq.status === 200){
        //debugger;
        getNextClan();
        $("#vote-modal").modal('hide');
        getSpecificCardFromAPI(rating.getID());
        callAlert("rating","success");
    }
    else{
        callAlert("rating","fail");
    }
}

function handleRatingVote(element){
    //debugger;
    if(addRatingValue.value >= 1.0 && addRatingValue.value <= 10.0){
        //console.log(JSON.parse(localStorage.getItem("user")).username);
        if(JSON.parse(localStorage.getItem("user")).username !== undefined){
            //* push to API **/
            //debugger;
            rating.setUsername(JSON.parse(localStorage.getItem("user")).username);
            rating.setId(element.offsetParent.children[1].childNodes[1].alt);
            rating.setRating(addRatingValue.value);
            //LOOP through the clans
            getNextClan();
            
        }else{
            callAlert("rating","fail");
        }



    }else{
        callAlert("rating","fail");
    }
}

function getNextClan(){
    const values = Object.values(clans);//*get the tur and false
    for(let i = 0; i < 7; i++){
        //console.log(values[i]);
        if(values[i] === true){
            setClanToFalse(i);
            makeRatingPostRequest(i);
            break;
        }
    }
}

function makeRatingPostRequest(counter){
    //debugger;
    const values = Object.keys(clans);//* get the clans via the keys
    rating.setClan(values[counter]);
    userRatingPOSTReq.open("POST",userRatingURL);
    userRatingPOSTReq.setRequestHeader("Content-Type", "application/json");
    userRatingPOSTReq.send(JSON.stringify(rating));
}

function renewRating(){
    
}