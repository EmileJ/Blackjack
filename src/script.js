offset = parseInt('10',16)
first = parseInt("1F0A1",16)

const cardsEl = $('#dealer');
const moneyEl = $('#money');
const betEl = $('#bet');

for (let suit = 0; suit < 4; suit++) {
    let div = document.createElement('DIV');
    if(suit === 1 || suit=== 2) div.classList += "red"
    for (let j = 0; j < 14; j++) {
        if(j==11) continue
        div.innerHTML += "&#x" + ((first+j)+(suit*offset)).toString(16) + ';'
    }
    cardsEl.append(div.cloneNode(true));
    $('#player').append(div);
}

money = 100;
bet = 0;

const suits = 4;
const cardsPerSuit = 13;
decks = 1;

randomInt = () =>{
    return Math.ceil(Math.random()*Math.floor(cardsPerSuit))
}

moneyEl.text(money);
betEl.text(bet);

updateBet = (val) =>{
    if(bet <= 5 && val < 0) return
    bet += val;
}

/* 
 1 deck : 4/52*16/51*2
 2 decks: 8/104*32/103*2
 */
winchance = ((decks*suits)/(suits*cardsPerSuit*decks))*(())