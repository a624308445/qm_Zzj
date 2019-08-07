$(function(){
    // $('.sub-content').eq(0).show().siblings().hide();
    function dropDown(id, className) {
		$(id).mouseenter(function () {
			$(className).show()
			
		}).mouseleave(function () {
			$(className).hide()
        })
        $(className).mouseenter(function(){
            $(this).show()
        }).mouseleave(function(){
            $(this).hide()
        })
       
    };
    var index;
    $(".warp ul li").mouseenter(function(){
        index = $(this).index();
        console.log(index);
        $(this).parents(".row").find(".col-lg-8 .sub_content").eq(index).show().siblings().hide();
    });
    dropDown('#dropdown', '.service-dropdown');
	dropDown('#kind', '.service-dropdown-kind');
	dropDown('#theory', '.service-dropdown-theory');
	dropDown('#details', '.service-dropdown-details')
})
    // $(function(){
    //     var color=new Array('#00a0eb', '#005ca2', '#0d0300', '#d26c22', '#f69419', '#6d5936','#00a0eb', '#005ca2');
    //     $(".warp ul li").each(function(i){ //i是第一个li 第一个为0 
    //     $(this).mouseenter(function(){
    //         $(this).css("background-color",color[i]);
    //     }).mouseleave(function(){-
    //         $(this).css("background-color","");
    //     })
    //     });
    //  })
    $(function(){
        var color=new Array('#00a0eb', '#005ca2', '#0d0300', '#d26c22', '#f69419', '#6d5936','#00a0eb', '#005ca2');
        $(".warp").each(function(){ //i是第一个li 第一个为0 
            // console.log($(this));
            var lli = $(this).find("ul li");
            console.log(this);
            lli.mouseenter(function(){
                var index = $(this).index();
            $(this).css("background-color",color[index % color.length]);
        }).mouseleave(function(){
            $(this).css("background-color","");
        })
        });
     })
     $(function(){
         $('.navbar-inverse .b-bottom li').hover(function(){
             $(this).find('span').css('height','4px')
             $(this).find('span').stop().animate({
                 left:'0',
                 width:'100%',
                 right:'0'
             },400);
         },function(){
             $(this).find('span').stop().animate({
                 left:'50%',
                 width:'0'
             },200);
         }
         )
     })

     $(document).ready(function () {
        var p = 0; t = 0;
        $(window).scroll(function (e) {
            p = $(this).scrollTop();
            if (t <= p) {
                $('.navbar').css({ 'position': 'fixed', 'width': '100%' }).stop().animate({ top: '-60px' }, 100)
    
            }
            else {
                $('.navbar').css({ 'position': 'fixed', 'width': '100%' }).stop().animate({ top: '0px' })
            }
            if (p == 0) {
                $('.navbar').css({ 'position': 'relative', 'width': '100%' }).stop().animate({ top: '0px' }, 100)
            }
            t = p;
        })
    })