$(document).ready(function () {
    $('#btn').click(
            function () {
                $.get('StringGet1', function (responsetext) {
                    $("#out").text(responsetext);
                });
            });
});