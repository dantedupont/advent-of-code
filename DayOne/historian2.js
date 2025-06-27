const fs = require('fs')

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err

    const leftColumn = []
    const rightColumn = []
    let similarityScore = 0
    
    const allLines = data.split('\n')

    allLines.forEach(line => {
        const row = line.split(/\s+/)
        leftColumn.push(parseInt(row[0]))
        rightColumn.push(parseInt(row[1]))
    })

    for(let i = 0; i < leftColumn.length; i++){
        if(rightColumn.includes(leftColumn[i])){
            const copies = rightColumn.filter(num => num === leftColumn[i]);
            similarityScore = similarityScore + (leftColumn[i] * copies.length)   
        }
    }
    console.log(similarityScore);
})