// To get current date and time

    let now = new Date();
    console.log(now.toString());

// Various Operations 

    console.log(now.getDate()); // gives date
    console.log(now.getFullYear()); // gives year
    console.log(now.getHours()); // gives hour
    console.log(now.getSeconds); // gives seconds

// Creating custom date
    // format -> new Date( Year, Month, Day, Hour, Minutes, Seconds, Milliseconds )

    let newdate = new Date(2024,4,22,13,5,35,255);
    console.log(newdate.toString());

// Time in Miliseconds 

    let dateNow = Date.now();
    console.log(dateNow);

    const date1 = new Date(dateNow) 
    console.log(date1);
