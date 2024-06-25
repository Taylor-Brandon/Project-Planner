var forms = $('.form'); 
var button = $('.btn.btn-primary'); 
var projectInput = $('input[name=project-input]'); 
var projectItems = $('.projectItem'); 

var targetTimes = [ 
    {
        id: 1,
        dayJs: dayjs().hour(7).minute(0).second(0),
        realTime: '7:00am'
    },
    {
        id: 2,
        dayJs: dayjs().hour(8).minute(0).second(0),
        realTime: '8:00am'
    },
    {
        id: 3,
        dayJs: dayjs().hour(9).minute(0).second(0),
        realTime: '9:00am'
    },
    {
        id: 4,
        dayJs: dayjs().hour(10).minute(0).second(0),
        realTime: '10:00am'
    },
    {
        id: 5,
        dayJs: dayjs().hour(11).minute(0).second(0),
        realTime: '11:00am'
    },
    {
        id: 6,
        dayJs: dayjs().hour(12).minute(0).second(0),
        realTime: '12:00pm'
    },
    {
        id: 7,
        dayJs: dayjs().hour(13).minute(0).second(0),
        realTime: '1:00pm'
    },
    {
        id: 8,
        dayJs: dayjs().hour(14).minute(0).second(0),
        realTime: '2:00pm'
    },
    {
        id: 9,
        dayJs: dayjs().hour(15).minute(0).second(0),
        realTime: '3:00pm'
    },
    {
        id: 10,
        dayJs: dayjs().hour(16).minute(0).second(0),
        realTime: '4:00pm'
    },
    {
        id: 11,
        dayJs: dayjs().hour(17).minute(0).second(0),
        realTime: '5:00pm'
    },
    {
        id: 12,
        dayJs: dayjs().hour(18).minute(0).second(0),
        realTime: '6:00pm'
    },
    {
        id: 13,
        dayJs: dayjs().hour(19).minute(0).second(0),
        realTime: '7:00pm'
    }
];

var date = dayjs().format('MMM D, YYYY'); //this creates a variable for the date 
$('#date').text(date);

function currentTime() {
    setInterval(function () {
        var time = dayjs();
        $('#time').text(time.format('hh:mm a'));
        checkTime(time);
    }, 1000);
}

function checkTime(currentTime) {
    for (var i = 0; i < targetTimes.length; i++) {
        var hours = targetTimes[i].dayJs.diff(currentTime, 'hour');
        $('#id_' + targetTimes[i].id).text(targetTimes[i].realTime);
        if (hours == 0) {
            $('#id_' + targetTimes[i].id).css('background-color', 'green');
        } else if (hours < 0) {
            $('#id_' + targetTimes[i].id).css('background-color', 'red');
        } else {
            $('#id_' + targetTimes[i].id).css('background-color', 'orange');
        }
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    var form = $(event.target);
    var inputValue = form.find('input[name=project-input]').val();
    var selectedTimeSlot = form.find('span.input-group-text').attr('id').split('_')[1];
    
    localStorage.setItem('projectInput_' + selectedTimeSlot, inputValue);
    
    form.find('.projectItem').text(inputValue);
}

function setInputFromLocalStorage() {
    for (var i = 0; i < targetTimes.length; i++) {
        const savedInput = localStorage.getItem('projectInput_' + targetTimes[i].id);
        if (savedInput) {
            $('#id_' + targetTimes[i].id).closest('.form').find('input[name=project-input]').val(savedInput);
            $('#id_' + targetTimes[i].id).closest('.form').find('.projectItem').text(savedInput);
        }
    }
}

currentTime();
forms.on('submit', handleFormSubmit);

$(document).ready(function () {
    setInputFromLocalStorage();
});