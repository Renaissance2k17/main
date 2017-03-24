
$(document).ready(function()
{$("a[href*='#LayoutGrid6']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_LayoutGrid6').offset().top},600,'linear');});var Carousel1Opts={delay:2500,duration:1000,easing:'linear',mode:'fade',direction:'',scalemode:3,pagination:true,pagination_img_default:'images/page_default.png',pagination_img_active:'images/page_active.png',start:1};$("#Carousel1").carouseleffects(Carousel1Opts);$("#Carousel1_back a").click(function()
{$('#Carousel1').carouseleffects('prev');});$("#Carousel1_next a").click(function()
{$('#Carousel1').carouseleffects('next');});$("a[href*='#LayoutGrid2']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_LayoutGrid2').offset().top},600,'linear');});function homeScroll()
{var $obj=$("#wb_home");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");ShowObject('StickyLayer',0);}
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");ShowObject('StickyLayer',1);}}
homeScroll();$(window).scroll(function(event)
{homeScroll();});$("a[href*='#home']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_home').offset().top},500,'easeOutCubic');});$("a[href*='#portfolio']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_portfolio').offset().top},600,'easeOutCubic');});$("a[href*='#contact']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_contact').offset().top},600,'easeOutCubic');});$("#StickyLayer").stickylayer({orientation:3,position:[50,50],delay:0});$("a[href*='#Bookmark2']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_Bookmark2').offset().top},600,'linear');});$("a[href*='#Bookmark3']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_Bookmark3').offset().top},600,'linear');});});