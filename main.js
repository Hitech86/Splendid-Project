function applicationInitialize() {
    application.canvas = document.getElementById("canvas");
    application.canvas.addEventListener("mousedown", doMouseDown, false);
    application.context = application.canvas.getContext("2d");
    application.cCanvas = document.getElementById("cCanvas");
    application.cContext = application.cCanvas.getContext("2d");
	application.tCanvas = document.getElementById("tCanvas");
    application.tContext = application.tCanvas.getContext("2d");
    updateButtonState();
    application.playAreas = initializePlayAreas();
    drawGameBoard();
}

function drawGameBoard() {
    var p;
    for (i = 0; i < application.playAreas.length; i++) {
        p = application.playAreas[i];
        application.context.rect(p.xPos, p.yPos, p.width, p.height);
        application.context.stroke();
    }
}

function clearGameBoard() {
    var p;
    for (i = 0; i < application.playAreas.length; i++) {
        p = application.playAreas[i];
        application.context.clearRect(p.xPos, p.yPos, p.width, p.height)
        application.context.rect(p.xPos, p.yPos, p.width, p.height);
        application.context.stroke();
    }
}

function getNumberOfPlayers() {
	document.getElementById("numberOfPlayersDialog").showModal();
}

function playersCancel()
{
	application.state = "Inactive";
	document.getElementById("numberOfPlayersDialog").close();
	updateButtonState();
}

function playersOk()
{
	application.numberOfPlayers = document.getElementById("numberOfPlayers").value;
	if (validNumberOfPlayers(application.numberOfPlayers))
	{
		if (application.state == "Active") {
			document.getElementById("numberOfPlayersDialog").close();	
			registerPlayers();
		}
	}
}

function validNumberOfPlayers(numberOfPlayers) {
    if (numberOfPlayers > 1 && numberOfPlayers < 5) return true;
	document.getElementById("playersInvalid").style.visibility = "visible";
    return false;
}

function registerPlayers()
{
	document.getElementById("dialogboxheaderRegisterPlayer").innerHTML = "Enter a name for player " + (application.registeredPlayer + 1) + ":";
	document.getElementById("registerPlayerDialog").showModal();	
}

function registerOk()
{
	document.getElementById("registerPlayerDialog").close();
	application.players[application.registeredPlayer] = {
		Name: document.getElementById("playerName").value,
		Points: 0,
		Tokens: [],
		Cards: [],
		Reserve: [],
		Nobles: [],
	};
	if (isEmpty(application.players[application.registeredPlayer].Name)) application.players[application.registeredPlayer].Name = "Player " + (application.registeredPlayer + 1);
	application.registeredPlayer++;
	document.getElementById("playerName").value = "";
	if (application.registeredPlayer < application.numberOfPlayers)
	{
		registerPlayers();
	}
	else 
	{
		finishGameSetup()
	}
}

function registerCancel()
{
	document.getElementById("registerPlayerDialog").close();	
	application.players[application.registeredPlayer].Name = "Player " + (application.registeredPlayer + 1);
	application.registeredPlayer++;
	if (application.registeredPlayer < application.numberOfPlayers)
	{
		registerPlayers();
	}
	else 
	{
		finishGameSetup()
	}
}

function finishGameSetup()
{
	application.firstPlayer = selectRandomPlayer();
	application.activePlayer = application.firstPlayer;
	setStartingValues();
	shufflePlayDecks();
	drawStartingCards();
	updatePlayAreas();
}
/* function registerPlayers() {
    for (i = 0; i < application.numberOfPlayers; i++) {
        application.players[i] = {
            Name: prompt("Register player name for player #" + (i + 1) + ": "),
            Points: 0,
            Tokens: [],
            Cards: [],
            Reserve: [],
            Nobles: [],
        };
        if (isEmpty(application.players[i].Name)) application.players[i].Name = "Player " + (i + 1);
    }
} */

function startGame() {
    application.state = "Active";
    updateButtonState();
    getNumberOfPlayers();
}

function shufflePlayDecks() {
    application.greenDrawDeck = shuffle(application.greenDrawDeck);
    application.yellowDrawDeck = shuffle(application.yellowDrawDeck);
    application.blueDrawDeck = shuffle(application.blueDrawDeck);
    application.noblesDeck = shuffle(application.noblesDeck);
}

function shuffle(arrayOfItems) {
    var sizeOfArray = arrayOfItems.length
    var tempValue;
    var randomIndex;

    for (i = 0; i < sizeOfArray; i++) {
        randomIndex = Math.floor(Math.random() * sizeOfArray);
        tempValue = arrayOfItems[i];
        arrayOfItems[i] = arrayOfItems[randomIndex];
        arrayOfItems[randomIndex] = tempValue;
    }
    return arrayOfItems;
}

