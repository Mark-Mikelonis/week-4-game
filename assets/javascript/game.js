var randomNumber = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var gems = ["gem1.png","gem2.png","gem3.png","gem4.png"];

function getRandom(){
	var min = Math.floor(19);
	var max = Math.ceil(120)
	return Math.floor(Math.random() * (max-min+1))+min;
}
function getValue(){
	return (Math.ceil(Math.random() * 12 ));// +1);
}
function win(){
	wins++;
	setTimeout(function(){
		alert("You Win!");
		setup();
	},1);
	
}
function lose(){
	losses++;
	setTimeout(function(){
		alert("You Lose!");
		setup();
	},1)
}

function setup(){
	totalScore = 0;
	var randDiv = $("#randomNumber");
	randomNumber = getRandom();
	randDiv.html("<h2>" + randomNumber + "</h2>");
	var winsDiv = $("#winsLosses");
	winsDiv.html("<p>Wins: " + wins + "</p>" + 	"<p>Losses: " + losses + " </p>");
	var totalDiv = $("#totalScore");
	totalDiv.html("<h2>" + totalScore + "</h2>");
	$("#crystals").empty();
	for (var i = 0;i< gems.length; i++) {
		var val = getValue();
		var source = "assets/images/"+gems[i];
		var newImg = $("<img>");
		newImg.addClass("crystal-image");
		newImg.attr("src", source);
		newImg.attr("data-value", val);
		// console.log($(this).attr('src'));
		console.log(val);
		$("#crystals").append(newImg);
	}
	$(".crystal-image").on("click", function(){
		var val = parseInt($(this).attr("data-value"));
		totalScore += val;
		console.log("val: " + val);
		console.log("totalScore: " +totalScore);
		totalDiv.html("<h2>" + totalScore + "</h2>");
		if (totalScore === randomNumber){
			
			win();

		} else if (totalScore > randomNumber){
			
			lose();
		}
	});

}
// setup();
// $(document).ready(function(){
// 	console.log( "ready!" );
// 	setup();
// });
window.onload = function draw(){
	setup();
}