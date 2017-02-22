function Wizard(obj) {
  this.name = obj.name;
  this.rested = true;
  this.spellCount = 0;
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
  this.spellCount++;
  if (this.spellCount < 3) {
    return 'MAGIC BULLET'
  } else {
    this.rested = false;
    return 'I SHALL NOT CAST!'; 
  }
}

module.exports = Wizard;
