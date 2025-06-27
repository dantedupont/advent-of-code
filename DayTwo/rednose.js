const fs = require('fs')

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err

    const allLines = data.split('\n')
    let safeCount = 0
    
    allLines.forEach(line => {
        const parsedLine = line.split(/\s/)
        const report = parsedLine.map(Number)
        
        if (report[0] < report[1]) {
            let i = 1
            while(i < report.length && report[i-1] < report[i] && (Math.abs(report[i-1] - report[i]) <= 3)){
                i++
            }
            if(i === report.length){
                safeCount++
            } 
        } else if (report[0] > report[1]){
            let i = 1
            while(i < report.length && report[i-1] > report[i] && (Math.abs(report[i-1] - report[i]) <= 3)){
                i++
            }
            if(i === report.length){
                safeCount++
            }
        }
    })
    console.log(safeCount);
})