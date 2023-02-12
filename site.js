$(document).ready(function(){
    $(".dropdown").click(function(){
        $(".dropdown-list ul").toggleClass("active");
    });

    $(".dropdown-list ul li").click(function(){
        var icon_text = $(this).html();
        $(".default-option").html(icon_text);
    });

});

$(document).ready(function(){
    $(".dropdown2").click(function(){
        $(".dropdown-list2 ul").toggleClass("active");
    });

    $(".dropdown-list2 ul li").click(function(){
        var icon_text = $(this).html();
        $(".default-option2").html(icon_text);
    });

});

$(document).ready(function(){
    $(".dropdown3").click(function(){
        $(".dropdown-list3 ul").toggleClass("active");
    });

    $(".dropdown-list3 ul li").click(function(){
        var icon_text = $(this).html();
        $(".default-option3").html(icon_text);
    });

});

