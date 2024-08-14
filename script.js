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