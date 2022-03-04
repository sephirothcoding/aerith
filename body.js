$(document).ready(function() {
    var activeCls = 'card__strip--active';
   
    $('.card__strip').on({
        mouseenter: function () {
            $(this).addClass(activeCls);
        },
        mouseleave: function () {
            $(this).removeClass(activeCls);
        }
    });
});
