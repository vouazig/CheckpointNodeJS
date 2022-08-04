var fs=require("fs")
var txt=fs.readFileSync(process.argv[2])
var line=txt.toString().split('\n').length-1
console.log(line)