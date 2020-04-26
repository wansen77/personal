$(document).ready(function () {
    $('.animal').click(function (event) {
        event.preventDefault();
        $('.experience').addClass('col-md-12');
        $('.experience ul').addClass('row');
        $('.experience li').addClass('col');
        $('.experience').addClass('ani-experience');
    });
    $('.plant').click(function (event) {
        event.preventDefault();
        $('.experience').removeClass('col-md-12 ani-experience');
        $('.experience ul').removeClass('row');
        $('.experience li').removeClass('col');
        $('.experience').addClass('col-md-6');
    });
});