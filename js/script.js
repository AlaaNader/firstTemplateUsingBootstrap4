// jQuery code

$(document).ready(function(){

     // scroll button appearing 
    $(window).scroll(function(){
        var scroll = $(this).scrollTop(); 
        if( scroll > 1000) { $(".top").fadeIn();}
        else{$(".top").fadeOut();}
    });

    // scrolling up 
    $(".top").click(function(){$(window).scrollTop(0)});
       

       // play the video in why choose us section
    $("#playVid").click(function(e){
        $('iframe').attr('src', "images/video.mp4");
        $("#video").show();
        $(".overlay").show();
    });
       // close the video if i press any where     
    $("body").click(function(e){
        if(! $(e.target).hasClass("video") && ! $(e.target).hasClass("playVid")){
        $("#video").hide();
        $(".overlay").hide();
        $('iframe').attr('src', "");   // to close or stop it, i make src nothing so there is no video
    }
});
       
  

});

  










