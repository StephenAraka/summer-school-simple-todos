import "./main.css";
import "./bootstrap/css/bootstrap.min.css";
import { Task, addDate } from "./utilities"


class ToDoApp {
    date: string;
    tasksArray: Task[];
    constructor() {
        this.tasksArray = [];
        this.date = new Date().toString();

        const databutton: HTMLElement | null = document.getElementById("push_data");
        if (databutton) {
            databutton.addEventListener("click", (eventObject) => this.pickData(eventObject));
        }
    }

    eventListener = (event: MouseEvent) => {
        this.pickData(event);
    }

    myDateFunction = addDate();

    // pick data from html to array
    pickData(event: MouseEvent) {
        // HTMLTableElement
        const table = document.getElementById("tasksTable") as HTMLTableElement | null;
        event.preventDefault();

        const inputTaskNameElement = document.getElementById("taskName") as HTMLInputElement | null;
        const inputTimeElement = document.getElementById("taskTime") as HTMLInputElement | null;

        if (inputTaskNameElement && inputTimeElement) {
            const inputTaskName = inputTaskNameElement.value;
            const inputTime = inputTimeElement.value;

            // create object
            const obj: Task = {
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
