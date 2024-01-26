var num1 = Math.floor(Math.random() * 6) + 1;
var num2 =  Math.floor(Math.random() * 6 )+ 1;

var image1_new_source ="dice" + num1 + ".png";
var image2_new_source ="dice" + num2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",image1_new_source);
document.querySelectorAll("img")[1].setAttribute("src",image2_new_source);


if(num1>num2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(num2>num1){
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  