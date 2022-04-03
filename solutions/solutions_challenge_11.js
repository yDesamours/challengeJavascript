String.prototype.toJadenCase = function (){
  return this.split(' ').map(c => c[0].toUpperCase()+c.slice(1)).join(' ');
}
