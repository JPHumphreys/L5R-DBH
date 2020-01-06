# **L**egend of the **Five** **R**ings : Deckbuilder Help

### This is a website that generates a legal L5R deck using card ratings and filters.

The deckbuilding process in L5R is arduous. This website aims to alleviate the problem by allowing users to quickly generate decks without knowing too much/any about the deckbuilding process. It will allow users to quickly generate viable decks to play online or build to take into local play.

## Website Features

---

### **Deckbuilder Page** - A space where the users will be able generate quick decks.

<img src="https://i.ibb.co/D1NtTP9/deckbuilder-page.png" width="100%">

The user will select options from four columns:

### Usage

**Primary Clan** : This is where most of the cards that you will play in the deck will be from.
 _**You select one from this column**_

**Secondary Clan** : This is where you will be able to add other cards from a different clan into the deck, the amount of this is decided through the influence value on the card.
 _**You select one from this column**_

**Role** : There are two options for this :- 

*Keeper* which allows you to increase your influence limit by 3 (up to 13 total) and access any cards that are **keeper only**
*Seeker* which allows you to add an additional province of that type to your deck. It also gives you 1 fate anytime a province of that type is revealed that round (that you own). It also provides access to cards that are **seeker only**
 _**You select one from this column**_

**Element** : This allows you to access cards that are of that element only, eg. **water role only**.
 _**You select one from this column**_

**VS Clans** : This is where the user is able to select the clans that the deck will cater against and improve the matchup by adding cards that work well against them.
 _**You select any amount from this column**_

 When the user has selected a primary clan, secondary clan, role and element, the submite deck button should change green to indicate that the deck is legal. 
 (VS_Clans are not needed in deckbuilding - selecting none will cater a deck that will work generally well against all other clans)

 **The goal for this to ensure that the users is able to generate a deck from scratch that caters towards certain matchups within a minute.**

 ---

### **Card Rating Page** - A space that allows users to see the current ratings and vote on cards.

<img src="https://i.ibb.co/bgzGQC6/cards-page-grid.png">

**Clan** : This is where the user can select from which clan they wish to see cards from.

**Decks** : This is where the user can select from which deck they wish to see. (If a clan is selected - it will filter for both the clan and deck type to provide a narrower search for a card)

**Card Type** : This is where the user can select what card type they wish to see. (as previously stated, selecting other colums in this page will add that filter to their search)

For example - you are able to select:
(*Crane* + *Dynasty* + *Characters* to see all crane dynasty characters)
(*Conflict* + *Attachments* to see all attachments in from the conflict deck type)
(*Holdings* to see all holdings in the game)

<img src="https://i.ibb.co/qYsXCt7/card-modal.jpg">

 The votes indicate the strength of the card - this can be filtered to see for against ALL CLANS, or any specific one.

---





### **Deck View Page** - A space where after creating a deck, the user will be able to see the cards list or be able to paste the cards into [Jigoku](https://jigoku.online/decks).


---



<!-- Task List-->
---
#### L5R Sets in the database:
* [x] Core Set
*  Clan Packs
    * [] Disciples of the Void.
    * [] Underhand of the Emperor.
    * [] Warriors of the Wind.
    * [] Masters of the Court.
    * [] The Emperor's Legion.
    * [] Defenders of Rokugan.
    * [] Seekers of Wisdom.
* Dynasty Packs
    * [] Imperial Cycle
    * [] Elemental Cycle
    * [] Inheritence Cycle
    * [] Dominion Cycle
* Premium Expansions
    * [] Childred of the Empire.
    * [] Clan War.
    
## Database :
<img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1920px-MySQL.svg.png" width="120" height="50">

## Hosted on :
[![Netlify Status](https://api.netlify.com/api/v1/badges/21649784-f6cf-431e-b3cd-1cf250574c6c/deploy-status)](https://app.netlify.com/sites/relaxed-fermi-dc9578/deploys)