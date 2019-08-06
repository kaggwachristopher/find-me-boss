$(document).ready(function () {
    $("progress").attr("value", "0");
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
        $(".imageBox").animate({ border: "0" }, 50);
        $(".shuffleImage").slideUp(50);

        // shuffle of images by switching their relative positions 
        $.each([900, 600,700, 1000,2000,200,500],
            function(index, value){
                randomAnimationDuration = Math.floor(Math.random() * value)+100;
                $("#image1").animate({ right: "-45%" }, randomAnimationDuration );
                $("#image2").animate({ right: "0" }, randomAnimationDuration);
                $("#image3").animate({ right: "45%" }, randomAnimationDuration );
                $("#image1").animate({ right: "0" }, randomAnimationDuration );
                $("#image2").animate({ right: "0" }, randomAnimationDuration);
                $("#image3").animate({ right: "0" }, randomAnimationDuration );
            }
            );
           
            

        $("#image3").animate({ order: Math.floor(Math.random() * 3) + 1 }, 0);
        $("#image1").animate({ order: Math.floor(Math.random() * 3) + 1 }, 0);
        $("#image2").animate({ order: Math.floor(Math.random() * 3) + 1 }, 0);

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
            $(".imageBox").removeClass("selected2");
            $(this).addClass("selected2");
            $(".imageBox").removeClass("answerBorder");
            $(this).addClass("answerBorder");
        }else{
            $(".imageBox").removeClass("selected");
            $(this).addClass("selected",7000);
        }
    }
    else{
            $(".newGame").animate({ zoom: "1.1", opacity: "0.3"},200);
            $(".newGame").animate({ zoom: "1", opacity: "1" }, 200);
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

                currentScore = parseInt($("progress").attr("value"));
                $("progress").attr("value", currentScore + 10);

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
