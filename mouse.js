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
                        document.getElementById("dialog").showModal();
                        application.selectedCardIndex = g;
                        application.selectedCardColor = "green";
                        displayCardInfo(application.dContext, application.greenFaceUpCards[g], 10, 10);
                    }
                }
                for (var g = 0; g < application.yellowFaceUpCards.length; g++) {
                    if (detectRectCollision(x, y, application.yellowFaceUpCards[g].xPos, application.yellowFaceUpCards[g].yPos, application.cardInfo.width, application.cardInfo.height)) {
                        document.getElementById("dialog").showModal();
                        application.selectedCardIndex = g;
                        application.selectedCardColor = "yellow";
                        displayCardInfo(application.dContext, application.yellowFaceUpCards[g], 10, 10);
                    }
                }
                for (var g = 0; g < application.blueFaceUpCards.length; g++) {
                    if (detectRectCollision(x, y, application.blueFaceUpCards[g].xPos, application.blueFaceUpCards[g].yPos, application.cardInfo.width, application.cardInfo.height)) {
                        document.getElementById("dialog").showModal();
                        application.selectedCardIndex = g;
                        application.selectedCardColor = "blue";
                        displayCardInfo(application.dContext, application.blueFaceUpCards[g], 10, 10);
                    }
                }
                
            }
        }
    }
}
        
function ok()
{
    document.getElementById("dialog").close();
}

function reserve()
{
    var card = null;
    var drawCard = null;
    if (application.selectedCardColor == "green") {
        card = application.greenFaceUpCards.splice(application.selectedCardIndex, 1)[0];
        drawCard = application.greenDrawDeck.pop();
        application.greenFaceUpCards.push(drawCard);
    }

    if (application.selectedCardColor == "yellow") {
        card = application.yellowFaceUpCards.splice(application.selectedCardIndex, 1)[0];
        drawCard = application.yellowDrawDeck.pop();
        application.yellowFaceUpCards.push(drawCard);
    }

    if (application.selectedCardColor == "blue") {
        card = application.blueFaceUpCards.splice(application.selectedCardIndex, 1)[0];
        drawCard = application.blueDrawDeck.pop();
        application.blueFaceUpCards.push(drawCard);
    }
    application.players[application.activePlayer].Reserve.push(card);
    updatePlayAreas();
    
    displayActivePlayer();
    document.getElementById("dialog").close();
}

function cancel()
{
    application.selectedCardColor = null;
    application.selectedCardIndex = null;
    document.getElementById("dialog").close();
}

function detectRectCollision(x, y, ox, oy, ow, oh) {
    if (x >= ox && x <= (ox + ow) && y >= oy && y <= (oy + oh)) {
        return true;
    }
    return false;
}
