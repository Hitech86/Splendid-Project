function initializeStartingValues() {
    var values = [
        { nobles: 3, tokens: 4 },
        { nobles: 4, tokens: 5 },
        { nobles: 5, tokens: 7 },
    ];
    return values;
}

function initializeTokens() {
    var tokens = new Array();

    tokens[0] = { xPos: 0, yPos: 0, Tokens: 0, ImageId: "blackCoin", Color: "black" };
    tokens[1] = { xPos: 0, yPos: 0, Tokens: 0, ImageId: "whiteCoin", Color: "white" };
    tokens[2] = { xPos: 0, yPos: 0, Tokens: 0, ImageId: "redCoin", Color: "red" };
    tokens[3] = { xPos: 0, yPos: 0, Tokens: 0, ImageId: "greenCoin", Color: "green" };
    tokens[4] = { xPos: 0, yPos: 0, Tokens: 0, ImageId: "blueCoin", Color: "blue" };
    tokens[5] = { xPos: 0, yPos: 0, Tokens: 5, ImageId: "yellowCoin", Color: "yellow" };

    return tokens;
}

function initializePlayAreas() {
    var playAreas = new Array();

    playAreas[0] = { xPos: 1, yPos: 410, width: 530, height: 260, Type: "Active" };
    playAreas[1] = { xPos: 530, yPos: 466, width: 300, height: 233, Type: "Inactive" };
    playAreas[2] = { xPos: 530, yPos: 233, width: 300, height: 233, Type: "Inactive" };
    playAreas[3] = { xPos: 530, yPos: 1, width: 300, height: 234, Type: "Inactive" };
    playAreas[4] = { xPos: 1, yPos: 1, width: 530, height: 410, Type: "Game" };
    playAreas[5] = { xPos: 1, yPos: 670, width: 530, height: 30, Type: "Status" };

    return playAreas;
}

function initializeNobles() {
    var nobles = new Array();

    nobles[0] = { Name: "Henry", ImageId: "Henry", Value: 3, NumberOfCosts: 2, CardCost: [{ Color: "Black", Quantity: 4 }, { Color: "Red", Quantity: 4 }] };
    nobles[1] = { Name: "Elizabeth", ImageId: "Elizabeth", Value: 3, NumberOfCosts: 2, CardCost: [{ Color: "Black", Quantity: 4 }, { Color: "White", Quantity: 4 }] };
    nobles[2] = { Name: "Jon Paul", ImageId: "JonPaul", Value: 3, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 4 }, { Color: "Green", Quantity: 4 }] };
    nobles[3] = { Name: "Don Juan", ImageId: "DonJuan", Value: 3, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 4 }, { Color: "White", Quantity: 4 }] };
    nobles[4] = { Name: "Kathryn", ImageId: "Kathryn", Value: 3, NumberOfCosts: 2, CardCost: [{ Color: "Red", Quantity: 4 }, { Color: "Green", Quantity: 4 }] };
    nobles[5] = { Name: "Teresa", ImageId: "Teresa", Value: 3, NumberOfCosts: 3, CardCost: [{ Color: "Green", Quantity: 3 }, { Color: "Blue", Quantity: 3 }, { Color: "Red", Quantity: 3 }] };
    nobles[6] = { Name: "Joan", ImageId: "Joan", Value: 3, NumberOfCosts: 3, CardCost: [{ Color: "Green", Quantity: 3 }, { Color: "Blue", Quantity: 3 }, { Color: "White", Quantity: 3 }] };
    nobles[7] = { Name: "Columbus", ImageId: "Columbus", Value: 3, NumberOfCosts: 3, CardCost: [{ Color: "Black", Quantity: 3 }, { Color: "Red", Quantity: 3 }, { Color: "Green", Quantity: 3 }] };
    nobles[8] = { Name: "Violet", ImageId: "Violet", Value: 3, NumberOfCosts: 3, CardCost: [{ Color: "Black", Quantity: 3 }, { Color: "Blue", Quantity: 3 }, { Color: "White", Quantity: 3 }] };
    nobles[9] = { Name: "William", ImageId: "William", Value: 3, NumberOfCosts: 3, CardCost: [{ Color: "Black", Quantity: 3 }, { Color: "Red", Quantity: 3 }, { Color: "White", Quantity: 3 }] };

    return nobles;
}

