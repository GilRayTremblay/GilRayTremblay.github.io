const todoList = [];
let running = true;
let input = '';

while (running) {
    let command = prompt("What would you like to do?");
    switch (command) {
        case 'new':
            input = prompt('What would you like to add to the list?');
            todoList.push(input);
            console.log(`${input} added.`);
            input = '';
            command = '';
            break;
        case 'list':
            console.log('Todo List:')
            console.log('----------')
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}. ${todoList[i]}`);
            }
            console.log('----------')
            break;
        case 'delete':
            input = parseInt(prompt('What is the index of the item you would like to delete?'));
            if (input < todoList.length && input >= 0) {
                let confirm = prompt(`Just to confirm, you want to delete ${todoList[input]}? y/n`);
                if (confirm == 'y') {
                    console.log(`${todoList[input]} deleted.`);
                    todoList.splice(input, input);
                }
                else if (confirm == 'n') {
                    console.log('Cancelling action.');
                }
                else {
                    console.log('Invalid response.');
                }
            }
            else {
                console.log('Invalid index.');
            }

            break;
        case 'quit':
            console.log('Okay, quitting application.');
            running = false;
            break;
        default:
            console.log('Invalid input');

    }
}
