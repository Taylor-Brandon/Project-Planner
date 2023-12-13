//Add name form element
var name = $('input[name="name-input"]');
//grab table 

//create function that handles the form submit
//event.preventDefault
//create a table row
//adds text to it with the name input
//append neew element to thee final table
//clear name element
//add submit event


var date = dayjs().format('MMM D, YYYY');
$('#date').text(date);

function currentTime() {
    setInterval(function () {
        var time = dayjs().format('hh:mm:ss a');
        $('#time').text(time);
    }, 1)
}
currentTime();