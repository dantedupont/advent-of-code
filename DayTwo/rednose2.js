
const fs = require('fs')

const data = fs.readFileSync('input.txt', 'utf8')
const allReports = []
let safeCount = 0

function main(){

    processData()    
    
    for (const report of allReports){
        if(checkReport(report)){
            safeCount++
        } else {
            for(let i = 0; i < report.length; i++){
                const dampenedReport = report.slice()
                dampenedReport.splice(i,1)
                if(checkReport(dampenedReport)){        
                    safeCount++
                    break
                }
            }
        }
    }    
    console.log(safeCount); 
}

function processData(){
    const allLines = data.split('\n')
    for (const line of allLines){
        const parsedLine = line.split(/\s/)
        const report = parsedLine.map(Number)
        allReports.push(report)
    }    
}

function checkReport(report){
        if (report[0] < report[1]) {
            let i = 1
            while(i < report.length && report[i-1] < report[i] && (Math.abs(report[i-1] - report[i]) <= 3)){
                i++
            }
            if(i === report.length){
                return true
            } else {
                return false
            }
        } else if (report[0] > report[1]){
            let i = 1
            while(i < report.length && report[i-1] > report[i] && (Math.abs(report[i-1] - report[i]) <= 3)){
                i++
            }
            if(i === report.length){
                return true
            } else {
                return false
            }
        }
    }

console.time("time")
main()
console.timeEnd("time")
    

