cardOffset = parseInt('10',16)
firstCard = parseInt("1F0A1",16)
backCard = parseInt("1F0A0",16)

const dealerEl = $('#dealer');
const playerEl = $('#player');
const moneyEl = $('#money');
const betEl = $('#bet');

// for (let suit = 0; suit < 2; suit++) {
//     for (let j = 0; j < 3; j++) {
//         let div = document.createElement('P');
//         div.classList += "flex flex-row justify-center "
//         if(suit === 1 || suit=== 2) div.classList += "red"
//         if(j==11) continue
//         div.innerHTML += "&#x" + ((firstCard+j)+(suit*cardOffset)).toString(16) + ';'
//         cardsEl.append(div.cloneNode(true));
//         $('#player').append(div);
//     }
// }

dealerEl.html("&#x" + (backCard).toString(16) + ';' + "&#x" + (backCard).toString(16) + ';');

playerEl.html("&#x" + (firstCard).toString(16)+ ';' + "&#x" + (firstCard+12).toString(16) + ';');

money = 100;
bet = 0;

const suits = 4;
const cardsPerSuit = 13;
decks = 1;

randomVal = (val) =>{
    return Math.ceil(Math.random()*Math.floor(val))
}

moneyEl.text(money);
betEl.text(bet);

updateBet = (val) =>{
    if(bet <= 5 && bet >= 250 && val < 0) return;
    bet += val;
}

drawInitialCards = () =>{

    let suit = randomVal(suits);
    let card = randomVal(cardsPerSuit);
}

$('#playingStage').addClass("hidden");

/* 
 1 deck : 4/52*16/51*2
 2 decks: 8/104*32/103*2
 */
//winchance = ((decks*suits)/(suits*cardsPerSuit*decks))*(())