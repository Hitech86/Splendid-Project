var application = {
    state: 'Inactive',
    numberOfPlayers: 0,
    players: [],
    playAreas: null,
    activePlayer: 0,
    firstPlayer: 0,
    numberOfGameNobles: 0,
    numberOfTokens: 0,
    greenDrawDeck: null,
    yellowDrawDeck: null,
    blueDrawDeck: null,
    greenFaceUpCards: null,
    yellowFaceUpCards: null,
    blueFaceUpCards: null,
    noblesFaceUp: null,
    noblesDeck: null,
    tokens: null,
    tokenInfo: { radius: 28, width: 56, height: 56, font: "30px Areal", fontMargin: 20, fontHeight: 37 },
    cardInfo: { width: 80, height: 95, font: "35px Areal", fontMargin: 20, fontHeight: 58 },
    cardFaceInfo: { font: "22px Areal", fontMargin: 6, fontHeight: 22, tokenWidth: 20, tokenHeight: 20, costWidth: 15, costHeight: 15, costFont: "13px Ariel Bold" },
    nobleInfo: { width: 80, height: 75 },
    playerInfo: { font: "14px Areal", fontHeight: 10 },
    padding: 10,
    gameobjects: null,
    selectedCardIndex: null,
    selectedColor: null,
	registeredPlayer: 0,
};

function isEmpty(s) {
    return (!s || s.trim().length === 0)
}
