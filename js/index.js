var scrollCount = 0;
function move(page) {
    scrollCount = page;
    console.log(scrollCount)
}

var s=false;
var stop = function(){ 
    setTimeout(function(){
        s=false;
    },2500);
}

$(window).on("scroll wheel", function(event){

    if (event.originalEvent.wheelDelta >= 0 && !s) {
        move(scrollCount-1);
        if (scrollCount<0){
            scrollCount=0;
        }
        if (scrollCount==0){
            s=true;
            $("#introduce").animate({"margin-top":"100vh"});
            setTimeout(function(){
                $("#cube_2").stop().animate({"width":"50vh","height":"50vh","left":"0","top":"0"});
            },800);
            setTimeout(function(){
                for (i=0;i<20;i++){
                    $("#text_wrap h1 span").eq(i).css({"animation":"text_out_"+i+"_back 0.5s linear both"});
                }
                $("#text_wrap").show()
            },1800);
            setTimeout(function(){
                $("#cube").css({"animation":"spin 8s linear infinite"});
            },2300);
            stop();
        } else if (scrollCount==1){
            s=true;
            $("#skill").fadeOut();
            $("#profile").fadeIn();
            stop();
        }

    }else if(event.originalEvent.wheelDelta < 0 && !s){
        move(scrollCount+1)
        if (scrollCount==1){
            s=true;
            var calc= (-$(window).width()/2 + $(window).height()/4)

            for (i=0;i<20;i++){
                $("#text_wrap h1 span").eq(i).css({"animation":"text_out_"+i+" 0.5s linear both"});
            }
            setTimeout(function(){
            $("#cube").css({"animation":"spin_back 0.5s linear"});
            },500);
            setTimeout(function(){
                $("#text_wrap").hide()
                $("#cube_2").stop().animate({"width":"100vw","height":"100vh","left":calc,"top":"-25vh"});
            },1500);
            setTimeout(function(){
                $("#introduce").animate({"margin-top":"-100vh"});

            },2300)
            stop();
        } else if (scrollCount==2){
            s=true;
            $("#profile").fadeOut();
            $("#skill").fadeIn();
            stop();
        }
    }
})

