function Hobbit (name, disposition, age) {
  this.name = name;
  this.disposition = "homebody";
  this.age = 0;
  this.isShort = true;
  this.old = false;
  this.hasRing = false;
  if (this.name === 'Frodo') {
    this.hasRing = true;
  } else {
    this.hasRing = false;
  }
}


Hobbit.prototype.celebrateBirthday = function(num, hobbit) {
  this.age++;
  if (this.age >= 33) {
    this.adult = true;
    if (this.age >= 101) {
    this.old = true;
  } else {
      this.old = false;
    }
  } else {
    this.adult = false;
  }
}



module.exports = Hobbit;
