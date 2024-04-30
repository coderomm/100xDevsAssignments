// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    const hours24 = hours.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')
    seconds = seconds.toString().padStart(2, '0')

    const Time24 = `${hours24}:${minutes}:${seconds}`;
    let ampm = hours >= 12 ? "PM" : "AM";
    if (hours === 0) {
        hours = 12
    } else if (hours > 12) {
        hours -= 12;
    };
    hours = hours.toString().padStart(2, '0');
    const Time12 = `${hours}:${minutes}:${seconds} ${ampm}`;
    console.log(Time24)
    console.log(Time12)
}
setInterval(clock, 1000);
