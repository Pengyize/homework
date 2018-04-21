#!/usr/bin/env node

let fs = require('fs')

let dirName = process.argv[2]

if(fs.existsSync('/users/scofieldmichael/Desktop/dirName')){
  console.log('exists');
  process.exit(1)
}else{
  fs.mkdirSync("./" + dirName)
  process.chdir("./" + dirName)
  fs.mkdirSync('css')
  fs.mkdirSync('js')

  fs.writeFileSync("./sign_up.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>");
  fs.writeFileSync("css/default.css", "h1{color: red;}");
  fs.writeFileSync("./js/main.js", "var string = 'Hello World';\nalert(string);");
}

process.exit(0)
