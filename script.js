const colorDisplay = document.getElementById("color-display");
const colorBTNs = document.querySelectorAll(".color-btn");

// for (let i=0;i<colorBTNs.length;i++) {
//     console.log(colorBTNs[i])
// }

colorBTNs.forEach(button => {
    button.addEventListener("click", changeBgColor)
    button.addEventListener("mouseover", changeBTNApp)
    button.addEventListener("mouseout", remChangeBTNApp)
});

function changeBgColor() {
    // console.log(this.textContent)
    console.log(this.dataset.color)
    document.body.style.backgroundColor = this.dataset.color;
    colorDisplay.textContent = "Current Color: " + this.textContent
}

function changeBTNApp() {
    // console.log(this);
    this.style.backgroundColor = "transparent";
    this.style.color = this.dataset.color;
}

function remChangeBTNApp() {
    console.log(this);
    this.style.backgroundColor = this.dataset.color;
    this.style.color = "white";
}

//CYCLE BUTTONS
const colorList = ["red", "green", "blue"];
let interval;
let i = 0 // i is the index of the array "color" and is gonna be iterated

const startBTN = document.getElementById("start-btn");
const stopBTN = document.getElementById("stop-btn");

startBTN.addEventListener("click", startCycle);
stopBTN.addEventListener("click", stopCycle);

function startCycle() {
    interval = setInterval(() => {
        colorDisplay.textContent = "Current Color: " + colorList[i]

        document.body.style.backgroundColor = colorList[i];
        //first method to iterate i
        // i++;
        // if (i == 3) {i=0}

        //second method to iterate i
        i = (i + 1) % colorList.length;
    }, 1000)
}

function stopCycle() {
    clearInterval(interval)
    document.body.style.backgroundColor = "white"
    colorDisplay.textContent = "Current Color: White"
}