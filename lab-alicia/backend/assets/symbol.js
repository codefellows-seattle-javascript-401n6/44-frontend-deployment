// create label and location

Class Symbol = {
  constructor() {
    let card1 = new Card("/Users/alicialycan/codefellows/401/labs/44-app-from-scratch/lab-alicia/backend/public/src/components/spot-it/01.png", [
    new Symbol('igloo', .3089, .1808), 
    new Symbol('dragon', .5943, .1808), 
    new Symbol('art', .7476, .2403), 
    new Symbol('lightning', .7688, .4289), 
    new Symbol('knight', .5259, .3436), 
    new Symbol('man', .6344, .6020), 
    new Symbol('dog', .3726, .5658), 
    new Symbol('padlock', .1910, .3824),
  ]);

  let card2 = new Card("/Users/alicialycan/codefellows/401/labs/44-app-from-scratch/lab-alicia/backend/public/src/components/spot-it/55.png", [   
    new Symbol('padlock'), 
    new Symbol('lips', .8028, .3900), 
    new Symbol('anchor', .5154, .4738), 
    new Symbol('music-note', .6793, .6937), 
    new Symbol('flower', .4513, .7565), 
    new Symbol('exclamation-point', .2565, .6361), 
    new Symbol('car', .2422, .3350), 
    new Symbol('key', .4821, .1387)
  ]);
  }
};  

module.exports = Symbol;