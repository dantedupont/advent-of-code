const fs = require('fs')

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err

    const leftColumn = []
    const rightColumn = []
    let sum = 0
    
    const allLines = data.split('\n')

    allLines.forEach(line => {
        const row = line.split(/\s+/)
        leftColumn.push(parseInt(row[0]))
        rightColumn.push(parseInt(row[1]))
    })

    leftColumn.sort()
    rightColumn.sort()

    for(let i = 0; i < leftColumn.length; i++){
        const difference = Math.abs(leftColumn[i] - rightColumn[i])
        sum += difference
    }
    console.log(sum);
})