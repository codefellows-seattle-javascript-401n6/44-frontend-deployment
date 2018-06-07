export default class SpotItEngine {
    constructor() {
        this.card1 = null;
        this.card2 = null;
        this.createTwoCards();

    }

    createTwoCards = () => { 
    return {
        card1: ["igloo", "dragon", "art", "lightning", "kinght", "man", " dog", "padlock"],
        card2: ["padlock", "lips", "anchor", "music-note", "flower", "exclamation-point", "car", "key"],
        }
    }

    getState = () => {

    }

    isMatch = (symbol) => {
        if(this.guessesLeft <= 0) {
            return
        }

        this.guessesLeft--;



        const isInCard1 = this.card1.includes(symbol);
        const isInCard2 = this.card2.includes(symbol);
        const isMatch = isInCard1 && isInCard2;

        if(isMatch) {
            let cards = [this.card1, this.card2];
            this.card1 = cards[1];
            this.card2 = cards[0];
            this.guessesLeft = 3;
        }
        return isMatch;
    }

    // render() {
    //     return <Fragement>
    //         <div>

    //         </div>

    //     </Fragement>
    // }
}