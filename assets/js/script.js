//Add name form element
var nameInput = $('input[name="name-input"]');
//grab table 
var table = $('#form-table');

//create function that handles the form submit
function handleFormSubmit(event) {
event.preventDefault();

var tableInput = $('<td>');

tableInput.text(nameInput.val());

tableInput.append(table);

$('input[type="name"]').val('');

}
//event.preventDefault
//create a table row
//adds text to it with the name input
//append new element to the final table
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

table.on('submit', handleFormSubmit);