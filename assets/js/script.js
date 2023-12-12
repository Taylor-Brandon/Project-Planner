var date = dayjs().format('MMM D, YYYY');
$('#date').text(date);

function currentTime() {
    setInterval(function () {
        var time = dayjs().format('hh:mm:ss a');
        $('#time').text(time);
    }, 1)
}
currentTime();