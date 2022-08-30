var scrollCount = 0;
function move(page) {
    scrollCount = page;
}

var s=false;
var stop_1 = function(){ 
    setTimeout(function(){
        s=false;
    },500);
}
var stop_2 = function(){ 
    setTimeout(function(){
        s=false;
    },1600);
}
var stop_3 = function(){ 
    setTimeout(function(){
        s=false;
    },2500);
}
var stop_4 = function(){ 
    setTimeout(function(){
        s=false;
    },5000);
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
                $(".cube_2").stop().animate({"width":"50vh","height":"50vh","left":"0","top":"0"});
            },500);
            setTimeout(function(){
                for (i=0;i<20;i++){
                    $("#text_wrap h1 span").eq(i).css({"animation":"text_out_"+i+"_back 0.5s linear both"});
                }
                $("#text_wrap").show();
            },1200);
            setTimeout(function(){
                $(".cube").css({"animation":"spin 8s linear infinite"});
            },1900);
            stop_3();
        } else if (scrollCount==1){
            s=true;
            $(".skill_text p").hide();
            $("#title_2").hide().css({"font-size":"5em","left":"50%"});
            $(".circle").stop().animate({"top":"50%","left":"50%"},1000);
            $(".circle").css({"background":"#333333"});
            $(".circle").mouseover(function(){
                $(".skill_text p").hide();
            });
            setTimeout(function(){
                $(".circle").not(":first").hide();
                $(".circle").stop().animate({"width":"500px","height":"500px"},500);
                $(".inner_circle").stop().animate({"width":"450px","height":"450px"},500);

            },1000)
            setTimeout(function(){
                $("#profile").css({"animation":"square_profile_back 1s linear both"});
                $("#skill").css({"animation":"square_skill_back 1s linear both"});
            },1500);

            stop_3();
        } else if(scrollCount==2){
            s=true;
            $("#introduce").css({"animation":"square_intro_back 1s linear both"});
            $("#portfolio").css({"animation":"square_port_back 1s linear both"});
            setTimeout(skill,1000);
            stop_2();
        }else if(scrollCount==3){
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            $("#project_wrap").animate({"margin-left":"0"},"slow", function(){
                $(".project_img").delay(500).eq(0).stop(true,true).animate({"margin-top": $(".img_box").eq(0).height()-$(".project_img").eq(0).height()},5000,function(){
                    $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
            });
            stop_2();
        } else if(scrollCount==4){
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            $("#project_wrap").animate({"margin-left":"-1200px"},"slow", function(){
                $(".project_img").delay(500).eq(1).stop(true,true).animate({"margin-top": $(".img_box").eq(1).height()-$(".project_img").eq(1).height()},5000,function(){
                    $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
            });
            stop_1();
        } else if(scrollCount==5){
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            $("#project_wrap").animate({"margin-left":"-2400px"},"slow", function(){
                $(".project_img").delay(500).eq(2).stop().animate({"margin-top": $(".img_box").eq(2).height()-$(".project_img").eq(2).height()},5000,function(){
                    $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
            });
            stop_1();
        } else if(scrollCount==6){
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            $("#project_wrap").animate({"margin-left":"-3600px"},"slow", function(){
                $(".project_img").delay(500).eq(3).stop().animate({"margin-top": $(".img_box").eq(3).height()-$(".project_img").eq(3).height()},5000,function(){
                    $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
            });
            stop_1();
        } else if(scrollCount==7){
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            $("#project_wrap").animate({"margin-left":"-4800px"},"slow", function(){
                $(".project_img").delay(500).eq(4).stop().animate({"margin-top": $(".img_box").eq(4).height()-$(".project_img").eq(4).height()},5000,function(){
                    $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
            });
            stop_1();
        } else if(scrollCount==8){
            s=true;
            $("#contact").css({"animation":"square_contact_back 1s linear both"});
            $("#portfolio").css({"animation":"square_portfolio_back 1s linear both"});
            stop_1();
        } else if(scrollCount==9) {
            s=true;
            var calc= (-$(window).width()/2 + $(window).height()/4);
            $(".cube").css({"animation":"spin_back 0.5s linear"});
            for (i=0;i<20;i++){
                $("#text_wrap_2 h1 span").eq(i).css({"animation":"text_drop_"+i+"_back 1s linear both"});
            };
            setTimeout(function(){
                $(".cube_2").stop().animate({"width":"100vw","height":"100vh","left":calc,"top":"-25vh"});
            },500);
            setTimeout(function(){
                $("#text_wrap_2 h1").hide();
                $("#footer").animate({"margin-top":"100vh"});
            },1200);
            stop_3();
        }

    }else if(event.originalEvent.wheelDelta < 0 && !s){
        move(scrollCount+1)
        if (scrollCount==1){
            s=true;
            var calc= (-$(window).width()/2 + $(window).height()/4);

            for (i=0;i<20;i++){
                $("#text_wrap h1 span").eq(i).css({"animation":"text_out_"+i+" 0.5s linear both"});
            }
            setTimeout(function(){
            $(".cube").css({"animation":"spin_back 0.5s linear"});
            },500);
            setTimeout(function(){
                $("#text_wrap").hide();
                $(".cube_2").stop().animate({"width":"100vw","height":"100vh","left":calc,"top":"-25vh"});
            },1200);
            setTimeout(function(){
                $("#square").animate({"margin-top":"-100vh"});
            },2000);
            stop_3();
        } else if (scrollCount==2){
            s=true;
            $("#profile").css({"animation":"square_profile 1s linear both"});
            $("#skill").css({"animation":"square_skill 1s linear both"});
            setTimeout(function(){
                $("#skill span").show().css({"animation":"text_rotate 1s both"});
                $(".circle").stop().animate({"width":"450px","height":"450px"},1000);
                $(".inner_circle").stop().animate({"width":"400px","height":"400px"},1000);
            },1000);
            setTimeout(function(){
                $("#h").css({"animation":"h 1s both"});
                $("#t").css({"animation":"t 1s both"});
                $("#m").css({"animation":"m 1s both"});
                $("#l").css({"animation":"l 1s both"});
            },2000);
            setTimeout(function(){
                $(".circle").stop().animate({"top":"200px","left":"100px","width":"200px","height":"200px"});
                $(".inner_circle").stop().animate({"width":"150px","height":"150px"});
                $(".circle").css({"position":"absolute"});
                $("#skill_title span").hide();
                $("#title_2").show();
            },3000);
            setTimeout(function(){
                $(".circle").eq(0).stop().animate({"top":"200px","left":"100px",});
                $(".circle").eq(1).show().stop().animate({"top":"200px","left":"320px"});
                $(".circle").eq(2).show().stop().animate({"top":"200px","left":"540px"});
                $(".circle").eq(3).show().stop().animate({"top":"200px","left":"760px"});
                $(".circle").eq(4).show().stop().animate({"top":"420px","left":"100px"});
                $(".circle").eq(5).show().stop().animate({"top":"420px","left":"320px"});
                $(".circle").eq(6).show().stop().animate({"top":"420px","left":"540px"});
                $(".circle").eq(7).show().stop().animate({"top":"420px","left":"760px"});
                $("#title_2").css({"position":"absolute"});
                $("#title_2").animate({"font-size":"10em","left":"-440px","top":"-50px"});
                let timeSet = 100;
                $("#skill_text_1 p").show().each(function() {
                    this.style.animation = `text_fade 1s ${(timeSet += 100)}ms forwards`
                });
            },3500);
            setTimeout(skill,4000);
            setTimeout(function(){
                $(".circle").mouseover(function(){
                    var circleIdx = $(".circle").index(this);
                    $(".skill_text").eq(circleIdx).show().siblings().hide().children().css({"animation":"none"});
                    let timeSet = 100;
                    $(".skill_text").eq(circleIdx).children().show().each(function() {
                        this.style.animation = `text_fade 1s ${(timeSet += 100)}ms forwards`
                    });
                    $("#title_2").html($(".circle").eq(circleIdx).attr("id").toUpperCase());
                });
            },4500);
            stop_4();
        } else if(scrollCount==3){
            s=true;
            $("#introduce").css({"animation":"square_intro 1s linear both"});
            $("#portfolio").css({"animation":"square_port 1s linear both"});
            $(".project_img").stop(true,true).css({"margin-top":0});
            setTimeout(function(){
                $(".project_img").eq(0).stop().animate({"margin-top": $(".img_box").eq(0).height()-$(".project_img").eq(0).height()},5000,function(){
                    $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
                });
            },1000)
            stop_2();
        } else if(scrollCount==4){
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            // $(".project").stop().animate({"width":"1100px","height":"90%","margin-top":"3.25vh","margin-left":"50px"},700,function(){
            //     // $("#project_wrap").delay(600).stop().animate({"margin-left":"-1200px"},700,function(){
            //         $(".project").delay(600).stop().animate({"width":"1200px","height":"100%","margin-top":"0","margin-left":"0"},700);
            //     // });
            // });
            // $(".project").eq(0).css({"animation":"slide_square_prev 1.5s linear forwards"});
            // $(".project").eq(1).css({"animation":"slide_square_next 1.5s linear forwards"});
            // $("#project_wrap").stop().animate({"margin-left":"-1200px"},"slow", function(){
            //     $(".project_img").delay(500).eq(1).stop().animate({"margin-top": $(".img_box").eq(1).height()-$(".project_img").eq(1).height()},5000,function(){
            //         $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            // });
            // });
            stop_1();
        } else if(scrollCount==5){
            s=true;
            // $(".project_img").stop(true,true).css({"margin-top":0});
            // $("#project_wrap").stop().animate({"margin-left":"-2400px"},"slow", function(){
            //     $(".project_img").delay(500).eq(2).stop().animate({"margin-top": $(".img_box").eq(2).height()-$(".project_img").eq(2).height()},5000,function(){
            //         $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            // });
            // });
            stop_1();
        } else if(scrollCount==6){
            s=true;
            // $(".project_img").stop(true,true).clearQueue();
            // $("#project_wrap").stop().animate({"margin-left":"-3600px"},"slow", function(){
            //     $(".project_img").delay(500).eq(3).stop().animate({"margin-top": $(".img_box").eq(3).height()-$(".project_img").eq(3).height()},5000,function(){
            //         $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            // });
            // });
            stop_1();
        } else if(scrollCount==7){
            s=true;
            // $(".project_img").stop(true,true).css({"margin-top":0});
            // $("#project_wrap").stop().animate({"margin-left":"-4800px"},"slow", function(){
            //     $(".project_img").delay(500).eq(4).stop().animate({"margin-top": $(".img_box").eq(4).height()-$(".project_img").eq(4).height()},5000,function(){
            //         $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            // });
            // });
            stop_1();
        }  else if(scrollCount==8){
            s=true;
            // $(".project_img").stop(true,true).css({"margin-top":0});
            // $("#project_wrap").stop().animate({"margin-left":"-6000px"},"slow", function(){
            //     $(".project_img").delay(500).eq(5).stop().animate({"margin-top": $(".img_box").eq(5).height()-$(".project_img").eq(5).height()},5000,function(){
            //         $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            // });
            // });
            $("#portfolio").css({"left":0});
            stop_2();
        } else if (scrollCount==9) {
            s=true;
            $(".project_img").stop(true,true).css({"margin-top":0});
            $("#portfolio").css({"animation":"square_portfolio 1s linear both"});
            $("#contact").css({"animation":"square_contact 1s linear both"});
            stop_2();
        } else if (scrollCount==10) {
            s=true;
            $("#footer").animate({"margin-top":"-100vh"});
            setTimeout(function(){
                $(".cube_2").stop().animate({"width":"50vh","height":"50vh","left":"0","top":"0"});
            },700);
            setTimeout(function(){
                $("#text_wrap_2 h1").show();
                for (i=0;i<20;i++){
                    $("#text_wrap_2 h1 span").eq(i).css({"animation":"text_drop_"+i+" 1s linear both"});
                }
                $(".cube").css({"animation":"spin 8s linear infinite"});
            },1200);
            stop_3();
        }
    }
})

var skill = function (){
    var i=0;
    var circle_40 = setInterval(function(){
        if(i<41){
            $("#vue").css({"background":"conic-gradient(#3fb984 0% "+i+"%, #333333 "+i+"% 100%)"});
            $("#illustrator").css({"background":"conic-gradient(#ff7f18 0% "+i+"%, #333333 "+i+"% 100%)"});
            i++;
        } else {
            clearInterval(circle_40);
        }
    },50);
    var circle_60 = setInterval(function(){
        if(i<61){
            $("#photoshop").css({"background":"conic-gradient(#00d4ff 0% "+i+"%, #333333 "+i+"% 100%)"});
            i++;
        } else {
            clearInterval(circle_60);
        }
    },33.3);
    var circle_80 = setInterval(function(){
        if (i<81) {
            $("#java").css({"background":"conic-gradient(#e6a329 0% "+i+"%, #333333 "+i+"% 100%)"});
            $("#jquery").css({"background":"conic-gradient(#193556 0% "+i+"%, #333333 "+i+"% 100%)"});
            $("#sass").css({"background":"conic-gradient(#cc6699 0% "+i+"%, #333333 "+i+"% 100%)"});
            i++;
        } else {
            clearInterval(circle_80);
        }
    },25);
    var circle_90 = setInterval(function(){
        if (i<91) {
            $("#html").css({"background":"conic-gradient(#ff4c1e 0% "+i+"%, #333333 "+i+"% 100%)"});
            $("#css").css({"background":"conic-gradient(#004ce8 0% "+i+"%, #333333 "+i+"% 100%)"});
            i++;
        } else {
            clearInterval(circle_90);
        }
    },22.2);
}

$(document).ready(function(){
    for (i=1;i<6;i++){
        $(".img_box").eq(i).children("img").attr("src","img/project_"+(i+1)+"_main.png");    
    }
    // for (i=0;i<7;i++){
    //     $(".project").eq(i).children("img").attr("src","img/project_"+(i)+"_main.png");    
    // }
    $(".btn_wrap button").on("click", function(){
        var btn_idx = $(this).parent().parent().parent().index();
        var btn_class = $(this).attr("class");
        $(".img_box").eq(btn_idx).children("img").attr("src","img/project_"+(btn_idx+1)+"_"+btn_class+".png");
        $(".project_img").stop(true,true).css({"margin-top":0});
        setTimeout(function(){
            $(".project_img").stop().animate({"margin-top": $(".img_box").eq(btn_idx).height()-$(".project_img").eq(btn_idx).height()},5000,function(){
                $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
        },500)
    })
    $(".img_box").on("click", function(){
        var idx = $(".img_box").index(this);
        s=true;
        $(".popup").show();
        $(".view").attr("src",$(".img_box").eq(idx).children("img").attr("src"));
        $(".view_box").hover(function(){
            $(".view").stop().animate({"margin-top": $(".view_box").height()-$(".view").height()},5000);
        },function(){
            $(".view").stop().animate({"margin-top":0},4000);
        });
        $("#scroll_spin").hide();
    })
    $(".close, .view").on("click", function(){
        s=false;
        $(".view").stop(true,true).css({"margin-top":0});
        $(".popup").hide();
        $("#scroll_spin").show();
    })
    $(".img_box").hover(function(){
        $(".more_up, .more_down",this).addClass("img_hover");
        $(".more_wrap").show();
        $(".more_up").stop().animate({"top":"0%"},"fast","linear");
        $(".more_down").stop().animate({"top":"50%"},"fast","linear");
    }, function(){
        $(".more_up, .more_down",this).removeClass("img_hover");
        $(".more_up").stop().animate({"top":"-50%"},"fast","linear");
        $(".more_down").stop().animate({"top":"100%"},"fast","linear");
        $(".more_wrap").hide();
    })
    $(".img_box, .btn_wrap>button, .view_box, .close").mouseover(function(){
        $(".cursor").addClass("hover");
    }).mouseout(function(){
        $(".cursor").removeClass("hover");
    });

    $(".project").hover(function(){
        var proIdx = $(".project").index(this);
        $(".project").eq(proIdx).children("img").css({"top":"25%"});
        $(".project").eq(proIdx).children(".text_hover").show();
    },function(){
        $(".project").children("img").css({"top":"50%"});
        $(".project").children(".text_hover").hide();
    })
    $(".hover_btn").on("click", function(){
        var idx = $(".hover_btn").index(this);
        s=true;
        $(".popup").show();
        $(".view").attr("src","img/project_"+(idx+1)+"_main.png");
        $(".view_box").hover(function(){
            $(".view").stop().animate({"margin-top": $(".view_box").height()-$(".view").height()},5000);
        },function(){
            $(".view").stop().animate({"margin-top":0},4000);
        });
        $("#scroll_spin").hide();
    })
    $(".pop_btn").on("click", function(){
        var btn_idx = $(this).parent().parent().parent().index();
        var btn_class = $(this).attr("class");
        $(".img_box").eq(btn_idx).children("img").attr("src","img/project_"+(btn_idx+1)+"_"+btn_class+".png");
        $(".project_img").stop(true,true).css({"margin-top":0});
        setTimeout(function(){
            $(".project_img").stop().animate({"margin-top": $(".img_box").eq(btn_idx).height()-$(".project_img").eq(btn_idx).height()},5000,function(){
                $(".project_img").delay(6000).stop().animate({"margin-top":0},2000);
            });
        },500)
    })

})

$(window).on("mousemove", function(event){
    $(".cursor").css({top:event.pageY + "px",left:event.pageX + "px"});
})



