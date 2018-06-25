require("./main.css");
require("./bootstrap/css/bootstrap.min.css");

// add date to banner
function mydate() {
    let date = new Date().toString();
    return setInterval(date.slice(0, 24), 50);
}

const Pdate = document.getElementById("date");
Pdate.innerHTML += mydate();

// if (Pdate) onload = function() {
//     setInterval("Pdate.innerHTML += new Date().toLocaleString()", 50)
// }

const table = document.getElementById("tasksTable");

// array of objects
const tasksArray = [];

// pick data from html to array
function pickData(event) {
    event.preventDefault();
    const inputTaskName = document.getElementById("taskName").value;
    const inputTime = document.getElementById("taskTime").value;

    // create object
    const obj = {
        status: "active",
        name: inputTaskName,
        time: inputTime,
    };

    tasksArray.push(obj);

    let cellPosition = 0;
    const tableRow = table.insertRow(tasksArray.length - 1);
    tableRow.insertCell(cellPosition).innerHTML = `<button class='btn btn-success btn-sm'><span class='badge'>${tasksArray[tasksArray.length - 1].status}</span></button>`;

    cellPosition += 1;
    tableRow.insertCell(cellPosition).innerHTML = tasksArray[tasksArray.length - 1].name;

    cellPosition += 1;
    tableRow.insertCell(cellPosition).innerHTML = tasksArray[tasksArray.length - 1].time;
}


const databutton = document.getElementById("push_data");
if (databutton) {
    databutton.addEventListener("click", pickData);
}