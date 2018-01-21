var randomNumber = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var gems = ["gem1.png","gem2.png","gem3.png","gem4.png"];


function setup(){
	var randDiv = $("#randomNumber");
	randDiv.html("<h2>" + randomNumber + "</h2>");
	var winsDiv = $("#winsLosses");
	winsDiv.html("<p>Wins: " + wins + "</p>" + 	"<p>Losses: " + losses + " </p>");
	var totalDiv = $("#totalScore");
	totalDiv.html("<h2>" + totalScore + "</h2>");
	for (var i = 0;i< gems.length; i++) {
		
		var newImg = $('img');
		newImg.addClass("crystal-image");
		newImg.attr("src", "assets/images/"+gems[i]);
		$("#crystals").append(newImg);
	}

}
// setup();
// $(document).ready(function(){
// 	console.log( "ready!" );
// 	setup();
// });
window.onload = function draw(){
	setup();
}