import inquirer from "inquirer"

async function main() {
let todos = []
let conditon = true

while (conditon) {
    let addTask = await inquirer.prompt(
        [
          
            {

                type: "input",
                name: "todo",
                message: "what you want to add in your to-do-list?"
            },

            {
                name:"addmore",
                type:"confirm",
                message:"Do you want to add more?"
            }

        ]
        )
    
        todos.push(addTask.todo)
        conditon = addTask.addmore
        console.log(todos);


    }
}

main().catch(err => console.error(err));