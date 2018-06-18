require("./main.css");
require("./bootstrap/css/bootstrap.min.css");

let app = document.querySelector('#app')
app.innerHTML = "<div id='banner'> <h3>TO DO APP</h3> <p>the date today is</p> <div id=button> <button><span class='glyphicon'>&#x2b;</span></button> <button><span class='glyphicon'>&#xe086;</span></button> </div>  </div>";
app.innerHTML += "<div id='list'> <h5>Today's Schedule</h5> "
app.innerHTML += "<table><tr><td> <button class='btn btn-primary'><span class='badge'>active</span></button> </td> <td> Go to work</td> <td>8:00 - 16:00</td> </tr> <tr><td> <button class='btn btn-primary'><span class='badge'>pending</span></button> </td> <td> Attend accounts meeting </td> <td>10:00 - 12:00</td> </tr> <tr><td> <button class='btn btn-primary'><span class='badge'>canceled</span></button> </td> <td> Watch WorldCup </td> <td>13:00 - 15:00</td> </tr>  <tr><td> <button class='btn btn-primary'><span class='badge'>active</span></button> </td> <td> Watch WorldCup </td> <td>13:00 - 15:00</td> </tr> </table></div> "
    //app.innerHTML += "<tr><td> <button>badge</button> </td> <td> Watch WorldCup </td> <td>13:00 - 15:00</td> </tr>"
    //app.innerHTML += "<tr><td> <button>badge</button> </td> <td> pick kids from school</td> <td>16:300 - 18:00</td> </tr>"
    //app.innerHTML += "</table></div>"

app.innerHTML += "";