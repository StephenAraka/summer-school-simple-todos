require("./main.css");
require("./bootstrap/css/bootstrap.min.css");

//add date to banner
var date = new Date().toString();
date = date.slice(0, 15);
date = "  " + date;

var Pdate = document.getElementById("date");
Pdate.innerHTML += date;



//array of objects

let tasksArray = [{
    status: "active",
    name: "Go to work",
    time: time(2, 7)
},
{
    status: "pending",
    name: "Attend accounts meeting",
    time: time(4, 3)
},
/*
{
    status: "cancelled",
    name: "Visit the doctor",
    time: time(1, 7)
},
*/
{
    status: "postponed",
    name: "Go for lunch",
    time: time(2, 0)
},
{
    status: "very active",
    name: "Watch world cup",
    time: time(1, 2)
}
];


// pick data from html to array

var data_button = document.getElementById("push_data");
if(data_button){
    data_button.addEventListener("click",function(){
        
            var input_taskName = document.getElementById("taskName").value;
            var input_time   =  document.getElementById("taskTime").value;

            //create object
            var obj = {
                status : "active",
                name: input_taskName,
                time : input_time
            };
            
            tasksArray.push(obj);
            alert(tasksArray[4].name)
            
        }
    );
}



function time(h, m) {
    var hours = new Date().getHours() + h;
    var minutes = new Date().getMinutes() + m;
    return hours.toString() + ":" + minutes.toString();


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
for (i = 0; i < tasksArray.length; i++) {
    var cell;
    row = addRow(position_of_row);

    position_of_cell = 0;
    if (tasksArray[i].status === "active") {
        addTableData(position_of_cell).innerHTML = "<button class='btn btn-success btn-sm'><span class='badge'>" + tasksArray[i].status + "</span></button>";
    } else if (tasksArray[i].status === "cancelled") {
        addTableData(position_of_cell).innerHTML = "<button class='btn btn-danger btn-sm'><span class='badge'>" + tasksArray[i].status + "</span></button>";
    } else {
        addTableData(position_of_cell).innerHTML = "<button class='btn btn-primary btn-sm'><span class='badge'>" + tasksArray[i].status + "</span></button>";
    }


    position_of_cell++;
    addTableData(position_of_cell).innerHTML = tasksArray[i].name;

    position_of_cell++;
    addTableData(position_of_cell).innerHTML = tasksArray[i].time;

    position_of_row++;
}

