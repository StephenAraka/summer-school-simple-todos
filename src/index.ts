import "./main.css";

class ToDoApp {
    date: string;
    tasksArray: object[];
    constructor() {
        this.tasksArray = [];
        this.date = new Date().toString();

        const databutton = document.getElementById("push_data");
        if (databutton) {
            databutton.addEventListener("click", (eventObject) => { this.pickData(eventObject); });
        }
    }

    addDate() {
        // add date to banner
        this.date = this.date.slice(0, 15);
        const Pdate = document.getElementById("date");
        if(Pdate){
        Pdate.innerHTML += this.date;
        }
    }

    // pick data from html to array
    pickData(event: MouseEvent) {
        const table = document.getElementById("tasksTable");
        event.preventDefault();

            const inputTaskName = (<HTMLInputElement>document.getElementById("taskName")).value;
            const inputTime = (<HTMLInputElement>document.getElementById("taskTime")).value;


        // create object
        const obj = {
            status: "active",
            name: inputTaskName,
            time: inputTime,
        };

        this.tasksArray.push(obj);

        let cellPosition = 0;
        if(table){
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







// let test = "My variable";


// class MyClass{
//     testing = "123";
//     constructor(testing:any){
//         this.testing = this.testing;
//     }
// }

// const myClass = new MyClass("Awesomeness");
