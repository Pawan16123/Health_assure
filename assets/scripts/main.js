$(document).ready(function(){
	$('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        $("#nav-icon2 span").toggleClass('halfWidth');
        $(".mobile-nav").toggleClass('toggledisplay');
       
    });
    // $("#nav-icon2").click(function(){
    //     $("#nav-icon2 span").toggleClass('halfWidth');
    // });

    
});