var colorArray = new Array();
colorArray = ["G", "R", "Y", "B"];

function black(){
  document.getElementById("colorGenerator").style.color="black";
}

function startGame(){
  document.getElementById("colorGenerator").style.color="green";
  setTimeout(black,500);
}
