// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
let resultCard = [];

//#region Seeding Data
resultCard.push({
     id: 1,
     name: "Abin",
     score: [
        {
            subject: "Grammer",
            marks: 80.00,
            total: 100.00
        },
        {
            subject: "Accounts",
            marks: 75.00,
            total: 100.00
        }
    ]
});

resultCard.push({
    id: 2,
    name: "Arathi",
    score: [
        {
            subject: "Grammer",
            marks: 65.00,
            total: 100.00
        },
        {
            subject: "Accounts",
            marks: 75.00,
            total: 100.00
        }
    ]
});

resultCard.push({
    id: 3,
    name: "Binitha",
    score: [
        {
            subject: "Grammer",
            marks: 95.00,
            total: 100.00
        },
        {
            subject: "Physics",
            marks: 75.00,
            total: 80.00
        }
    ]
});

resultCard.push({
    id: 4,
    name: "David",
    score: [
        {
            subject: "Grammer",
            marks: 80.00,
            total: 100.00
        },
        {
            subject: "Physics",
            marks: 65.00,
            total: 80.00
        }
    ]
});
//#endregion

console.log("*******************Score Card*****************\n");
console.log("\n");
resultCard.forEach(result => {
    console.log("\nID: " + result.id);
    console.log("\nName: " + result.name);
    console.log("\nScore\n'''''''");
    let marks = 0;
    let total = 0;
    result.score.forEach(item => {
        console.log("\nSubject: " + item.subject + ", Marks: " + item.marks + "/" + item.total);
        marks += item.marks;
        total += item.total;
    });
    console.log("\n'''''''");
    console.log("\nTotal Marks " + marks + "/" + total);
    console.log("\nPercentage: " + ((marks/total)*100).toFixed(2) + "%");
    console.log("\n---------------------------------------------------\n");
});