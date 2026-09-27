// Topic 1: core Module 

const fs = require("fs");
const path = require("path");




const filepath = path.join(__dirname, "data.json"); // __dirname = current folder 

// Reading a file 

// sync (simple , blocks the thread)
const data = fs.readFileSync(filepath, "utf-8");
console.log(data)


//async (preferred in real apps)
const dataAsync = fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
});




// writing in a file
const newData = {
    "applications": [
        {
            "id": 2,
            "company": "Google2",
            "role": "SWE",
            "status": "applied",
            "appliedDate": "2026-06-01"
        }, {
            "id": 3,
            "company": "Google3",
            "role": "SWE",
            "status": "applied",
            "appliedDate": "2026-06-01"
        }, {
            "id": 4,
            "company": "Google4",
            "role": "SWE",
            "status": "applied",
            "appliedDate": "2026-06-01"
        }
    ]
}

fs.writeFile(filepath, JSON.stringify(newData, null, 2), (err) => {
    if (err) throw err;
    console.log(
        "Async Write complete"
    )
})