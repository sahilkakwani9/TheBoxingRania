function blink_text(){
    $("h2").fadeOut(500);
    $("h2").fadeIn(500);
}
var gameOver = false;
var red_hp = 100;
var blue_hp = 100;
//changing players name according to input
var r = localStorage.getItem('red-name');
var b = localStorage.getItem("blue-name");
$(".redh").text(r);
$(".blueh").text(b);
function play_sound(){
    var sound = new Audio("boxing-bell.mp3");
    sound.play();
}
function reduceHP(number){
    if(number==1){
        red_hp -= Math.floor(Math.random()*10)+1;
        if(red_hp > 0){
            $("#red").text(red_hp);
        }
    }
    else{
        blue_hp -= Math.floor(Math.random()*10)+1;
        if(blue_hp > 0){
            $("#blue").text(blue_hp);
        }
    }
}
function check_defeat(){
    if(red_hp <= 0 || blue_hp <= 0){
        gameOver = true;
        if(red_hp <= 0){
            $("#red").text("0");
            $("h2").text(b+" Wins");
            $('h2').replaceWith(function() {
                return $("<h1>" + $(this).html() + "</h1>");
              });
              $("h1").css('color','blue');
        }
        else{
            $("#blue").text("0");
            $("h2").text(r+" Wins");
            $('h2').replaceWith(function() {
                return $("<h1>" + $(this).html() + "</h1>");
              });
              $("h1").css('color','red');
        }
    }
    else{
        var randomNum = Math.floor(Math.random()*2) + 1;
        reduceHP(randomNum);
        if(randomNum==1){
            $("h2").text(b+" has smashed Red");
            $("h2").css("color","blue");
        }
        else{
            $("h2").text(r+" has smashed Blue");
            $("h2").css("color","red");
        }
    }
}
setInterval(blink_text,1000);
$(document).keydown(function(){
    if(!gameOver){
        check_defeat();
        play_sound();
    }
})
$(document).addEventListener('touchstart',function(){
    if(!gameOver){
        check_defeat();
        play_sound();
    }
})
