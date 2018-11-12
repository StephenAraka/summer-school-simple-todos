import "./bootstrap/css/bootstrap.min.css";
import "./main.css";
import { Task, addDate } from "./utilities";

class ToDoApp {
    date = new Date().toString();
    tasksArray: Task[] = [];
    errorTask: Element | null;
    errorTime: Element | null;
    overlayElement = document.getElementById("overlay");
    editName = document.getElementById("editName") as HTMLInputElement | null;
    editTime = document.getElementById("editTime") as HTMLInputElement | null;
    editStatus = document.getElementById("editStatus") as HTMLInputElement;
    trackIndex = 0;
    table = document.getElementById("tasksTable") as HTMLTableElement | null;
    overlaybutton: HTMLElement | null = null;

    constructor() {
        // validation
        const inputTaskNameElement = document.getElementById("taskName") as HTMLInputElement | null;
        const inputTimeElement = document.getElementById("taskTime") as HTMLInputElement | null;
        this.errorTask = document.querySelector(".errorTask");
        this.errorTime = document.querySelector(".errorTime");

        if (inputTaskNameElement && inputTimeElement) {
            inputTaskNameElement.addEventListener("input", (event) => {
                // Each time the user types something, we check if the
                //  field is valid.

                if (!inputTaskNameElement.value.trim()) {
                    inputTaskNameElement.setCustomValidity("*field required");
                    if (this.errorTask) {
                        this.errorTask.classList.add("error");
                        this.errorTask.innerHTML = inputTaskNameElement.validationMessage;
                    }
                } else {
                    if (this.errorTask) {
                        this.errorTask.classList.remove("error");
                        this.errorTask.innerHTML = "";
                    }
                }
            });

            // event listener for time
            inputTimeElement.addEventListener("input", (event) => {
                // Each time the user types something, we check if the
                //  field is valid.
                if (!inputTimeElement.value.trim()) {
                    inputTimeElement.setCustomValidity("*field required");
                    if (this.errorTime) {
                        this.errorTime.innerHTML = inputTaskNameElement.validationMessage;
                        this.errorTime.classList.add("error");
                    }
                } else {
                    if (this.errorTime) {
                        this.errorTime.classList.remove("error");
                        this.errorTime.innerHTML = "";
                    }
                }
            });

        }

        // eventlistner on submit button
        const databutton = document.getElementById("push_data") as HTMLElement;
        if (databutton) {
            databutton.addEventListener("click", this.pickData);
        }

        // event listener to switch off overlay
        const turnOverlayOff = document.getElementById("editButton");
        if (turnOverlayOff) {
            turnOverlayOff.addEventListener("click", this.overlayOff.bind(this));
        }

        const deleteButton = document.getElementById("deleteButton");
        if (deleteButton) {
            deleteButton.addEventListener("click", this.deleteTask);

        }
    }

    // eventListener = (event: MouseEvent) => {
    //     this.pickData(event);
    // }