function initializeGreenDeck() {
    var deck = new Array();

    deck[0] = { BackColor: "Green", TokenColor: "Red", Value: 1, NumberOfCosts: 1, CardCost: [{ Color: "White", Quantity: 4 }] };
    deck[1] = { BackColor: "Green", TokenColor: "Green", Value: 1, NumberOfCosts: 1, CardCost: [{ Color: "Black", Quantity: 4 }] };
    deck[2] = { BackColor: "Green", TokenColor: "Blue", Value: 1, NumberOfCosts: 1, CardCost: [{ Color: "Red", Quantity: 4 }] };
    deck[3] = { BackColor: "Green", TokenColor: "White", Value: 1, NumberOfCosts: 1, CardCost: [{ Color: "Green", Quantity: 4 }] };
    deck[4] = { BackColor: "Green", TokenColor: "Black", Value: 1, NumberOfCosts: 1, CardCost: [{ Color: "Blue", Quantity: 4 }] };

    deck[5] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 1, CardCost: [{ Color: "White", Quantity: 3 }] };
    deck[6] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 1, CardCost: [{ Color: "Red", Quantity: 3 }] };
    deck[7] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 1, CardCost: [{ Color: "Black", Quantity: 3 }] };
    deck[8] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 1, CardCost: [{ Color: "Blue", Quantity: 3 }] };
    deck[9] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 1, CardCost: [{ Color: "Green", Quantity: 3 }] };

    deck[10] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 2 }, { Color: "Green", Quantity: 1 }] };
    deck[11] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Blue", Quantity: 1 }] };
    deck[12] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Black", Quantity: 2 }] };
    deck[13] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "Red", Quantity: 2 }, { Color: "Black", Quantity: 1 }] };
    deck[14] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "Green", Quantity: 2 }, { Color: "Red", Quantity: 1 }] };

    deck[15] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Red", Quantity: 2 }] };
    deck[16] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 2 }, { Color: "Red", Quantity: 2 }] };
    deck[17] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "Green", Quantity: 2 }, { Color: "Black", Quantity: 2 }] };
    deck[18] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 2 }, { Color: "Black", Quantity: 2 }] };
    deck[19] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Green", Quantity: 2 }] };

    deck[20] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[21] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 1 }, { Color: "Red", Quantity: 1 }, { Color: "Black", Quantity: 2 }] };
    deck[22] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 2 }, { Color: "Black", Quantity: 1 }] };
    deck[23] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 2 }, { Color: "Red", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[24] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 2 }, { Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 1 }] };

    deck[25] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Green", Quantity: 1 }, { Color: "Black", Quantity: 2 }] };
    deck[26] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 1 }, { Color: "Red", Quantity: 2 }, { Color: "Black", Quantity: 2 }] };
    deck[27] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Green", Quantity: 2 }, { Color: "Red", Quantity: 2 }] };
    deck[28] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 2 }, { Color: "Green", Quantity: 2 }, { Color: "Black", Quantity: 1 }] };
    deck[29] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Blue", Quantity: 2 }, { Color: "Red", Quantity: 1 }] };

    deck[30] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Red", Quantity: 1 }, { Color: "Black", Quantity: 3 }] };
    deck[31] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 3 }, { Color: "Green", Quantity: 1 }] };
    deck[32] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 3 }, { Color: "Red", Quantity: 1 }] };
    deck[33] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Blue", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[34] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 3, CardCost: [{ Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 3 }, { Color: "Black", Quantity: 1 }] };

    deck[35] = { BackColor: "Green", TokenColor: "Red", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[36] = { BackColor: "Green", TokenColor: "Green", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 1 }, { Color: "Red", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[37] = { BackColor: "Green", TokenColor: "Blue", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[38] = { BackColor: "Green", TokenColor: "White", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 1 }, { Color: "Black", Quantity: 1 }] };
    deck[39] = { BackColor: "Green", TokenColor: "Black", Value: 0, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 1 }] };

    return deck;
}

