#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence"
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`Total words in this sentence are: ${word.length}`);
