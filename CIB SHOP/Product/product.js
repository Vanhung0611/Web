$(document).ready(function() {
    for (let i = 1; i <= 65; i++) {
        $(`#expand${i}`).click(function() {
            if ($(`#tex${i}`).is(":visible")) {
                $(`#tex${i}`).hide();
            } else {
                $("[id^=tex]").hide();
                $(`#tex${i}`).show();
            }
        });
    }
});