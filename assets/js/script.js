var tasks = [];
var currentTime = moment().format("H")
var today = moment().format("LL");
document.getElementById("currentDay").innerText = today;
console.log(today);
console.log(currentTime);

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

    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
});

var loadData = function() {
    localStorage.getItem(tasks.text)
    
}

var reset = function() { 
    tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.reload();
};

setInterval(hourUpdate(), (1000*60));