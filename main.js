$(window).scroll(function() {
	var scrollval= $(this).scrollTop(); //it will return scroll value

	    
    $("#logo").css("transform",'translate(0px,-'+scrollval/2+'%)');
    $("#btn_img").css("transform",'translate(-50%,'+scrollval/3+'%)');
})