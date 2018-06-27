"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date = new Date().toString();
function addDate() {
    // add date to banner
    date = date.slice(0, 15);
    const Pdate = document.getElementById("date");
    if (Pdate) {
        Pdate.innerHTML += date;
    }
}
exports.addDate = addDate;
// var date = new Date().toString();
// export default interface Task {
//     status: "active" | "pending" | "complete" | "canceled" | "postponed";
//     name: string;
//     time: string;
// }
// export function addDate() {
//     // add date to banner
//     date = date.slice(0, 15);
//     const Pdate: HTMLElement | null = document.getElementById("date");
//     if (Pdate) {
//         Pdate.innerHTML += date;
//     }
// }
//# sourceMappingURL=utilities.js.map