var tasks = [];
var currentTime = moment().format("H")
var today = moment().format("LL");
document.getElementById("currentDay").innerText = today;

// Checks the current time and updates the colors of each time block
var hourUpdate = function() {
    for(var i = 1; i < 10; i++) {
        var x = i + 8;
        if(currentTime > x) {
            $(`#row${i} textarea`).addClass("bg-secondary")
        } else if(currentTime < x) {
            $(`#row${i} textarea`).addClass("bg-info")
        } else {
            $(`#row${i} textarea`).addClass("bg-success")
        }
    }
};

// Reset the page
var reset = function() { 
    tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.reload();
};

// Populate data back into textarea
function createData(text, time) {
    $(`#row${time} textarea`).val(text);
};

// Save button is clicked
$(".savebtn").click(function(){
    var taskText = $(this).siblings('textarea').val();
    var taskTime = $(this).siblings('p').text();

    console.log(taskText);
    console.log(taskTime);

    tasks.push({
        text: taskText,
        time: taskTime
    })

    saveTasks();
});

// Saving to tasks to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Loads the data from local storage to the tasks array
var loadData = function() {
    tasksLS = JSON.parse(localStorage.getItem("tasks"));

    if(!tasksLS) {
        tasks = [];
    }

    for(var i = 0; i < tasksLS.length; i++){
        console.log(tasksLS[i]);
        createData(tasksLS.text, tasksLS.time)
        console.log(tasksLS.text)
    }
};

loadData();
setInterval(hourUpdate(), (1000*30));