$(document).ready(function() {
	$(".bgChange").click(function() {
        bodyColor = $("body").css("backgroundColor");
		if (bodyColor == "rgb(0, 0, 0)") {
			$(".themeChange").css("backgroundColor", "brown");
			$(".buttonsContainer").css("color", "brown");
		} else if (bodyColor == "rgb(165, 42, 42)") {
			$(".themeChange").css("backgroundColor", "purple");
			$(".buttonsContainer").css("color", "purple");
		} else if (bodyColor == "rgb(128, 0, 128)") {
			$(".themeChange").css("backgroundColor", "red");
			$(".buttonsContainer").css("color", "red");
		} else if (bodyColor == "rgb(255, 0, 0)") {
			$(".themeChange").css("backgroundColor", "black");
			$(".buttonsContainer").css("color", "black");
		}
	});

	$(".tileChange").click(function() {
        currentTile = $(".imageBox").css("backgroundImage");
		if (currentTile.includes("bg2")) {
			$(".imageBox").css("backgroundImage", "url(./images/bg1.jpg)");
		} else if (currentTile.includes("bg1")) {
			$(".imageBox").css("backgroundImage", "url(./images/bg3.jpg)");
		} else if (currentTile.includes("bg3")) {
			$(".imageBox").css("backgroundImage", "url(./images/bg4.jpg)");
		} else if (currentTile.includes("bg4")) {
			$(".imageBox").css("backgroundImage", "url(./images/bg5.jpg)");
		} else if (currentTile.includes("bg5")) {
			$(".imageBox").css("backgroundImage", "url(./images/bg7.jpg)");
		} else if (currentTile.includes("bg7")) {
			$(".imageBox").css("backgroundImage", "url(./images/duke.jpg)");
        }
        else if (currentTile.includes("duke")) {
            $(".imageBox").css("backgroundImage", "url(./images/bg2.jpg)");
        }
	});
});
