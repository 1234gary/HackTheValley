
$(document).ready(function(){
    var i = 1;
    $("#but1").click(function(){
        $("#panel1").toggle();
    });
    $("#but2").click(function(){
        $("#panel2").toggle();
    });
    $("#but3").click(function(){
        $("#panel3").toggle();
    });
    $("#but4").click(function(){
        $("#panel4").toggle();
    });
    $("#but5").click(function(){
        $("#panel5").toggle();
    });
    $("#chatsubmit").click(function(){
        var value = $('#msg').val();
        var check = 1;
        if ((value.toLowerCase() == "hi")||(value.toLowerCase() == "hello")||(value.toLowerCase() == "hey")||(value.toLowerCase() == "hi!")||(value.toLowerCase() == "hello!")||(value.toLowerCase() == "hey!")){
            check = 0;
        }
        if (i == 1){
            if (check == 0){
            $("#message1").text(value);
            $("#message1").css("color", "black");
            }
            else {
            $("#message1").text(value);
            $("#message1").css("color", "black"); 
            }
            
            if (check == 0){
            setTimeout(function(){
  $("#message2").css("color", "black");
}, 1000);
            $("#myform")[0].reset();
            i+=1;
        }
            
            else {
            setTimeout(function(){
                $("#message2").text("idk");
  $("#message2").css("color", "black");
}, 1000);
            $("#myform")[0].reset();
            i+=1;
        } 
            }
            
        else{
            var value = $('#msg').val();
            
            $("#message3").text(value);
            $("#message3").css("color", "black");
            setTimeout(function(){
  $("#message4").css("color", "black");
}, 2000);
            $("#myform")[0].reset();
        }
    });
});