function initializeYellowDeck() {
    var deck = new Array();

    deck[0] = { BackColor: "Yellow", TokenColor: "Red", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Red", Quantity: 2 }, { Color: "Black", Quantity: 3 }] };
    deck[1] = { BackColor: "Yellow", TokenColor: "Green", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Green", Quantity: 2 }, { Color: "Red", Quantity: 3 }] };
    deck[2] = { BackColor: "Yellow", TokenColor: "Blue", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 2 }, { Color: "Green", Quantity: 2 }, { Color: "Red", Quantity: 3 }] };
    deck[3] = { BackColor: "Yellow", TokenColor: "White", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Blue", Quantity: 3 }, { Color: "Red", Quantity: 3 }] };
    deck[4] = { BackColor: "Yellow", TokenColor: "Black", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Green", Quantity: 3 }, { Color: "Black", Quantity: 2 }] };

    deck[5] = { BackColor: "Yellow", TokenColor: "Red", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 3 }, { Color: "Red", Quantity: 2 }, { Color: "Black", Quantity: 3 }] };
    deck[6] = { BackColor: "Yellow", TokenColor: "Green", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Blue", Quantity: 3 }, { Color: "Black", Quantity: 2 }] };
    deck[7] = { BackColor: "Yellow", TokenColor: "Blue", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 2 }, { Color: "Green", Quantity: 3 }, { Color: "Black", Quantity: 3 }] };
    deck[8] = { BackColor: "Yellow", TokenColor: "White", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "Green", Quantity: 3 }, { Color: "Red", Quantity: 2 }, { Color: "Black", Quantity: 2 }] };
    deck[9] = { BackColor: "Yellow", TokenColor: "Black", Value: 1, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Blue", Quantity: 2 }, { Color: "Green", Quantity: 2 }] };

    deck[10] = { BackColor: "Yellow", TokenColor: "Red", Value: 2, NumberOfCosts: 1, CardCost: [{ Color: "Black", Quantity: 5 }] };
    deck[11] = { BackColor: "Yellow", TokenColor: "Green", Value: 2, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 4 }, { Color: "Blue", Quantity: 2 }, { Color: "Black", Quantity: 1 }] };
    deck[12] = { BackColor: "Yellow", TokenColor: "Blue", Value: 2, NumberOfCosts: 1, CardCost: [{ Color: "Blue", Quantity: 5 }] };
    deck[13] = { BackColor: "Yellow", TokenColor: "White", Value: 2, NumberOfCosts: 2, CardCost: [{ Color: "Red", Quantity: 5 }, { Color: "Black", Quantity: 3 }] };
    deck[14] = { BackColor: "Yellow", TokenColor: "Black", Value: 2, NumberOfCosts: 2, CardCost: [{ Color: "Green", Quantity: 5 }, { Color: "Red", Quantity: 3 }] };

    deck[15] = { BackColor: "Yellow", TokenColor: "Red", Value: 2, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Black", Quantity: 5 }] };
    deck[16] = { BackColor: "Yellow", TokenColor: "Green", Value: 2, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 5 }, { Color: "Green", Quantity: 3 }] };
    deck[17] = { BackColor: "Yellow", TokenColor: "Blue", Value: 2, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 5 }, { Color: "Blue", Quantity: 3 }] };
    deck[18] = { BackColor: "Yellow", TokenColor: "White", Value: 2, NumberOfCosts: 3, CardCost: [{ Color: "Green", Quantity: 1 }, { Color: "Red", Quantity: 4 }, { Color: "black", Quantity: 2 }] };
    deck[19] = { BackColor: "Yellow", TokenColor: "Black", Value: 2, NumberOfCosts: 1, CardCost: [{ Color: "White", Quantity: 5 }] };

    deck[20] = { BackColor: "Yellow", TokenColor: "Red", Value: 2, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 1 }, { Color: "Blue", Quantity: 4 }, { Color: "Green", Quantity: 2 }] };
    deck[21] = { BackColor: "Yellow", TokenColor: "Green", Value: 2, NumberOfCosts: 1, CardCost: [{ Color: "Green", Quantity: 5 }] };
    deck[22] = { BackColor: "Yellow", TokenColor: "Blue", Value: 2, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 2 }, { Color: "Red", Quantity: 1 }, { Color: "black", Quantity: 4 }] };
    deck[23] = { BackColor: "Yellow", TokenColor: "White", Value: 2, NumberOfCosts: 1, CardCost: [{ Color: "Red", Quantity: 5 }] };
    deck[24] = { BackColor: "Yellow", TokenColor: "Black", Value: 2, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 1 }, { Color: "Green", Quantity: 4 }, { Color: "Red", Quantity: 2 }] };

    deck[25] = { BackColor: "Yellow", TokenColor: "Red", Value: 3, NumberOfCosts: 1, CardCost: [{ Color: "Red", Quantity: 6 }] };
    deck[26] = { BackColor: "Yellow", TokenColor: "Green", Value: 3, NumberOfCosts: 1, CardCost: [{ Color: "Green", Quantity: 6 }] };
    deck[27] = { BackColor: "Yellow", TokenColor: "Blue", Value: 3, NumberOfCosts: 1, CardCost: [{ Color: "Blue", Quantity: 6 }] };
    deck[28] = { BackColor: "Yellow", TokenColor: "White", Value: 3, NumberOfCosts: 1, CardCost: [{ Color: "White", Quantity: 6 }] };
    deck[29] = { BackColor: "Yellow", TokenColor: "Black", Value: 3, NumberOfCosts: 1, CardCost: [{ Color: "Black", Quantity: 6 }] };

    return deck;
}

