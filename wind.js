function roll(){

let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;
 
let images1 = "images/dice"+ randomNumber1 +".png";
let images2 = "images/dice"+ randomNumber2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML='Player 1 wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML='Player 2 wins!';
} else {
    document.querySelector('h1').innerHTML='A Draw!';
}

}