//* This will be a combination of the rating api and the cards api for now *//

const getCardsURL = "";
const getCardRequest = new XMLHttpRequest();

let data;

const clan = "clan";
const deck = "deck";
const type = "type";

const ratingText = "Rating : ";//add this before the api reuqested value.
const voteModalImageLocation = document.getElementById("vote-modal-image");
const cardRenderLocation = document.getElementById("card-render-location");

function vsClanModal(element, clan){

    element.classList.toggle("btn-" + clan + "-selected");

    for(let i in rating.clans){
        console.log(i);
    }

    addElement(rating.clans, clan);

    
}

function getImageOfCard(card){
    return card.firstElementChild.currentSrc;
}

function cardVote(element){

    voteModalImageLocation.attributes.src.value = getImageOfCard(element);

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

        let image = document.createElement("img");
        image.src = getImageLocation(data, i);
        image.alt = getID(data, i);

        let rating = document.createElement("h3");
        rating.classList.add("card-rating");
        rating.innerText = ratingText;

        card.append(image, rating);
        cardRenderLocation.append(card);

    }

    /*

data = [{imglocation : "https://gamepedia.cursecdn.com/l5r_gamepedia_en/6/6c/Shrewd_Yasuki.png?version=52fa901f0d3c41c924603c6d4161dfce", id : "shrewd-yasuki", clan : "crab", side : "dynasty", typeof : "character"}, {imglocation : "https://gamepedia.cursecdn.com/l5r_gamepedia_en/6/6c/Shrewd_Yasuki.png?version=52fa901f0d3c41c924603c6d4161dfce", id : "shrewd-yasuki", clan : "crab", side : "dynasty", typeof : "character"} ];

    */

}

