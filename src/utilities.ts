let date = new Date().toString();

export function addDate() {
    // add date to banner
    date = date.slice(0, 15);
    const Pdate: HTMLElement | null = document.getElementById("date");
    if (Pdate) {
        Pdate.innerHTML += date;
    }
}

export interface Task {
    status: "active" | "pending" | "complete" | "canceled" | "postponed";
    name: string;
    time: string;
}

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
