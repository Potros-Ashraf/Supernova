$(document).ready(function(){

    $(window).resize(function(){
            
        $("header").height($(window).height());

        $(".collector").css({
            paddingLeft:(($(window).width()/2)-$(".collector").width())/1.5
        });


    });
    
    
    //to make full screen header

    $("header").height($(window).height());

    /*the position of info*/
    $("header .info").css(
        {
        marginTop : ($(window).height()- $("header .info").height())/2.5
    });

    /* smooth scroll */
    $("nav li").click(function(){
        $("html, body").animate({
            scrollTop:$("#"+$(this).data("value")).offset().top
        },1000);
    });
    $(".info button").click(function(){

        $("html, body").animate({
            scrollTop:$("#about-us").offset().top
        },1000);

    });
    /* */
    $("nav li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    /* */ 
    $(".collector").css({
        paddingLeft:(($(window).width()/2)-$(".collector").width())/2
    });
    



});