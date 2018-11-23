var noun = ["cat", "dog", "fish", "bird", "turtle"];
var adj = ["small", "big", "nice", "cute", "amazing"];

var i = Math.floor(Math.random()*5);
var nounResult = noun[i];
var adjResult = adj[i];

function generator(){

  document.getElementById("output").innerHTML = "What a" + " " + adjResult + " " + nounResult+"!";

}