    // pick data from html to array
    pickData = (event: MouseEvent) => {
        // HTMLTableElement
        event.preventDefault();

        const inputTaskNameElement = document.getElementById("taskName") as HTMLInputElement | null;
        const inputTimeElement = document.getElementById("taskTime") as HTMLInputElement | null;
        const errorTask2 = document.querySelector(".errorTask");
        const errorTime2 = document.querySelector(".errorTime");

        if (inputTaskNameElement && inputTimeElement && this.errorTask && this.errorTime) {
            const inputTaskName = inputTaskNameElement.value;
            const inputTime = inputTimeElement.value;

            // validate task on submit
            if (!inputTaskNameElement.value.trim()) {
                inputTaskNameElement.setCustomValidity("field required");
                this.errorTask.classList.add("error");
                this.errorTask.innerHTML = inputTaskNameElement.validationMessage;
            }
            // validate time on submit
            if (!inputTimeElement.value.trim()) {
                inputTimeElement.setCustomValidity("field required");
                this.errorTime.innerHTML = inputTaskNameElement.validationMessage;
                this.errorTime.classList.add("error");
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
                if (this.table) {
                    const tableRow = this.table.insertRow(this.tasksArray.length - 1);
                    tableRow.id = `row${this.tasksArray.length - 1}`;
                    tableRow.insertCell(cellPosition).innerHTML = `<button class='btn btn-success btn-sm'><span class='badge'>${this.tasksArray[this.tasksArray.length - 1].status}</span></button>`;

                    cellPosition += 1;
                    tableRow.insertCell(cellPosition).innerHTML = this.tasksArray[this.tasksArray.length - 1].name;

                    cellPosition += 1;
                    tableRow.insertCell(cellPosition).innerHTML = this.tasksArray[this.tasksArray.length - 1].time;

                    cellPosition += 1;
                    const buttonId = `task${this.tasksArray.length - 1}`;
                    tableRow.insertCell(cellPosition).innerHTML = `<button  id='${buttonId}' class='btn btn-primary btn-xs'>edit task</button>`;

                    // overlay on button
                    this.overlaybutton = document.getElementById(buttonId);
                    const objectIndex = this.tasksArray.length - 1;
                    if (this.overlaybutton) {
                        // overlaybutton.addEventListener("click", this.overlayOn.bind(this));
                        this.overlaybutton.addEventListener("click", (eventObject) => this.editButtonListener(eventObject, objectIndex));
                    }
                }

            }

        }
    }

    editButtonListener = (eventObj: MouseEvent, objectIndex: number) => {
        this.trackIndex = objectIndex;
        if (this.overlayElement && this.editName && this.editStatus && this.editTime) {
            this.editStatus.value = this.tasksArray[objectIndex].status;
            this.editName.value = this.tasksArray[objectIndex].name;
            this.editTime.value = this.tasksArray[objectIndex].time;
            this.overlayElement.style.display = "block";
        }
    }

    overlayOff(event: MouseEvent) {
        // event.preventDefault();
        if (this.overlayElement) {
            if (this.overlayElement && this.editName && this.editStatus && this.editTime) {
                this.tasksArray[this.trackIndex].status = this.editStatus.value;
                this.tasksArray[this.trackIndex].name = this.editName.value;
                this.tasksArray[this.trackIndex].time = this.editTime.value;

                if (this.table) {
                    this.table.deleteRow(this.trackIndex);
                    const trow = this.table.insertRow(this.trackIndex);
                    trow.insertCell(0).innerHTML = `<button class='btn btn-danger btn-sm'><span class='badge'>${this.tasksArray[this.trackIndex].status}</span></button>`;
                    trow.insertCell(1).innerHTML = this.tasksArray[this.trackIndex].name;
                    trow.insertCell(2).innerHTML = this.tasksArray[this.trackIndex].time;
                    const buttonId = `task${this.trackIndex}`;
                    trow.insertCell(3).innerHTML = `<button  id='${buttonId}' class='btn btn-primary btn-xs'>edit task</button>`;
                    // overlay on button
                    this.overlaybutton = document.getElementById(buttonId);
                    // const objectIndex = this.trackIndex;
                    if (this.overlaybutton) {
                        // overlaybutton.addEventListener("click", this.overlayOn.bind(this));
                        this.overlaybutton.addEventListener("click", (eventObject) => this.editButtonListener(eventObject, this.trackIndex));
                    }
                }

            }
            this.overlayElement.style.display = "none";

        }

    }

    deleteTask = () => {
        if (this.overlayElement) {
            this.tasksArray.splice(this.trackIndex, 1);
            if (this.table) {
                this.table.deleteRow(this.trackIndex);
            }
            this.overlayElement.style.display = "none";
        }
    }
}
const toDoApp = new ToDoApp();

// tslint:disable-next-line:no-unused-expression
addDate();

// to make something optional, use ?
