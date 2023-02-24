class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
    // console.log("входные " + this.min);
    // console.log("входные " + this.max);
  }

  guess() {
    return (this.a = Math.round((this.max + this.min) / 2));
    // console.log("гес " + this.a);
  }

  lower() {
    this.max = this.a;
    // console.log("меньше " + this.a);
  }

  greater() {
    this.min = this.a;
    // console.log("больше " + this.a);
  }
}

module.exports = GuessingGame;
