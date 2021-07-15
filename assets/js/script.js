var currentTime = moment().format("H")
var today = moment().format("LL");
document.getElementById("currentDay").innerText = today;
console.log(today);

var hourUpdate = function() {
    if(timeBlock < currentTime){
        // all timeblocks will be gray
    } else if(timeBlock == currentTime){
        // timeblock will be green

    } else if(timeBlock > currentTime){
        // time block will be blue

    } else {
        // all timeblocks will be gray background
    }
    console.log(currentTime);
};

// Save button is clicked
$(".savebtn").click(function(){
    console.log("hello");
});

hourUpdate();