function Pirate(name, job) {
  this.name = name;
  this.job = 'Scallywag';
  this.cursed = false;
  this.heinousAct = 0;
  this.booty = 0;


if (job === 'cook') {
  this.job = 'cook';
}
}

Pirate.prototype.commitHeinousAct = function() {
  if (this.heinousAct < 3) {
    this.heinousAct++;
  }
  if (this.heinousAct >= 3) {
    this.cursed = true;
  }
}

Pirate.prototype.robShip = function () {

}

module.exports = Pirate;
