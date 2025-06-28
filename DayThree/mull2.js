const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8')
const mulRegex = /(mul\([0-9]{1,3},[0-9]{1,3}\))|(don\'t\(\))|(do\(\))/g
const numRegex = /[0-9]+([0-9])*/g
let dont = false
let sum = 0


function main(){
    const parsedData = data.match(mulRegex)

    for(let i = 0; i < parsedData.length; i++){
        if(parsedData[i] === "don't()"){
            dont = true
        } else if (parsedData[i] == "do()"){
            dont = false
        } else {
            if(dont === false){
                const [a , b] = parsedData[i].match(numRegex)        
                const parsedA = parseInt(a)
                const parsedB = parseInt(b)        
                sum = sum + (parsedA * parsedB)
            }
        }
    }
    console.log(sum);  
}

main()

