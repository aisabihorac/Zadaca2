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
        return broj * factorial(n-1);
    }



 }
 let rezultat=factorial(1);
 console.log(rezultat);