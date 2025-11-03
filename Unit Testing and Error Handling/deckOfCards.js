function deckOfCards(arr) {
    function createCardObj(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitSymbols = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663' 
        };

        if (!validFaces.includes(face)) {
            throw new Error('Invalid card face: ' + face);
        }

        if (!suitSymbols.hasOwnProperty(suit)) {
            throw new Error('Invalid card suit: ' + suit);
        }

        return {
            face,
            suit,
            toString() {
                return face + suitSymbols[suit];
            }
        };
    }

    const result = [];

    for (let cardStr of arr) {
        let face = cardStr.slice(0, -1);
        let suit = cardStr.slice(-1);

        try {
            let card = createCardObj(face, suit);
            result.push(card.toString());
        } catch (err) {
            console.log(`Invalid card: ${cardStr}`);
            return;
        }
    }

    console.log(result.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);