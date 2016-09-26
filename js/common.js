$(function() {

    $(".wrapper .top__line__header .search .search__button").click(function (e) {
        $(".wrapper .top__line__header .search .search__input").fadeToggle("slow");
        e.preventDefault()
    });

    $(".wrapper .top__line__header .mobile__icon").click(function (e) {
        $(".wrapper .top__line__header .mobile__menu").slideToggle("slow");
        e.preventDefault()
    });


});