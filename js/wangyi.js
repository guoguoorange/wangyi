/**
 * Created by Administrator on 2016/12/1.
 */
$(function(){
    $("#fullpage").fullpage({
        anchor:['one','two','three','four','five','six','seven','eight','nine','ten'],
        menu:"#menu",
        afterLoad:function(anchorLink,index){
            var index=index-1;
            $(".btn a").css("backgroundPosition","5px 5px").eq(index).css("backgroundPosition","0 bottom");
            /*放大缩小类*/
            $(".section").eq(index).find(".big").css({
                transform:"scale(1,1)",
                opacity: 1
            })
            $(".section").eq(index).find("strong").css({
                transform:"scale(1,1)",
                opacity: 1
            })
            $(".section").eq(index).find("h3").css({
                transform:"scale(1,1)",
                opacity: 1
            })
            /*隐藏显示类*/
            $(".section").eq(index).find(".p1").css({
                opacity: 1
            })
            $(".section").eq(index).find(".fonts").css({
                opacity: 1
            });
            $(".section").eq(index).find(".bg31").css({
                opacity: 1
            });
            /*向上类*/
            $(".section").eq(index).find(".up").css({
                transform:"translateY(0)",
                opacity: 1
            })
            /*向下类*/
            $(".section").eq(index).find(".down").css({
                transform:"translateY(0)",
                opacity: 1
            })
            /*向左类*/
            $(".section").eq(index).find(".left").css({
                transform:"translateX(0)",
                opacity: 1
            })
            /*向右类*/
            $(".section").eq(index).find(".right").css({
                transform:"translateX(0)",
                opacity: 1
            })
            /*斜切*/
            $(".section").eq(index).find(".xq").css({
                transform:"translate(-50px,-50px)",
                opacity: 1
            })
        },
        onLeave:function(index,next,dir){
            var index=index-1;
            /*放大缩小类*/
            $(".section").eq(index).find(".big").css({
                transform:"scale(0.5,0.5)",
                opacity: 0
            })
            $(".section").eq(index).find("strong").css({
                transform:"scale(0.5,0.5)",
                opacity: 0
            })
            $(".section").eq(index).find("h3").css({
                transform:"scale(0.5,0.5)",
                opacity: 0
            })
            /*隐藏显示类*/
            $(".section").eq(index).find(".p1").css({
                opacity: 0
            })
            $(".section").eq(index).find(".fonts").css({
                opacity: 0
            });
            $(".section").eq(index).find(".bg31").css({
                opacity: 0
            });
            /*向上类*/
            $(".section").eq(index).find(".up").css({
                transform:"translateY(200px)",
                opacity: 0
            })
            /*向下类*/
            $(".section").eq(index).find(".down").css({
                transform:"translateY(-100px)",
                opacity: 0
            })
            /*向左类*/
            $(".section").eq(index).find(".left").css({
                transform:"translateX(-200px)",
                opacity: 0
            })
            /*向右类*/
            $(".section").eq(index).find(".right").css({
                transform:"translateX(200px)",
                opacity: 0
            })
            /*斜切*/
            $(".section").eq(index).find(".xq").css({
                transform:"translate(0,0)",
                opacity: 0
            })


        }
    })

    /*选项卡对应的字*/
    $(".btn a").hover(function(){
        var index=$(this).index();
        $(".font p").css("color","rgba(0,0,0,0)").eq(index).css("color","#8F9DA4")
    },function(){
        $(".font p").css("color","rgba(0,0,0,0)")
    })
})