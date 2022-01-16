#!/usr/bin/env node
var fs = require("fs");
var chalk = require("chalk");
var clojure = require("./clojure");
var cli = require("cli2json").parse(process.argv.slice(2).join(" "));
var f;
if (cli.commands[0]) {
var n = cli.commands[0];
if (!n.endsWith(".clj")) {
  if (!fs.existsSync(n)) {
      n = n + ".clj";
  }
  if (n == ".") {
  if (fs.existsSync("main.clj")) {
n = "main.clj";
  }
}
}

f = fs.readFileSync(n).toString();  
clojure.run(f);
} else {
var repl = require("repl");

function myEval(cmd, context, filename, callback) {
  var r = clojure.run(cmd).value || "undefined";
  console.log(chalk.gray(r));
  callback(null);
}
console.log("Welcome to Elephant REPL v1.0.0.\nPress ^C or ^D to exit, type .help for more info")
repl.start({ prompt: '> ', eval: myEval });
}
