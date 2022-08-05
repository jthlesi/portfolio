$(window).on("scroll mousewheel", function(event){
    var page=1;
    console.log(page)
    if (event.originalEvent.wheelDelta >= 0) {
        if (page==1){
            $("#cube_2").stop().animate({"width":"50vh","height":"50vh","left":"0","top":"0"});
            $("#text_wrap").fadeIn("slow")    
            setTimeout(function(){
                $("#cube").css({"animation":"spin 8s linear infinite"});

            },1000)
        }
    }else{
        if (page==1){
            var calc= (-$(window).width()/2 + $(window).height()/4)
            $("#cube").css({"animation":"spin_back 0.5s linear"});
            setTimeout(function(){
                $("#text_wrap").fadeOut("slow")
                $("#cube_2").stop().animate({"width":"100vw","height":"100vh","left":calc,"top":"-25vh"});
            },1000)
            page++;
        }

}
})

