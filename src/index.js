require("./main.css");
require("./bootstrap/css/bootstrap.min.css");

//x.toDateString()

let tasksArray = [
    {status:"active",name:"Go to work",time: new Date().getHours().toString() + ":" +new Date().getMinutes().toString() },
    {status:"pending",name:"Attend accounts meeting",time: new Date().getHours().toString() + ":" +new Date().getMinutes().toString() },
    {status:"cancelled",name:"Visit the doctor",time: new Date().getHours().toString() + ":" +new Date().getMinutes().toString() },
    {status:"postponed",name:"Go for lunch",time: new Date().getHours().toString() + ":" +new Date().getMinutes().toString() },
    {status:"very active",name:"Watch world cup",time: new Date().getHours().toString() + ":" +new Date().getMinutes().toString() }
];


let table = document.getElementById("tasksTable");

var addRow = function(row_position){
let tableRow = table.insertRow(row_position);
return tableRow;
}

let addTableData = function(cell_position){
let cell = row.insertCell(cell_position);
return cell;
}


position_of_row = 0;

for(i=0; i<tasksArray.length; i++){
    row = addRow(position_of_row);

    position_of_cell = 0;
    addTableData(position_of_cell).innerHTML = tasksArray[i].status;

    position_of_cell++;
    addTableData(position_of_cell).innerHTML = tasksArray[i].name;

    position_of_cell++;
    addTableData(position_of_cell).innerHTML = tasksArray[i].time;

    position_of_row++;
}