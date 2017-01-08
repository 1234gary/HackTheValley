
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
        if (i == 1){
            $("#message1").css("color", "black");
            
            setTimeout(function(){
  $("#message2").css("color", "black");
}, 1000);
            $("#myform")[0].reset();
            i+=1;
        }
        else{
            $("#message3").css("color", "black");
            setTimeout(function(){
  $("#message4").css("color", "black");
}, 1000);
            $("#myform")[0].reset();
        }
    });
});