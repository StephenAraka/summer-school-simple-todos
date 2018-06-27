import "./main.css";
import "./bootstrap/css/bootstrap.min.css";
import { Task, addDate } from "./utilities"


class ToDoApp {
    date: string;
    tasksArray: Task[];
    errorTask: Element | null;
    errorTime: Element | null;

    constructor() {
        this.tasksArray = [];
        this.date = new Date().toString();

        // validation
        const inputTaskNameElement = document.getElementById("taskName") as HTMLInputElement | null;
        const inputTimeElement = document.getElementById("taskTime") as HTMLInputElement | null;
        this.errorTask = document.querySelector(".errorTask");
        this.errorTime = document.querySelector(".errorTime");

        if (inputTaskNameElement && inputTimeElement) {
            inputTaskNameElement.addEventListener("input", (event) => {
                // Each time the user types something, we check if the
                //  field is valid.
                if (inputTaskNameElement.value === "" || inputTaskNameElement.value === " ") {
                    inputTaskNameElement.setCustomValidity("*field required");
                    if (this.errorTask) {
                        this.errorTask.className = "error";
                        this.errorTask.innerHTML = inputTaskNameElement.validationMessage;
                    }
                } else {
                    if (this.errorTask) {
                        this.errorTask.className = "okay";
                        this.errorTask.innerHTML = "";
                    }
                }
            });

            // event listener for time
            inputTimeElement.addEventListener("input", (event) => {
                // Each time the user types something, we check if the
                //  field is valid.
                if (inputTimeElement.value === "" || inputTimeElement.value === " ") {
                    inputTimeElement.setCustomValidity("*field required");
                    if (this.errorTime) {
                        this.errorTime.innerHTML = inputTaskNameElement.validationMessage;
                        this.errorTime.className = "error";
                    }
                } else {
                    if (this.errorTime) {
                        this.errorTime.innerHTML = "";
                        this.errorTime.className = "okay";
                    }
                }
            });

        }

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
        const errorTask2 = document.querySelector(".errorTask");
        const errorTime2 = document.querySelector(".errorTime");

        if (inputTaskNameElement && inputTimeElement && this.errorTask && this.errorTime) {
            const inputTaskName = inputTaskNameElement.value;
            const inputTime = inputTimeElement.value;

            // validate task on submit
            if (inputTaskNameElement.value === "" || inputTaskNameElement.value === " ") {
                inputTaskNameElement.setCustomValidity("field required");
                this.errorTask.className = "error";
                this.errorTask.innerHTML = inputTaskNameElement.validationMessage;
            }
            // validate time on submit
            if (inputTimeElement.value === "" || inputTimeElement.value === " ") {
                inputTimeElement.setCustomValidity("field required");
                this.errorTime.innerHTML = inputTaskNameElement.validationMessage;
                this.errorTime.className = "error";
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
}
const toDoApp = new ToDoApp();

toDoApp.myDateFunction;

// to make something optional, use ?
