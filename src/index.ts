import "./main.css";
import "./bootstrap/css/bootstrap.min.css";

interface Task {
    status: "active" | "pending" | "complete" | "canceled" | "postponed";
    name: string;
    time: string;
}

class ToDoApp {
    date: string;
    tasksArray: Task[];

    constructor() {
        this.tasksArray = [];
        this.date = new Date().toString();

        const databutton: HTMLElement|null = document.getElementById("push_data");
        if (databutton) {
            databutton.addEventListener("click", (eventObject) => this.pickData(eventObject));
        }
    }

    addDate() {
        // add date to banner
        this.date = this.date.slice(0, 15);
        const Pdate: HTMLElement|null = document.getElementById("date");
        if (Pdate) {
        Pdate.innerHTML += this.date;
        }
    }

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

           if (inputTaskName === "" || inputTime === "" || inputTaskName === " " || inputTime === " ") {
                alert("no empty fields please,all fields are required");
           } else {
                // reset input fields
                inputTaskNameElement.value = "";
                inputTimeElement.value = "";

                // create object
                const obj: Task = {
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

    }
}

const toDoApp = new ToDoApp();

toDoApp.addDate();