function drawStartingCards() {
    application.noblesFaceUp = drawCards(application.noblesDeck, application.numberOfGameNobles);
    application.greenFaceUpCards = drawCards(application.greenDrawDeck, 4);
    application.yellowFaceUpCards = drawCards(application.yellowDrawDeck, 4);
    application.blueFaceUpCards = drawCards(application.blueDrawDeck, 4);
}

function drawCards(drawDeck, numberOfCards) {
    var deck = new Array();
    for (i = 0; i < numberOfCards; i++) {
        deck[i] = drawDeck.pop();
    }
    return deck;
}

function quitGame() {
    application.state = "Inactive";
    updateButtonState();
    clearGameBoard();
    applicationInitialize();
}

function done() {
    application.activePlayer = nextPlayer(application.activePlayer);
    if (application.activePlayer == application.startPlayer) {
        //alert("A round just ended");
    }
    updatePlayAreas();
}

function selectRandomPlayer() {
    return Math.floor(Math.random() * application.numberOfPlayers);
}

function nextPlayer(player) {
    player = player + 1;
    if (player > (application.numberOfPlayers - 1)) {
        player = 0;
    }
    return player;
}

function updatePlayAreas() {
    clearGameBoard();
    displayPlayerNames();
    displayGameDecks();
    displayFaceUpCards();
    displayGameNobles();
    displayGameTokens();
    displayActivePlayer();
}

function displayPlayerNames() {
    application.context.font = application.playerInfo.font;
    var xPos;
    var yPos;

    nextPlayerIndex = application.activePlayer;
    for (i = 0; i < application.numberOfPlayers; i++) {
        xPos = application.playAreas[i].xPos + application.padding;
        yPos = application.playAreas[i].yPos + application.padding + application.playerInfo.fontHeight;
        application.context.fillText(application.players[nextPlayerIndex].Name, xPos, yPos);
        nextPlayerIndex = nextPlayer(nextPlayerIndex);
    }

    xPos = application.playAreas[5].xPos + application.padding;
    yPos = application.playAreas[5].yPos + application.padding + application.playerInfo.fontHeight;
    application.context.fillText("It is " + application.players[application.activePlayer].Name + "'s turn", xPos, yPos);
}

function displayActivePlayer()
{
    var c = application.cardInfo;
    var img = document.getElementById("whiteCard");
    var xPos = application.padding;
    var yPos = application.playAreas[0].yPos + application.padding + 50;
    application.context.drawImage(img, xPos, yPos, c.width, c.height);
    application.context.fillText(application.players[application.activePlayer].Reserve.length, application.padding + c.fontMargin, yPos + c.fontHeight);
}

function updateButtonState() {

    if (application.state === "Active") {
        document.getElementById('buttonStart').disabled = true;
        document.getElementById('buttonQuit').disabled = false;
        document.getElementById('buttonDone').disabled = false;
    }
    else {
        document.getElementById('buttonStart').disabled = false;
        document.getElementById('buttonQuit').disabled = true;
        document.getElementById('buttonDone').disabled = true;
    }
}

function displayGameDecks() {
    var c = application.cardInfo;
    var yPos = application.nobleInfo.height + (application.padding * 2);
    application.context.font = c.font;

    var img = document.getElementById("greenCard");
    application.context.drawImage(img, application.padding, yPos, c.width, c.height);
    application.context.fillText(application.greenDrawDeck.length, application.padding + c.fontMargin, yPos + c.fontHeight);

    var imgYellow = document.getElementById("yellowCard");
    yPos += c.height + application.padding;
    application.context.drawImage(imgYellow, application.padding, yPos, c.width, c.height);
    application.context.fillText(application.yellowDrawDeck.length, application.padding + c.fontMargin, yPos + c.fontHeight);

    yPos += c.height + application.padding;
    var imgBlue = document.getElementById("blueCard");
    application.context.fillStyle = "white";
    application.context.drawImage(imgBlue, application.padding, yPos, c.width, c.height);
    application.context.fillText(application.blueDrawDeck.length, application.padding + c.fontMargin, yPos + c.fontHeight);

}

function displayFaceUpCards() {
    var yPos = application.nobleInfo.height + (application.padding * 2);
    var xPos = (application.padding * 2) + application.cardInfo.width;

    for (i = 0; i < application.greenFaceUpCards.length; i++) {       
        displayCardInfo(application.context, application.greenFaceUpCards[i], xPos, yPos);
        application.greenFaceUpCards[i].xPos = xPos;
        application.greenFaceUpCards[i].yPos = yPos;
        xPos += application.padding + application.cardInfo.width;
    }
    xPos = (application.padding * 2) + application.cardInfo.width;
    yPos += application.cardInfo.height + application.padding;

    for (i = 0; i < application.yellowFaceUpCards.length; i++) {
        displayCardInfo(application.context, application.yellowFaceUpCards[i], xPos, yPos);
        application.yellowFaceUpCards[i].xPos = xPos;
        application.yellowFaceUpCards[i].yPos = yPos;
        xPos += application.padding + application.cardInfo.width;
    }
    xPos = (application.padding * 2) + application.cardInfo.width;
    yPos += application.cardInfo.height + application.padding;

    for (i = 0; i < application.blueFaceUpCards.length; i++) {
        displayCardInfo(application.context, application.blueFaceUpCards[i], xPos, yPos);
        application.blueFaceUpCards[i].xPos = xPos;
        application.blueFaceUpCards[i].yPos = yPos;
        xPos += application.padding + application.cardInfo.width;        
    }
}

