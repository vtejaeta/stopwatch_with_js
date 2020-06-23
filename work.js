var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');


// EVENT LISTENERS
start.addEventListener('click', start_timer);
stop.addEventListener('click', stop_timer);
reset.addEventListener('click', reset_timer);

var temp = 1;
var key;

//  RESPECTIVE FUNCTIONS
function start_timer() {
    start.style.outline = 'none';
    start.disabled = true;
    console.log('clicked-start');
    key = setInterval(function start1() {
        let sec = parseInt(temp / 100);
        let millisec = temp % 100;
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (millisec < 10) {
            millisec = '0' + millisec;
        }
        document.getElementById('time').innerText = sec + ':' + millisec;
        temp++;
        console.log(temp);
    }, 10);
}


function stop_timer() {
    stop.style.outline = 'none';
    start.disabled = false;
    console.log('clicked-stop');
    clearInterval(key);
}

function reset_timer() {
    reset.style.outline = 'none';
    start.disabled = false;
    clearInterval(key);
    temp = 1;
    document.getElementById('time').innerText = '00:00';
}