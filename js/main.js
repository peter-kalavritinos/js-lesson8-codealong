var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

timeOfDay[3] = "midnight";
console.log(timeOfDay[3]);
console.log(timeOfDay);
console.log(timeOfDay.includes(8));
console.log(timeOfDay.includes("Night"));
timeOfDay.push("Afternoon");
/*console.log(timeOfDay);
timeOfDay.pop();
console.log(timeOfDay);

timeOfDay.splice(0,2);

timeOfDay.splice(0,2, "mid-afternoon", 7);*/

timeOfDay.splice(4, 0, "twilight", 2, 9);
console.log(timeOfDay);

var employeeAge = [27, 29, 35, 23, 18, 19];
var age = employeeAge.indexOf(87);
console.log(age);

///////////*////////////

var timeOfDay = [6, 9, 12, "Noon", "Evening", "Midnight"];
for (var time of timeOfDay) console.log(`It is ${time}.`);

timeOfDay.forEach(function(time, index) {
    console.log(`The ${time} element is at position ${index}.`);
});

var employeeAges = [17, 18, 29, 16, 31, 32, 33];
var adultAge = employeeAges.filter(function(item) {
    return item >= 18;
});
console.log(adultAge);

var lastNames = ["Martin", "Martino", "Thompson", "Martinatious"];
var martinName = lastNames.filter(function(item) {
    return item.includes("Martin");
});

console.log(martinName);