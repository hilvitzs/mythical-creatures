function Dragon (name, dragonName, color) {
  this.name = name;
  this.rider = dragonName;
  this.color = color;
  this.hungry = true;
  this.meals = 0;
}

Dragon.prototype.eat = function () {
  if (this.meals < 3) {
    this.meals++;
  }
  if (this.meals === 3) {
    this.hungry = false;
  }
}






module.exports = Dragon;
