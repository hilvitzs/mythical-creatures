function Medusa(name) {
  this.name = name;
  this.statues = [];
}

Medusa.prototype.stare = function(victim) {
  this.statues.push(victim);
  for (var i = 0; i < this.statues.length; i++) {
  if (this.statues.length < 4) {
  } else {
    this.statues.splice(0, 1);
    }
  }
}

function Person(name) {
  this.name = name;
}



module.exports = {Medusa, Person};
