// @ts-nocheck
(function($){
    "use strict";

    // ====================== //
    // = Copyright (c) EMMA = //
    // ====================== //

    function debounce(fn, delay){
        var debounceTimer;
        return function(){ 
            var context = this;
            var args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function(){
                fn.apply(context, args);
            }, delay);
        } 
    } 

    function getEscapedFromInput(){
        var val = $(".input-wrapper > input").val();
        return encodeURIComponent(val);
    }

    function fetchResults(){
        var str = getEscapedFromInput();

        if (str.replace(/\s/g, "") === ""){
            $(".loader").animate({
                "opacity": "0"
            }, 100);

            $(".results .value > span").each(function(){
                $(this).text("N/A").attr("data-emotion", "");
            });

            return;
        }

        $.getJSON("https://emma-ai.com/api/?text=" + str, function(data){
            $(".results .value > span").attr("data-emotion", data.emotion_tone);
            $(".results .value > span.tone-result").text(data.emotion_tone);
            $(".results .value > span.value-result").text(data.emotion_value);
            $(".results .value > span.percentage-result").text(data.emotion_percentage);
        }).fail(function(){
            $(".results .value > span").each(function(){
                $(this).text("Error").attr("data-emotion", "error");
            });
        }).always(function(){
            $(".loader").animate({
                "opacity": "0"
            }, 100);
        });
    }

    $(document).ready(function(){
        $(".input-wrapper > input").on("input", function(){
            $(".loader").animate({
                "opacity": "1"
            }, 100);
        });

        $(".input-wrapper > input").on("input", debounce(fetchResults, 900));

        // Open external links in new tab
        $("a").attr("target", function(){
            if (this.host && this.host != location.host) return "_blank";
        });

        // Add No-Opener attribute to links for security reasons
        $("a").attr("rel", function(){
            if (this.host && this.host != location.host) return "noopener";
        });

        $(".copyright-year").text((new Date().getFullYear()));
    });
})(jQuery);
