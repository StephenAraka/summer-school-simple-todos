"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.css");
require("./bootstrap/css/bootstrap.min.css");
const utilities_1 = require("./utilities");
class ToDoApp {
    constructor() {
        this.eventListener = (event) => {
            this.pickData(event);
        };
        this.myDateFunction = utilities_1.addDate();
        this.tasksArray = [];
        this.date = new Date().toString();
        const databutton = document.getElementById("push_data");
        if (databutton) {
            databutton.addEventListener("click", (eventObject) => this.pickData(eventObject));
        }
    }
    // pick data from html to array
    pickData(event) {
        // HTMLTableElement
        const table = document.getElementById("tasksTable");
        event.preventDefault();
        const inputTaskNameElement = document.getElementById("taskName");
        const inputTimeElement = document.getElementById("taskTime");
        if (inputTaskNameElement && inputTimeElement) {
            const inputTaskName = inputTaskNameElement.value;
            const inputTime = inputTimeElement.value;
            // create object
            const obj = {
                status: "active",
                name: inputTaskName,
                time: inputTime
            };
            this.tasksArray.push(obj);
        }
        let cellPosition = 0;
        if (table) {
            const tableRow = table.insertRow(this.tasksArray.length - 1);
            tableRow.insertCell(cellPosition).innerHTML = `<button class='btn btn-success btn-sm'><span class='badge'>${this.tasksArray[this.tasksArray.length - 1].status}</span></button>`;
            cellPosition += 1;
            tableRow.insertCell(cellPosition).innerHTML = this.tasksArray[this.tasksArray.length - 1].name;
            cellPosition += 1;
            tableRow.insertCell(cellPosition).innerHTML = this.tasksArray[this.tasksArray.length - 1].time;
        }
    }
}
const toDoApp = new ToDoApp();
toDoApp.myDateFunction;
// to make something optional, use ?
//# sourceMappingURL=index.js.map