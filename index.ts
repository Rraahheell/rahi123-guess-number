import inquirer from "inquirer";

let randomNUM = Math.floor(Math.random()*6+1)

let answer = await inquirer.prompt([{
    message: "guess your number from 1 to 6 : ",
    type:"number",
    name:"num"
}])
 if(answer.num === randomNUM){
    console.log("congrats you guess correct number")
 }else{
    console.log("you guess wrong number")
 }