const addRatingValue = document.getElementById("add-rating-text");
const cardRenderLocation = document.getElementById("card-render-location");
const voteModalImageLocation = document.getElementById("vote-modal-image");

const rating = new Rating(undefined, undefined, {});

function handleRatingVote(){

    if(addRatingValue.value >= 1.0 && addRatingValue.value <= 10.0){


        
        //* push to API **/

    }else{
        alert("please type a rating that is between 1.0 and 10.0");
    }
}

function vsClanModal(element, clan){

    element.classList.toggle("btn-" + clan + "-selected");

    for(let i in rating.clans){
        console.log(i);
    }

    debugger;

    addElement(rating.clans, clan);

    
}

function getImageOfCard(card){
    return card.firstElementChild.currentSrc;
}

function cardClick(element){

    voteModalImageLocation.attributes.src.value = getImageOfCard(element);

    $("#vote-modal").modal('toggle');

}

function generateCards(data){

    

    /*
        <div class="col-sm-12 col-md-6 col-lg-3 card" onclick="cardClick(this)" 
        onmouseleave="hoverBlurr(this, 'leave')" onmouseover="hoverBlurr(this, 'enter')">
            <img src="https://gamepedia.cursecdn.com/l5r_gamepedia_en/6/6c/Shrewd_Yasuki.png?version=52fa901f0d3c41c924603c6d4161dfce">
            <h3 class="card-rating">Rating: 4</h3>
        </div>

    */
}