// @ts-nocheck
(function($){
    "use strict";

    // ====================== //
    // = Copyright (c) EMMA = //
    // ====================== //

    function handleInputChange(){
        $(".input-wrapper > span.input-highlight").html($(this).val().replace(/\n/g, "&nbsp;"));
    }

    $(document).ready(function(){
        $(".input-wrapper > input").on("input", handleInputChange);
    });
})(jQuery);
