import "./main.css";
import "./bootstrap/css/bootstrap.min.css";

interface Task {
    status: "active" | "pending" | "cancelled"| ;
    name: string;
    time: string;
}

class ToDoApp {
    date: string;
    tasksArray: Task[];
    constructor() {
        this.tasksArray = [];
        this.date = new Date().toString();

        const databutton = document.getElementById("push_data");
        if (databutton) {
            databutton.addEventListener("click", this.eventListener);
        }
    }

    eventListener = (event: MouseEvent) => {
        this.pickData(event);
    }

    addDate() {
        // add date to banner
        this.date = this.date.slice(0, 15);
        const Pdate = document.getElementById("date");
        if (Pdate) {
        Pdate.innerHTML += this.date;
        }
    }

    // pick data from html to array
    pickData(event: MouseEvent) {
        const table = document.getElementById("tasksTable") as HTMLTableElement;
        event.preventDefault();

        const inputTaskName = (document.getElementById("taskName") as HTMLInputElement).value;
        const inputTime = (document.getElementById("taskTime") as HTMLInputElement).value;

        // create object
        const obj = {
            status: "active",
            name: inputTaskName,
            time: inputTime
        };

        this.tasksArray.push(obj);

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

toDoApp.addDate();

// to make something optional, use ?
