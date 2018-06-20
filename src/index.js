require("./main.css");
require("./bootstrap/css/bootstrap.min.css");

//add date to banner
var date = new Date().toString();
date = date.slice(0,15);
date = "  " + date;

var Pdate = document.getElementById("date");
Pdate.innerHTML += date; 

//x.toDateString()


let tasksArray = [{
        status: "active",
        name: "Go to work",
        time: time()
    },
    {
        status: "pending",
        name: "Attend accounts meeting",
        time: time()
    },
    {
        status: "cancelled",
        name: "Visit the doctor",
        time: time()
    },
    {
        status: "postponed",
        name: "Go for lunch",
        time: time()
    },
    {
        status: "very active",
        name: "Watch world cup",
        time: time()
    }
];

function time() {
    return new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
}

let table = document.getElementById("tasksTable");

var addRow = function(row_position) {
    let tableRow = table.insertRow(row_position);
    return tableRow;
}

let addTableData = function(cell_position) {
    let cell = row.insertCell(cell_position);
    return cell;
}


//add date to banner div, statement is still empty
//add tooltipsshutdow
position_of_row = 0;
for(i=0; i<tasksArray.length; i++){
    var cell;
    row = addRow(position_of_row);

    position_of_cell = 0;
    if(tasksArray[i].status === "active"){
        addTableData(position_of_cell).innerHTML = "<button class='btn btn-success btn-sm'><span class='badge'>"+tasksArray[i].status+"</span></button>" ;
    }
    else if(tasksArray[i].status === "cancelled"){
        addTableData(position_of_cell).innerHTML = "<button class='btn btn-danger btn-sm'><span class='badge'>"+tasksArray[i].status+"</span></button>" ;
    }
    else{
        addTableData(position_of_cell).innerHTML = "<button class='btn btn-primary btn-sm'><span class='badge'>"+tasksArray[i].status+"</span></button>" ;
    }


    position_of_cell++;
    addTableData(position_of_cell).innerHTML = tasksArray[i].name;

    position_of_cell++;
    addTableData(position_of_cell).innerHTML = tasksArray[i].time;

    position_of_row++;
}

console.log(table.rows[0].cells)