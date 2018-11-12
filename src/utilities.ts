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
    status: string;
    name: string;
    time: string;
}