function initializeBlueDeck() {
    var deck = new Array();

    deck[0] = { BackColor: "Blue", TokenColor: "Red", Value: 3, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Blue", Quantity: 5 }, { Color: "Green", Quantity: 3 }, { Color: "Black", Quantity: 3 }] };
    deck[1] = { BackColor: "Blue", TokenColor: "Green", Value: 3, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 5 }, { Color: "Blue", Quantity: 3 }, { Color: "Red", Quantity: 3 }, { Color: "Black", Quantity: 3 }] };
    deck[2] = { BackColor: "Blue", TokenColor: "Blue", Value: 3, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Green", Quantity: 3 }, { Color: "Red", Quantity: 3 }, { Color: "Black", Quantity: 5 }] };
    deck[3] = { BackColor: "Blue", TokenColor: "White", Value: 3, NumberOfCosts: 4, CardCost: [{ Color: "Blue", Quantity: 3 }, { Color: "Green", Quantity: 3 }, { Color: "Red", Quantity: 5 }, { Color: "Black", Quantity: 3 }] };
    deck[4] = { BackColor: "Blue", TokenColor: "Black", Value: 3, NumberOfCosts: 4, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Blue", Quantity: 3 }, { Color: "Green", Quantity: 5 }, { Color: "Red", Quantity: 3 }] };

    deck[5] = { BackColor: "Blue", TokenColor: "Red", Value: 4, NumberOfCosts: 1, CardCost: [{ Color: "Green", Quantity: 7 }] };
    deck[6] = { BackColor: "Blue", TokenColor: "Green", Value: 4, NumberOfCosts: 1, CardCost: [{ Color: "Blue", Quantity: 7 }] };
    deck[7] = { BackColor: "Blue", TokenColor: "Blue", Value: 4, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 6 }, { Color: "Blue", Quantity: 3 }, { Color: "Black", Quantity: 3 }] };
    deck[8] = { BackColor: "Blue", TokenColor: "White", Value: 4, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Red", Quantity: 3 }, { Color: "Black", Quantity: 6 }] };
    deck[9] = { BackColor: "Blue", TokenColor: "Black", Value: 4, NumberOfCosts: 1, CardCost: [{ Color: "Red", Quantity: 7 }] };

    deck[10] = { BackColor: "Blue", TokenColor: "Red", Value: 4, NumberOfCosts: 3, CardCost: [{ Color: "Blue", Quantity: 3 }, { Color: "Green", Quantity: 6 }, { Color: "Red", Quantity: 3 }] };
    deck[11] = { BackColor: "Blue", TokenColor: "Green", Value: 4, NumberOfCosts: 3, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Blue", Quantity: 6 }, { Color: "Green", Quantity: 3 }] };
    deck[12] = { BackColor: "Blue", TokenColor: "Blue", Value: 4, NumberOfCosts: 1, CardCost: [{ Color: "White", Quantity: 7 }] };
    deck[13] = { BackColor: "Blue", TokenColor: "White", Value: 4, NumberOfCosts: 1, CardCost: [{ Color: "Black", Quantity: 7 }] };
    deck[14] = { BackColor: "Blue", TokenColor: "Black", Value: 4, NumberOfCosts: 3, CardCost: [{ Color: "Green", Quantity: 3 }, { Color: "Red", Quantity: 6 }, { Color: "Black", Quantity: 3 }] };

    deck[15] = { BackColor: "Blue", TokenColor: "Red", Value: 5, NumberOfCosts: 2, CardCost: [{ Color: "Green", Quantity: 7 }, { Color: "Red", Quantity: 3 }] };
    deck[16] = { BackColor: "Blue", TokenColor: "Green", Value: 5, NumberOfCosts: 2, CardCost: [{ Color: "Blue", Quantity: 7 }, { Color: "Green", Quantity: 3 }] };
    deck[17] = { BackColor: "Blue", TokenColor: "Blue", Value: 5, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 7 }, { Color: "Blue", Quantity: 3 }] };
    deck[18] = { BackColor: "Blue", TokenColor: "White", Value: 5, NumberOfCosts: 2, CardCost: [{ Color: "White", Quantity: 3 }, { Color: "Black", Quantity: 7 }] };
    deck[19] = { BackColor: "Blue", TokenColor: "Black", Value: 5, NumberOfCosts: 2, CardCost: [{ Color: "Red", Quantity: 7 }, { Color: "Black", Quantity: 3 }] };

    return deck;
}
