//* This will be a combination of the rating api and the cards api for now *//

const getCardsURL = "http://localhost:56390/api/card";
const getCardRequest = new XMLHttpRequest();
let data;

const clan = "clan";
const deck = "deck";
const type = "type";

const ratingText = "Rating: ";//add this before the api reuqested value.
const voteModalImageLocation = document.getElementById("vote-modal-image");
const cardRenderLocation = document.getElementById("card-render-location");

getCardsFromAPI();

function getCardsFromAPI(){
    //debugger;
    getCardRequest.open("GET",getCardsURL);
    getCardRequest.send();
}

getCardRequest.onload = () => {
    //debugger;
    if(getCardRequest.status === 200){
       
        //* it was a success
        data = JSON.parse(getCardRequest.response);
        generateCards();
    }
    else{
        
        //* it was not a success
    }
}

function vsClanModal(element, clan){

    element.classList.toggle("btn-" + clan + "-selected");

    clans[clan] = (clans[clan]) ? false : true;

    //addElement(rating.clans, clan);

}

function getImageOfCard(card){
    return card.firstElementChild.currentSrc;
}

function getIdOfCard(card){
    return card.firstElementChild.alt;
}

function cardVote(element){

    voteModalImageLocation.attributes.src.value = getImageOfCard(element);
    voteModalImageLocation.attributes.alt.value = getIdOfCard(element);
    //debugger;
    $("#vote-modal").modal('toggle');

}

function generateCards(){

    for(let i = 0; i < data.length; i++){

        let card = document.createElement("div");
        card.classList.add("col-sm-12", "col-md-6",
        "col-lg-3", "card");
        
        card.addEventListener("mouseleave", function(){
            hoverBlurr(this, 'leave');
        });
        card.addEventListener("click", function(){
            cardVote(this);
        });
        card.addEventListener("mouseover", function(){
            hoverBlurr(this, 'enter');
        });

        card.setAttribute(clan, 
        getClan(data, i));
        card.setAttribute(deck, 
        getDeck(data, i));
        card.setAttribute(type, 
        getType(data, i));
        card.id = getID(data,i);

        let image = document.createElement("img");
        image.src = getImageLocation(data, i);
        image.alt = getID(data, i);

        let rating = document.createElement("h3");
        rating.classList.add("card-rating");
        rating.innerText = ratingText + getOverallRating(data, i);

        card.append(image, rating);
        cardRenderLocation.append(card);

    }

}

