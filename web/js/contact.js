$(document).ready(function () {
    $('.faq-title').click(function () {
        var cardBody = $(this).next('.card-body');

        $('.faq .card.open .card-body').not(cardBody).slideUp();
        $('.faq .card.open').not($(this).parent()).removeClass('open');

        cardBody.slideToggle(function () {
            $(this).parent().toggleClass('open', $(this).is(':visible'));
        });
    });
});