/* Buatlah method pada string yang dapat membalikkan nilai string itu sendiri dalam keadaan terbalik

Contoh:
“thor”.reverse() -> roht
“rusak”.revers() -> kasur */


String.prototype.reverseStr = function() {
  // let string = str;
  let newString = '';

  for(let i = this.length-1; i >=0; i--){
    // console.log(i);
    // console.log(this);
    // console.log(this.length-1);
    // console.log(i);
    newString = newString + this[i];
    console.log(this[i]);
  }
  return newString;

}

console.log('kasur'.reverseStr());
// console.log(reverseStr('kasur'));