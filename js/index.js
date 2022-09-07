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
            $(".circle").stop().animate({"top":"50%","left":"50%"},700);
            $(".circle").css({"background":"#333333"});
            $(".circle").mouseover(function(){
                $(".skill_text p").hide();
            });
            setTimeout(function(){
                $(".circle").not(":first").hide();
                $(".circle").stop().animate({"width":"500px","height":"500px"},500);
                $(".inner_circle").stop().animate({"width":"450px","height":"450px"},500);

            },700)
            setTimeout(function(){
                $("#profile").css({"animation":"square_profile_back 1s linear both"});
                $("#skill").css({"animation":"square_skill_back 1s linear both"});
            },1200);

            stop_3();
        } else if(scrollCount==2){
            s=true;
            $("#introduce").css({"animation":"square_intro_back 1s linear both"});
            $("#portfolio").css({"animation":"square_port_back 1s linear both"});
            setTimeout(skill,1000);
            stop_2();
        }else if(scrollCount==3){
            s=true;
            $("#project_num").children().eq(1).hide().prev().show().css({"animation":"count-up 2s linear"});
            $("#project_desc").children().eq(1).hide().prev().show().css({"animation":"count-up 2s linear"});
            $(".inner_card").eq(0).children("img").attr("src","img/project_1_main.jpg");
            $(".inner_card").eq(1).children("img").attr("src","img/project_2_main_gray.jpg");
            $(".card").eq(0).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"0vh"});
            stop_2();
        } else if(scrollCount==4){
            s=true;
            $("#project_num").children().eq(2).hide().prev().show().css({"animation":"count-up 2s linear"});
            $("#project_desc").children().eq(2).hide().prev().show().css({"animation":"count-up 2s linear"});
            $(".inner_card").eq(1).children("img").attr("src","img/project_2_main.jpg");
            $(".inner_card").eq(2).children("img").attr("src","img/project_3_main_gray.jpg");
            $(".card").eq(1).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-37vh"});

            stop_1();
        } else if(scrollCount==5){
            s=true;
            $("#project_num").children().eq(3).hide().prev().show().css({"animation":"count-up 2s linear"});
            $("#project_desc").children().eq(3).hide().prev().show().css({"animation":"count-up 2s linear"});
            $(".inner_card").eq(2).children("img").attr("src","img/project_3_main.jpg");
            $(".inner_card").eq(3).children("img").attr("src","img/project_4_main_gray.jpg");
            $(".card").eq(2).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-74vh"});

            stop_1();
        } else if(scrollCount==6){
            s=true;
            $("#project_num").children().eq(4).hide().prev().show().css({"animation":"count-up 2s linear"});
            $("#project_desc").children().eq(4).hide().prev().show().css({"animation":"count-up 2s linear"});
            $(".inner_card").eq(3).children("img").attr("src","img/project_4_main.jpg");
            $(".inner_card").eq(4).children("img").attr("src","img/project_5_main_gray.jpg");
            $(".card").eq(3).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-111vh"});


            stop_1();
        } else if(scrollCount==7){
            s=true;
            $("#project_num").children().eq(5).hide().prev().show().css({"animation":"count-up 2s linear"});
            $("#project_desc").children().eq(5).hide().prev().show().css({"animation":"count-up 2s linear"});
            $(".inner_card").eq(4).children("img").attr("src","img/project_5_main.jpg");
            $(".inner_card").eq(5).children("img").attr("src","img/project_6_main_gray.jpg");
            $(".card").eq(4).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-148vh"});

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
                $("#skill span").show().css({"animation":"text_rotate 0.7s both"});
                $(".circle").stop().animate({"width":"450px","height":"450px"},1000);
                $(".inner_circle").stop().animate({"width":"400px","height":"400px"},1000);
            },1000);
            setTimeout(function(){
                $("#h").css({"animation":"h 0.7s both"});
                $("#t").css({"animation":"t 0.7s both"});
                $("#m").css({"animation":"m 0.7s both"});
                $("#l").css({"animation":"l 0.7s both"});
            },1700);
            setTimeout(function(){
                $(".circle").stop().animate({"top":"200px","left":"100px","width":"200px","height":"200px"});
                $(".inner_circle").stop().animate({"width":"150px","height":"150px"});
                $(".circle").css({"position":"absolute"});
                $("#skill_title span").hide();
                $("#title_2").show();
            },2400);
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
                $("#title_2").animate({"font-size":"10em","left":"-500px","top":"-50px"});
                let timeSet = 100;
                $("#skill_text_1 p").show().each(function() {
                    this.style.animation = `text_fade 1s ${(timeSet += 100)}ms forwards`
                });
            },3000);
            setTimeout(skill,3700);
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
            },4200);
            stop_4();
        } else if(scrollCount==3){
            s=true;
            $("#introduce").css({"animation":"square_intro 1s linear both"});
            $("#portfolio").css({"animation":"square_port 1s linear both"});

            stop_2();
        } else if(scrollCount==4){
            s=true;
            $("#card_wrap").stop().animate({"margin-top":"-37vh"});
            $("#project_num").children().eq(0).hide().next().show();
            $("#project_desc").children().eq(0).hide().next().show();
            $(".inner_card").eq(0).children("img").attr("src","img/project_1_main_gray.jpg");
            $(".inner_card").eq(1).children("img").attr("src","img/project_2_main.jpg");
            $(".card").eq(1).addClass("gray").siblings().removeClass("gray");


            stop_1();
        } else if(scrollCount==5){
            s=true;

            $("#project_num").children().eq(1).hide().next().show();
            $("#project_desc").children().eq(1).hide().next().show();
            $(".inner_card").eq(1).children("img").attr("src","img/project_2_main_gray.jpg");
            $(".inner_card").eq(2).children("img").attr("src","img/project_3_main.jpg");
            $(".card").eq(2).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-74vh"});
            stop_1();
        } else if(scrollCount==6){
            s=true;

            $("#project_num").children().eq(2).hide().next().show();
            $("#project_desc").children().eq(2).hide().next().show();
            $(".inner_card").eq(2).children("img").attr("src","img/project_3_main_gray.jpg");
            $(".inner_card").eq(3).children("img").attr("src","img/project_4_main.jpg");
            $(".card").eq(3).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-111vh"});
            stop_1();
        } else if(scrollCount==7){
            s=true;

            $("#project_num").children().eq(3).hide().next().show();
            $("#project_desc").children().eq(3).hide().next().show();
            $(".inner_card").eq(3).children("img").attr("src","img/project_4_main_gray.jpg");
            $(".inner_card").eq(4).children("img").attr("src","img/project_5_main.jpg");
            $(".card").eq(4).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-148vh"});
            stop_1();
        }  else if(scrollCount==8){
            s=true;
 
            $("#project_num").children().eq(4).hide().next().show();
            $("#project_desc").children().eq(4).hide().next().show();
            $(".inner_card").eq(4).children("img").attr("src","img/project_5_main_gray.jpg");
            $(".inner_card").eq(5).children("img").attr("src","img/project_6_main.jpg");
            $(".card").eq(5).addClass("gray").siblings().removeClass("gray");

            $("#card_wrap").stop().animate({"margin-top":"-180vh"});
            $("#portfolio").css({"left":0});
            stop_2();
        } else if (scrollCount==9) {
            s=true;
            $("#portfolio").css({"animation":"square_portfolio 1s linear both"});
            $("#contact").css({"animation":"square_contact 1s linear both"});
            setTimeout(function(){
                $(".hide_text").css({"animation":"text_hide 1.5s linear both"});
            },2000);
            setTimeout(function(){
                $(".line").eq(1).css({"animation":"contact_1 1s linear both"});
                $(".line").eq(4).css({"animation":"contact_2 1s linear both"});
                $(".line").eq(3).css({"animation":"contact_3 1s linear both"});
                $(".line").eq(0).css({"animation":"contact_4 1s linear both"});
                $(".line").eq(2).css({"animation":"contact_5_line 1s linear both"});
                $("#text_ani_3").css({"animation":"contact_5 1s linear both"});
                $("#text_ani_4").css({"animation":"contact_6 1s linear both"});
                $("#text_ani_5").css({"animation":"contact_7 1s linear both"});
            },3500);
            setTimeout(function(){
                $("#text_ani_6").css({"position":"absolute"});
                $(".contact_box").fadeIn(700);
                $("contact_wrap").css({"animation":"contact_opa 0.5s linear both"})
                $("#text_ani_6").css({"animation":"contact_3_u 0.5s linear both"});
            },4500)
            stop_4();
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
            $("#javascript").css({"background":"conic-gradient(#e6a329 0% "+i+"%, #333333 "+i+"% 100%)"});
            i++;
        } else {
            clearInterval(circle_60);
        }
    },33.3);
    var circle_80 = setInterval(function(){
        if (i<81) {
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
    $(".inner_card").eq(0).children("img").attr("src","img/project_1_main.jpg");    
    for (i=1;i<7;i++){
        $(".inner_card").eq(i).children("img").attr("src","img/project_"+(i+1)+"_main_gray.jpg");    
    };

    $(".card, .pop_btn, .view_box, .close").mouseover(function(){
        $(".cursor").addClass("hover");
    }).mouseout(function(){
        $(".cursor").removeClass("hover");
    });

    $(".card").hover(function(){
        var hover_idx = $(this).index()
        if(hover_idx==0) {
            $(this).stop().animate({"height":"43vh","margin-top":"2vh"});
        } else {
            $(this).stop().animate({"height":"43vh","margin-top":"-4%"});
        }
        if (scrollCount-3 == hover_idx){
            $(".more_btn",this).show();
        }
        $(".inner_card").eq(hover_idx).children("img").attr("src","img/project_"+(hover_idx+1)+"_main.jpg").siblings().children("img").attr("src","img/project_"+(hover_idx+1)+"_main_gray.jpg");    
        $(".card").eq(hover_idx).addClass("gray");
    },function(){
        var hover_idx = $(this).index();
        if(hover_idx==0) {
            $(this).stop().animate({"height":"40vh","margin-top":"5vh"});
        } else {
            $(this).stop().animate({"height":"40vh","margin-top":"-2%"});
        }
        $(".more_btn").hide();
        $(".inner_card").eq(hover_idx).children("img").attr("src","img/project_"+(hover_idx+1)+"_main_gray.jpg").siblings().children("img").attr("src","img/project_"+(hover_idx+1)+"_main_gray.jpg");    
        $(".card").eq(hover_idx).removeClass("gray")
    });

    $(".card").on("click", function(){
        var clickIdx = $(this).index();
        scrollCount=clickIdx+3;
        $("#card_wrap").stop().animate({"margin-top":-(clickIdx*37)+"vh"});
        $(".inner_card").eq(clickIdx).children("img").attr("src","img/project_"+(clickIdx+1)+"_main.jpg").siblings().children("img").attr("src","img/project_"+(clickIdx+1)+"_main_gray.jpg");    
        $(".card").eq(clickIdx).addClass("gray");

        $("#project_num").children().eq(clickIdx).show().css({"animation":"count-up 2s linear"}).siblings().hide();
        $("#project_desc").children().eq(clickIdx).show().css({"animation":"count-up 2s linear"}).siblings().hide();
    })

    $(".more_btn").on("click", function(){
        var idx = $(this).parent().parent().index();
        s=true;
        if (idx==3){
            $("#sub").hide();
            $("#sub_2").hide();
        } else if (idx==4) {
            $("#sub").show();
            $("#sub_2").show();
        } else {
            $("#sub").show();
            $("#sub_2").hide();
        }
        $(".popup").show();
        $(".view").attr("src","img/view/project_"+(idx+1)+"_main.jpg");
        $(".view").stop(true,true).css({"margin-top":0});
        setTimeout(function(){
            $(".view").stop().animate({"margin-top": $(".view_box").height()-$(".view").height()},5000,function(){
                $(".view").delay(6000).stop().animate({"margin-top":0},2000);
            });
        },1000)
        $("#scroll_spin").hide();
        $(".pop_btn").not("#link").on("click", function(){
            var btn_class = $(this).attr("id");
            $(".view").stop(true,true).css({"margin-top":0});
            $(".view").attr("src","img/view/project_"+(idx+1)+"_"+btn_class+".jpg");
            setTimeout(function(){
                $(".view").stop().animate({"margin-top": $(".view_box").height()-$(".view").height()},5000,function(){
                    $(".view").delay(6000).stop().animate({"margin-top":0},2000);
                });
            },1000)
        });
        var site =["https://jthlesi.github.io/project_5/","https://jthlesi.github.io/project_4/","https://jthlesi.github.io/project_3/","https://jthlesi.github.io/projec_2/","https://kimjinseong97.github.io/Joker/","https://jthlesi.github.io/project1/"]
        $("#link").on("click", function(){
            $(this).parent("a").attr("href",site[idx]);
        })
    });

    $(".close, .view").on("click", function(){
        s=false;
        $(".view").stop(true,true).css({"margin-top":0});
        $(".popup").hide();
        $("#scroll_spin").show();
    })


})

$(window).on("mousemove", function(event){
    $(".cursor").css({top:event.pageY + "px",left:event.pageX + "px"});
})



