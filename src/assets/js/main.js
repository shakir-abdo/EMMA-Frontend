// @ts-nocheck
(function($){
    "use strict";

    // ====================== //
    // = Copyright (c) EMMA = //
    // ====================== //

    function debounce(fn, wait, immediate){
        var timeout;

        return function(){
            var context = this;
            var args = arguments;

            var later = function(){
                timeout = null;
                if (!immediate) fn.apply(context, args);
            };

            var callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) fn.apply(context, args);
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
    });
})(jQuery);
