//Zadatak 1
function broj() {
   
    let randombroj = Math.floor(Math.random() * 100) + 1;


    if (randombroj % 2 === 0) {
        console.log(randomNumber + " je paran broj.");
    } else {
        console.log(randombroj+ " je neparan broj.");
    }
}



broj();

//Drugi zadatak
 function calculateFactorial(broj){
    if (broj===0 || broj===1){
        return 1;
    }else{
        return broj * factorial(broj-1);
    }



 }
 let rezultat=factorial(1);
 console.log(rezultat);



 //Treci zadatak
 function isPrime(broj1) {
    if (broj1 <= 1) {
      return false;
    }
    for (let i = 2; i < broj1; i++) {
      if (broj1 % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(1));
  console.log(isPrime(8));

  //Četvrti zadatak

  let niz=[1,45,6,34,89];
  let filterEvenNumbers=niz.filter(broj2 => broj2%2===0);
  console.log(filterEvenNumbers);