function Wizard(obj) {
  this.name = obj.name;
  this.rested = true;
  this.cast = 0;
  if (obj.bearded === undefined) {
    this.bearded = true;
  } else {
    this.bearded = obj.bearded;
  }
}

Wizard.prototype.incantation = function(spell) {
  spell = spell.toUpperCase();
  return spell;
}

Wizard.prototype.cast = function() {
  this.rested++;
  if (this.rested < 3) {
    return 'MAGIC BULLET';
  } else {
    return 'I SHALL NOT CAST!';
  }
}
module.exports = Wizard;
