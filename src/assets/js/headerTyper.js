// @ts-nocheck
(function($){
    "use strict";

    // ====================== //
    // = Copyright (c) EMMA = //
    // ====================== //

    var $typedTextSpan = $(".emma-typer");
    var $cursorSpan = $(".emma-cursor");

    var textArray = [
        "EMMA",
        "エマ",
        "EMMA",
        "έμμα",
        "EMMA",
        "えま",
        "EMMA",
        "एम्मा",
        "EMMA",
        "艾瑪",
        "EMMA",
        "إيما",
        "EMMA",
        "אמה",
        "EMMA",
        "Эмма"
    ];

    var typingDelay = 90;
    var erasingDelay = 30;
    var newTextDelay = 1300;
    var textArrayIndex = 0;
    var charIndex = 0;

    function type(){
        if (charIndex < textArray[textArrayIndex].length){
            if (!$cursorSpan.hasClass("typing")) $cursorSpan.addClass("typing");
            $typedTextSpan.append(textArray[textArrayIndex].charAt(charIndex));
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            $cursorSpan.removeClass("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase(){
        if (charIndex > 0){
            if (!$cursorSpan.hasClass("typing")) $cursorSpan.addClass("typing");
            $typedTextSpan.text(textArray[textArrayIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            $cursorSpan.removeClass("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    $(document).ready(function(){
        setTimeout(type, newTextDelay + 250);
    });
})(jQuery);
