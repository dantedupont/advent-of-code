const fs = require('fs')

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err

    const allLines = data.split('\n')
    let safeCount = 0
    
    allLines.forEach(line => {
        const parsedLine = line.split(/\s/)
        const level = parsedLine.map(Number)
        
        if (level[0] < level[1]) {
            let i = 1
            while(i < level.length && level[i-1] < level[i] && (Math.abs(level[i-1] - level[i]) <= 3)){
                i++
            }
            if(i === level.length){
                safeCount++
            } 
        } else if (level[0] > level[1]){
            let i = 1
            while(i < level.length && level[i-1] > level[i] && (Math.abs(level[i-1] - level[i]) <= 3)){
                i++
            }
            if(i === level.length){
                safeCount++
            }
        }
    })
    console.log(safeCount);
})