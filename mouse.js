function doMouseDown(event) {
    event.preventDefault();
    if (application.state == "Active") {
        x = event.pageX - 19;
        y = event.pageY - 88;
        checkPlayArea(x, y);
    }
}

function checkPlayArea(x, y) {
    var p = application.playAreas;
    for (var i = 0; i < p.length; i++) 
    {
        if (detectRectCollision(x, y, p[i].xPos, p[i].yPos, p[i].width, p[i].height)) 
        {
            if (p[i].Type = "Game")
            {
                for (var g = 0; g < application.greenFaceUpCards.length; g++)
                {
                    if (detectRectCollision(x, y, application.greenFaceUpCards[g].xPos, application.greenFaceUpCards[g].yPos, application.cardInfo.width, application.cardInfo.height))
                    {
                        document.getElementById("cardDialog").showModal();
						document.getElementById("buttonReserve").disabled = (application.players[application.activePlayer].Reserve.length >= 3);
                        application.selectedCardIndex = g;
                        application.selectedCardColor = "green";
                        displayCardInfo(application.cContext, application.greenFaceUpCards[g], 70, 10);
                    }
                }
                for (var g = 0; g < application.yellowFaceUpCards.length; g++) 
				{
                    if (detectRectCollision(x, y, application.yellowFaceUpCards[g].xPos, application.yellowFaceUpCards[g].yPos, application.cardInfo.width, application.cardInfo.height)) 
					{
                        document.getElementById("cardDialog").showModal();
						document.getElementById("buttonReserve").disabled = (application.players[application.activePlayer].Reserve.length >= 3);
                        application.selectedCardIndex = g;
                        application.selectedCardColor = "yellow";
                        displayCardInfo(application.cContext, application.yellowFaceUpCards[g], 70, 10);
                    }
                }
                for (var g = 0; g < application.blueFaceUpCards.length; g++) 
				{
                    if (detectRectCollision(x, y, application.blueFaceUpCards[g].xPos, application.blueFaceUpCards[g].yPos, application.cardInfo.width, application.cardInfo.height)) 
					{
                        document.getElementById("cardDialog").showModal();
						document.getElementById("buttonReserve").disabled = (application.players[application.activePlayer].Reserve.length >= 3);
                        application.selectedCardIndex = g;
                        application.selectedCardColor = "blue";
                        displayCardInfo(application.cContext, application.blueFaceUpCards[g], 70, 10);
                    }
                }
				for (var g = 0; g < (application.tokens.length - 1); g++)
				{
					if (detectTokenCollision(x, y, application.tokens[g].xPos, application.tokens[g].yPos, application.tokenInfo.radius))
					{
						document.getElementById("tokenDialog").showModal();
						application.dialogTokens = displayDialogTokens();
					}
				}
            }
        }
    }
}
  
function displayDialogTokens() 
{
	application.tContext.font = "20px Arial Bold";
	var fontMargin = 7;
	var fontHeight = 19;
	
	var token = new Object();
	var tokens = [];
	var diameter = 25;
	var padding = 4;
	var xPos = 5;
	var yPos = 5;
	var offset = 100;
	
	for (var i = 0; i <= 4; i++) {
		currentImageID = application.tokens[i].ImageId;
		currentImage = document.getElementById(currentImageID);
		application.tContext.drawImage(currentImage, xPos, yPos, diameter, diameter);
		application.tContext.drawImage(currentImage, xPos + offset, yPos, diameter, diameter);
		token = application.tokens[i];
		if (token.Color == "black" || token.Color == "blue" || token.Color == "red") {
			application.tContext.fillStyle = "white";
		}
		else {
			application.tContext.fillStyle = "black";
		}
		application.tContext.fillText(token.Tokens, xPos + fontMargin, yPos + fontHeight);
		yPos += diameter + padding;
		tokens.push(token);
	}
	return tokens;
}
  
function cardOk()
{
    document.getElementById("cardDialog").close();
}

function cardReserve()
{
	if (application.selectedCardColor == "green") {
		reserveCard(application.greenDrawDeck, application.greenFaceUpCards)
    }
    if (application.selectedCardColor == "yellow") {
		reserveCard(application.yellowDrawDeck, application.yellowFaceUpCards)
    }
    if (application.selectedCardColor == "blue") {
		reserveCard(application.blueDrawDeck, application.blueFaceUpCards)
    }
	
	updatePlayAreas();
    displayActivePlayer();
    document.getElementById("cardDialog").close();
}

function cardCancel()
{
    application.selectedCardColor = null;
    application.selectedCardIndex = null;
    document.getElementById("cardDialog").close();
}

function tokenOk()
{
    document.getElementById("tokenDialog").close();
}

function tokenCancel()
{
    document.getElementById("tokenDialog").close();
}


function detectRectCollision(x, y, ox, oy, ow, oh) {
    if (x >= ox && x <= (ox + ow) && y >= oy && y <= (oy + oh)) {
        return true;
    }
    return false;
}

function detectTokenCollision(x, y, ox, oy, or)
{
	var dx = x - (ox + or);
	var dy = y - (oy + or);
	var distance = Math.sqrt(dx * dx + dy * dy);
	return (distance <= or);
}
