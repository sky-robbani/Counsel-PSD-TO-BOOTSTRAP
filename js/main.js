(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
        $('.counter').addClass('animated fadeInDownBig');
        $('p').addClass('animated fadeIn');


    });