
//step2
function buttonClicked() {
    console.log("Button clicked!");
    const output = document.getElementById("output");
    output.innerText = "Button clicked!";
}
document.getElementById("clickButton").addEventListener("click", buttonClicked);

//step3
function inputChanged(event) {
    const name = event.target.value.trim();
    const output = document.getElementById("output");
    if (name !== "") {
        output.innerText = `Hello, ${name}!`;
    }
}
document.getElementById("nameInput").addEventListener("change", inputChanged);

//step4
let intervalID;
let seconds = 0;

function startStopwatch() {
    const output = document.getElementById("output");
    seconds = 0;
    function tick() {
        seconds++;
        output.innerText = `Stopwatch: ${seconds} seconds`;
    }
    intervalID = setInterval(tick, 1000);
}

function stopStopwatch() {
    clearInterval(intervalID);
}

document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);

//step 5
function clickCounter() {
    let click_nums = 0;
    function click() {
        click_nums = click_nums + 1;
        return click_nums;
    }
    return click;
}

const num_clicks = clickCounter();

document.getElementById("clickCounter").addEventListener("click", () => {
const output = document.getElementById("output");
const count = num_clicks();
output.innerText = `Click Counter: ${count}`;
});
