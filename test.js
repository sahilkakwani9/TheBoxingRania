


$(".btn").on("click",function(){
    var red = $(".red").val();
    var blue = $(".blue").val();
    localStorage.setItem("red-name",red);
    localStorage.setItem("blue-name",blue);
    console.log(blue);
    
});