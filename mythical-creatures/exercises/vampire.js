function Vampire(name, pet="bat") {
  this.name = name;
  this.pet = pet;
  this.thirsty = true;
}

Vampire.prototype.drink = function() {
  if (this.thirsty === true) {
    this.thirsty = false;
  }
}

module.exports = Vampire;