function displayCardInfo(ctx, card, x, y) {
	var c = application.cardInfo;
	var img = document.getElementById("whiteCard");
	ctx.drawImage(img, x, y, c.width, c.height);

	var face = application.cardFaceInfo;
	ctx.font = face.font;
	ctx.fillStyle = "black";
	var tokenColor = card.TokenColor.toLowerCase();

	var xPos = x + face.fontMargin;
	var yPos = y + face.fontHeight;
	if (card.Value > 0) ctx.fillText(card.Value, xPos, yPos);

	xPos = x + application.cardInfo.width - (5 + face.tokenWidth);
	yPos = y + 5;

	var currentImage = document.getElementById(tokenColor + "Coin");
	ctx.drawImage(currentImage, xPos, yPos, face.tokenWidth, face.tokenHeight);

	xPos = x + 5;
	yPos = y + application.cardInfo.height - 5 - face.costHeight;
	ctx.font = face.costFont;
	for (c = 0; c < card.CardCost.length; c++) {
		currentImage = document.getElementById(tokenColor = card.CardCost[c].Color.toLowerCase() + "Coin");
		ctx.drawImage(currentImage, xPos, yPos, face.costWidth, face.costHeight);
		if (card.CardCost[c].Color.toLowerCase() == "black" || card.CardCost[c].Color.toLowerCase() == "blue" || card.CardCost[c].Color.toLowerCase() == "red") {
			ctx.fillStyle = "white";
		}
		else {
			ctx.fillStyle = "black";
		}
		ctx.fillText(card.CardCost[c].Quantity, xPos + 4, yPos + 12);
		yPos -= face.costHeight;
	}
}

function reserveCard(deck, faceUpCards)
{
	var card = null;
	var drawCard = null;
	
	if (application.players[application.activePlayer].Reserve.length < 3)
	{
		card = faceUpCards.splice(application.selectedCardIndex, 1)[0];
		if (deck.length > 0)
		{
			drawCard = deck.pop();		
			faceUpCards.push(drawCard);
		}
		application.players[application.activePlayer].Reserve.push(card);	
	}
}

function displayGameTokens() {
	var yPos = application.playAreas[4].yPos + application.padding;
	var xPos = application.playAreas[4].xPos + (application.playAreas[4].width - application.padding - application.tokenInfo.width);
	application.context.font = application.tokenInfo.font;
	var diameter = application.tokenInfo.radius * 2;
	
	for (var i = 0; i <= 5; i++) {
		currentImageID = application.tokens[i].ImageId;
		currentImage = document.getElementById(currentImageID);
		application.context.drawImage(currentImage, xPos, yPos, diameter, diameter);
		application.tokens[i].xPos = xPos;
		application.tokens[i].yPos = yPos;
		if (application.tokens[i].Color == "black" || application.tokens[i].Color == "blue" || application.tokens[i].Color == "red") {
			application.context.fillStyle = "white";
		}
		else {
			application.context.fillStyle = "black";
		}
		application.context.fillText(application.tokens[i].Tokens, xPos + application.tokenInfo.fontMargin, yPos + application.tokenInfo.fontHeight);
		yPos += application.tokenInfo.height + application.padding;
	}
}

function displayGameNobles() {
	var n = application.nobleInfo;
	var xPos = application.playAreas[4].xPos + application.padding;
	var yPos = application.playAreas[4].yPos + application.padding;
	var currentImageID;
	var currentImage;

	for (i = 0; i < application.numberOfGameNobles; i++) {
		currentImageID = application.noblesFaceUp[i].ImageId;
		currentImage = document.getElementById(currentImageID);
		application.context.drawImage(currentImage, xPos, yPos, n.width, n.height);
		xPos += n.width + application.padding;
	}
}

function setStartingValues() {
	var startingValues = initializeStartingValues();
	application.numberOfGameNobles = startingValues[(application.numberOfPlayers - 2)].nobles;
	application.numberOfTokens = startingValues[(application.numberOfPlayers - 2)].tokens;
	application.greenDrawDeck = initializeGreenDeck();
	application.yellowDrawDeck = initializeYellowDeck();
	application.blueDrawDeck = initializeBlueDeck();
	application.noblesDeck = initializeNobles();
	application.tokens = initializeTokens();
	for (i = 0; i <= 4; i++) {
		application.tokens[i].Tokens = application.numberOfTokens;
	}
}
