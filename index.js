var count = prompt("Enter 1 for count down, Enter 2 for count up or q to quit");
while (count !== "q") {
    // prompt("enter 1 for count down, enter 2 for count up or q to quit")

    if (count === "1") {
        var count2 = parseInt(prompt("Count down "));
        var num2 = 0
        while (count2 <= num2) {
            console.log(num2);
            num2--;
        }
    }
    if (count === "2") {
        var count3 = parseInt(prompt("count up"));
        var num = 0
        while (count3 <= num) {
            console.log(num);
            num++;
        }
    }
}

