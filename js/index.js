var scrollCount = 0;
function move(page) {
    scrollCount = page;
    console.log(scrollCount)
}

var s=false;
var stop = function(){ 
    setTimeout(function(){
        s=false;
    },2100);
}

$(window).on("scroll wheel", function(event){
    if (event.originalEvent.wheelDelta >= 0 && !s) {
        move(scrollCount-1);
        if (scrollCount<0){
            scrollCount=0;
        }
        if (scrollCount==0){
            s=true;
            $("#square").animate({"margin-top":"100vh"});
            setTimeout(function(){
                $("#cube_2").stop().animate({"width":"50vh","height":"50vh","left":"0","top":"0"});
            },500);
            setTimeout(function(){
                for (i=0;i<20;i++){
                    $("#text_wrap h1 span").eq(i).css({"animation":"text_out_"+i+"_back 0.5s linear both"});
                }
                $("#text_wrap").show()
            },1200);
            setTimeout(function(){
                $("#cube").css({"animation":"spin 8s linear infinite"});
            },2000);

            stop();
        } else if (scrollCount==1){
            s=true;
            $("#skill").slideUp("slow");
            $("#profile").slideDown("slow");
            stop();
        } else if(scrollCount==2){
            s=true;
            $("#introduce").css({"animation":"square_intro_back 1s linear both"});
            $("#portfolio").css({"animation":"square_port_back 1s linear both"});
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
            },1200);
            setTimeout(function(){
                $("#square").animate({"margin-top":"-100vh"});
            },2000);
            stop();
        } else if (scrollCount==2){
            s=true;
            $("#profile").slideUp("slow");
            $("#skill").slideDown("slow");

            var i=0;
            var circle_40 = setInterval(function(){
                if(i<41){
                    circle_1(i);
                    i++;
                } else {
                    clearInterval(circle_40);
                }
            },30);

            var circle_80 = setInterval(function(){
                if (i<81) {
                    circle_2(i);
                    i++;
                } else {
                    clearInterval(circle_80);
                }
            },30);

            var circle_90 = setInterval(function(){
                if (i<91) {
                    circle_3(i);
                    i++;
                } else {
                    clearInterval(circle_90);
                }
            },20);

            function circle_1(i){
                $("#photo").css({"background":"conic-gradient(#00d4ff 0% "+i+"%, #2e2e2e "+i+"% 100%)"});
                $("#illus").css({"background":"conic-gradient(#ff7f18 0% "+i+"%, #2e2e2e "+i+"% 100%)"});
            }

            function circle_2(i) {
                $("#java").css({"background":"conic-gradient(#e6a329 0% "+i+"%, #2e2e2e "+i+"% 100%)"});
                $("#jquery").css({"background":"conic-gradient(#193556 0% "+i+"%, #2e2e2e "+i+"% 100%)"});

            }
            function circle_3(i) {
                $("#html").css({"background":"conic-gradient(#ff4c1e 0% "+i+"%, #2e2e2e "+i+"% 100%)"});
                $("#css").css({"background":"conic-gradient(#004ce8 0% "+i+"%, #2e2e2e "+i+"% 100%)"});

            }
            stop();
        } else if(scrollCount==3){
            s=true;
            $("#introduce").css({"animation":"square_intro 1s linear both"});
            $("#portfolio").css({"animation":"square_port 1s linear both"});
            stop();
        }
    }
})

