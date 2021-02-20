// Bilangan prima adalah bilangan yang > 1, hanya bisa dibagi oleh dua bilangan berbeda. Bilangan pertama adalah 1, dan bilangan kedua adalah bilangan itu sendiri. jika ada sisa pembagian modulus, itu masih dihitung bil. prima. pembaginya mulai dari 1 s/d nilai yg dicari

Number.prototype.isPrima = function (){
  let pembagi = 0;
  // let i = 1, dan akan ditambah terus karena dilooping, sampai samadengan total angka yang di inputkan.
  for(let i=1; i <= this; i++){
    //cari hingga pembaginya 2 s/d jmlh inputan angka
    //pembaginya 2: bisa dibagi 1 atau angka inputan itu sendiri
    if(this%i == 0){
      pembagi++
    }
  }
  //jika ada 2pembagi(1 & bil itu sendiri) maka prima
  if(pembagi == 2){
    console.log("prima")
  }else{
    console.log("bukan prima")
  }
}

let angka = 5
console.log(angka.isPrima());
