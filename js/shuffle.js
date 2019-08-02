$(document).ready(function () {

    $("#checkBtn").hide();
    $("#playBtn").hide();
    $(".newGame").hide();
    $(".commands").text("Choose a car");

for (let x = 0; x < 10; x++) {
    $("#gameName").animate({ opacity: "0.5" }, 1500);
    $("#gameName").animate({ opacity: "1" }, 1500);
}

    $("#playBtn").click(function () {   
        $(".imageBox").removeClass("borderChange");
        $(this).hide();

        $(".commands").text("Find your car");
        $(".commands").show(500);


        $(".imageBox").animate({ border: "0" });
        $(".shuffleImage").slideToggle();
        $("#image1").animate({ right: "-45%" }, 900 );
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "45%" }, 900);
        $("#image1").animate({ right: "0" }, 800);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "0" }, 800);
        $("#image1").animate({ right: "-45%" }, 700);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "45%" }, 700);
        $("#image1").animate({ right: "0" }, 400);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "0" }, 400);
        $("#image1").animate({ right: "-45%" }, 100);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "45%" }, 100);
        $("#image1").animate({ right: "0" }, 50);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "0" }, 50);
        $("#image1").animate({ right: "-45%" }, 50);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "45%" }, 50);
        $("#image1").animate({ right: "0" }, 50);
        $("#image2").animate({ right: "0" }, 400);
        $("#image3").animate({ right: "0" }, 50);


        $("#image3").animate({ "order": Math.floor(Math.random() * 3) + 1 }, 0);
        $("#image2").animate({ "order": Math.floor(Math.random() * 3) + 1 }, 0);
        $("#image1").animate({ "order": Math.floor(Math.random() * 3) + 1 }, 0);

        $("#checkBtn").show(500);
    });

    $(".imageBox").click(function () {

        $(".commands").hide(500);

        if ($(".newGame").css('display') == 'none'){

        $(".imageBox").removeClass("borderChange");

        if ($("#checkBtn").css('display') == 'none') {
            $("#playBtn").show(500);
        } else {
            $("#playBtn").hide(500);
        }

        $(this).addClass("borderChange");
        if ($("#playBtn").css('display')=='none') {
            $(this).addClass("selected2");
            $(".imageBox").removeClass("answerBorder");
            $(this).addClass("answerBorder");
        }else{
            $(".imageBox").removeClass("selected");
            $(this).addClass("selected",7000);
        }
    }
    });

    $(".newGame").click(function () {
        $(this).hide();
        $(".selected").removeClass("selected");
        $(".selected2").removeClass("selected2");
        $(".answerBorder").removeClass("answerBorder");
        $(".borderChange").removeClass("borderChange");
        $(".result").hide(800);
        $("#image1").animate({ "order": "1"} , 0);
        $("#image2").animate({ "order": "2" }, 0);
        $("#image3").animate({ "order": "3" }, 0);
        $(".shuffleImage").fadeOut(900);
        $(".shuffleImage").fadeIn(900);
        $(".commands").text("Choose a car");
        $(".commands").show(500);


    });

    $("#checkBtn").click(function () {

        
        if ($("#image1").hasClass("selected2") || $("#image2").hasClass("selected2") || $("#image3").hasClass("selected2")) {
            $(".shuffleImage").fadeIn();
            if($(".selected2").hasClass("selected")){
                $(".result").text("YOU WIN");
                $(".result").animate({ zoom: "3" }, 800);
                $(".result").animate({ zoom: "1" }, 800);
                    } else {
                $(".result").text("YOU LOSE");
                $(".result").animate({ zoom: "3" },800);
                $(".result").animate({ zoom: "2" }, 800);
        }
            $(".result").show();
            $(".newGame").show();
            $(".selected").addClass("borderChange");
            $("#checkBtn").hide();
    }
        else{
            $(".commands").animate({opacity:"0.3"},500);
            $(".commands").text("Find your car please!!!");
            $(".commands").animate({ opacity: "1" }, 500);
        }
        
        
    });

    $("#image1").animate({ top: "0" }, "slow");
    $("#image2").animate({ top: "0" }, "fast");
    $("#image3").animate({ top: "0" }, "faster");
    $(".imageBox").animate({ zoom: 1 }, "slow");
});

// function checkResult() {
//     images = document.getElementsByClassName("imageBox");
//     secondChoice = document.getElementsByClassName("selected2")
//     if (images[0].classList.contains("selected2") || images[1].classList.contains("selected2") || images[2].classList.contains("selected2")) {
//       if (secondChoice[0].classList.contains("selected")){
//         alert("congratulations YOU WIN")
//       }
//       else{
//           alert("You Lose");
//       }
//     }
//     else{
//         alert("Please Choose Your Card");
//     }
// }

// function validShuffle() {
//     images = document.getElementsByClassName("imageBox");
//     selectedCard = document.getElementsByClassName("selected")
//     if (images[0].classList.contains("selected") || images[1].classList.contains("selected") || images[2].classList.contains("selected")) {
//         document.getElementsById("playBtn").style.display="inlineBlock";
//     }
 
// }
