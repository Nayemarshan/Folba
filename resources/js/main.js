function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$(".js--services-section").waypoint(function(e){"down"==e?$("nav").addClass("sticky"):$("nav").removeClass("sticky")}),$("#slider-section").slick({dots:!0,infinite:!0,centerMode:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,fade:!0,fadeSpeed:1e3}),$(".clients-img").owlCarousel({loop:!0,margin:10,nav:!0,responsive:{0:{items:1},600:{items:4},1000:{items:6}}}),$(".testimonial-area").owlCarousel({loop:!0,margin:10,nav:!1,dots:!1,autoplay:!0,autoplaySpeed:1e3,responsive:{0:{items:1},600:{items:1},1000:{items:1}}}),$(".latest").owlCarousel({loop:!0,margin:10,nav:!1,dots:!1,autoplay:!0,autoplaySpeed:2e3,responsive:{0:{items:1},600:{items:2},1000:{items:3}}}),$(function(){$.scrollUp(),$.scrollUp()});new Gumshoe("#mainNav a",{offset:30});(new WOW).init()}),$(window).on("load",function(){var e=$(".isotope-container");e.isotope({itemSelector:".item",layoutMode:"fitRows"}),$(".isotope-filter").on("click","button",function(){var t=$(this).attr("data-filter");e.isotope({filter:t}),$(".isotope-filter").find(".active").removeClass("active"),$(this).addClass("active")})}),$(function(){$("#portfolio-item").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),$(function(){$("#progressbar-element").waypoint(function(){$(function(){$(".progress-bar").each(function(){$(this).animate({width:$(this).attr("aria-valuenow")+"%"})},2e3)}),this.destroy()},{offset:"bottom-in-view"})}),$(function(){$(".counter").counterUp({delay:10,time:1e3})}),$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}});