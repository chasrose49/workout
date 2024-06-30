let cardDeck = Array(4).fill(2).concat(Array(4).fill(3), Array(4).fill(4), Array(4).fill(5), Array(4).fill(6), Array(4).fill(7), Array(4).fill(8), Array(4).fill(9), Array(4).fill(10), Array(4).fill("J"), Array(4).fill("Q"), Array(4).fill("K"), Array(4).fill("A"));
let dealerHold = 16;
let playerHandCount = 0;
let dealerHandCount = 0;
let blackJack = 21;
let playerHand = [];
let dealerHand = [];
let playerDeal = 2;
let dealerDeal = 2;

let dealerHolds = false;
let playerHits = 1;
let playerHitChoice = false;


let playerHolds = false;
let aceChoice = false;
let dealerDealsSelf = false;
let playerSplit = false;
let bet = 5
let results = document.getElementById("results")
let hit = document.getElementById("hit");
let hold = document.getElementById('hold');
let start = document.getElementById('startGame');
let split = document.getElementById('split');
let game = document.getElementById('displayGame');

let aceBtnsDiv=document.getElementById('aceBtns')
aceBtnsDiv.setAttribute("class", "hideMe")
game.id = "handContainer"
let displayHandCount = document.createElement('p')
displayHandCount.id = "handDisplay"
game.prepend(displayHandCount)
let displayText = document.getElementById('handDisplay')
results.innerText = `Player Money: ${bet}`
let aceButton_1 = document.createElement('button')
aceButton_1.id= "ace"
aceButton_1.textContent="1"
let acePara = document.createElement("p")
acePara="Use Ace as "
aceBtnsDiv.append(acePara,aceButton_1)
function shuffle(array) {
    return array.sort(function () {
        return Math.random() - Math.random()
    })
};
shuffle(cardDeck);
function startGame() {
    bet--
    results.innerText = `Player Money: ${bet}`
    for (var i = 0; i < cardDeck.length; i++) {
        if (playerHand.length < playerDeal) {
            playerHand.push(cardDeck[i])
            cardDeck.splice(i, 1)
        }
        if (dealerHand.length < dealerDeal) {
            dealerHand.push(cardDeck[i])
            cardDeck.splice(i, 1)
        }
    }
    playerHand.forEach(card => {
        let ptag = document.createElement('p')
        ptag.id = "cardInPlay"
        ptag.textContent = card
        game.append(ptag)
        if (card === 'J' || card === 'Q' || card === 'K') {
            card = 10
         
        } else if (card === "A") {
            card=11
            aceBtnsDiv.removeAttribute("class", "hideMe")
          
           } else {
            card = card
          }
          playerHandCount += card
          displayText.textContent = `Card Total: ${playerHandCount}`

    })
    dealerHand.forEach(card => {
        if (card === 'J' || card === 'Q' || card === 'K') {
            card = 10
        } else if (card === "A") {
            card = 11
        } else {
            card = card
        }
        dealerHandCount += card
    })

    twentyOne(playerHand)
}
function twentyOne(array) {
    if (dealerHandCount === dealerHold) {
        dealerHolds = true
        dealerHandCount = dealerHandCount
    }
    if (dealerHandCount > 16) {
        dealerHolds = true
        dealerHandCount = dealerHandCount
    }
    if (dealerHolds === true) {
        dealerDeal = dealerDeal
    }
    if (dealerHandCount < 16) {
        dealerDealsSelf = true
    }
    if (dealerDealsSelf === true) {
        dealerDeal++
        if (dealerHandCount === dealerHold) {
            dealerHolds = true
        }
        for (var i = 0; i < cardDeck.length; i++) {
            if (dealerHand.length < dealerDeal) {
                dealerHand.push(cardDeck[i])
                cardDeck.splice(i, 1)
            }
        }
        if (dealerHandCount > 16) {
            dealerHandCount = dealerHandCount
        } else {
            dealerHandCount = 0
            dealerHand.forEach(card => {
                if (card === 'J' || card === 'Q' || card === 'K') {
                    card = 10
                } else if (card === "A") {
                    card = 11
                   
                } else {
                    card = card
                }
                dealerHandCount += card
            })
        }
    }
    if (playerHitChoice === true) {

        let oldHand = document.querySelectorAll("#cardInPlay")
        oldHand.forEach(item => {
            item.remove()
        })
        playerDeal++
        for (var i = 0; i < cardDeck.length; i++) {
            if (array.length < playerDeal) {
                array.push(cardDeck[i])
                cardDeck.splice(i, 1)
                playerHitChoice = false
            }
        }
        playerHandCount = 0
        array.forEach((card, i) => {
            let newcard = document.createElement('p')
            newcard.id = "cardInPlay"
            newcard.textContent = card
            ///display single hand
            game.append(newcard)
            if (card === 'J' || card === 'Q' || card === 'K') {
                card = 10
            } else if (card === "A") {
                card = 11
                if (aceChoice === true) {
                    card = 1
                }
            } else {
                card = card
            }
            playerHandCount += card
            if (playerHandCount > blackJack) {
                playerHitChoice = true
                displayText.innerText = "Bust"
            } else {
                displayText.innerText = `Card Total: ${playerHandCount}`
            }
        })
    }

    else if (playerHolds === true && dealerHolds === true) {
        if (playerHandCount === blackJack && dealerHandCount !== blackJack) {
            results.innerText = "Player Wins with Black Jack"
            bet = bet + 2
        }
        else if (dealerHandCount === blackJack && playerHandCount !== blackJack) {
            results.innerText = 'Dealer Wins with Black Jack'
        }
        else if (dealerHandCount === blackJack && playerHandCount === blackJack) {
            results.innerText = 'Player and Dealer Ties with Black Jack'
            bet = bet + 1
        } else if (playerHandCount > blackJack && dealerHandCount <= blackJack) {
            results.innerText = "Player Bust & Dealer Wins with " + dealerHandCount
        }
        else if (dealerHandCount > blackJack && playerHandCount <= blackJack) {
            results.innerText = "Player Wins & Dealer Bust with " + dealerHandCount
            bet = bet + 2
        }
        else if (playerHandCount > dealerHandCount) {
            results.innerText = "Player Wins & Dealer Losses with " + dealerHandCount
            bet = bet + 2
        } else if (playerHandCount === dealerHandCount) {
            results.innerText = "Player & Dealer Ties "
            bet = bet + 1
        }
        else {
            results.innerText = "Player Lost, Dealer Wins "
        }
    }
    
}
   

function hitMe() {
    playerHitChoice = true
    twentyOne(playerHand)
}
function holdMe() {
    playerHolds = true
    twentyOne(playerHand)
}

function acePlay(){
aceChoice=true

}



hit.addEventListener("click", hitMe, false)
hold.addEventListener('click', holdMe, false)
start.addEventListener('click', startGame, true)
aceButton_1.addEventListener('click', acePlay,false)


