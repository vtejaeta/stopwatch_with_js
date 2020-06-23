var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');


// EVENT LISTENERS
start.addEventListener('click', start_timer);
stop.addEventListener('click', stop_timer);
reset.addEventListener('click', reset_timer);

window.valuetemp = 1;

//  RESPECTIVE FUNCTIONS
function start_timer() {
    start.style.outline = 'none';
    start.disabled = true;
    console.log('clicked-start');
    window.value = setInterval(function start1() {
        let min = parseInt(window.valuetemp / 60);
        let sec = window.valuetemp % 60;
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        document.getElementById('time').innerText = min + ':' + sec;
        window.valuetemp++;
        console.log(window.valuetemp);
    }, 1000);
}


function stop_timer() {
    stop.style.outline = 'none';
    start.disabled = false;
    console.log('clicked-stop');
    clearInterval(window.value);
}

function reset_timer() {
    reset.style.outline = 'none';
    start.disabled = false;
    clearInterval(window.value);
    window.valuetemp = 1;
    document.getElementById('time').innerText = '00:00';
}