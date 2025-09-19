import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
import { TaskList } from './TaskList.js'

const rl = createInterface({
    input: stdin,
    output: stdout
})

rl.setPrompt('Enter your command: ');
rl.prompt();



// the to-do list:
const toDoList = new TaskList();

rl.on('line', (line) => {
    // trim whitespace
    const input = line.trim();

    // split input into command and argument
    const [command, ...operands] = input.split(' ');
    switch (command?.toLowerCase()) {
        case 'add':
            console.log('you entered the add command');
            const item = operands.join(' '); // join item if it had spaces
            toDoList.addTask(item);
            console.log(`Added "${item}" to the list.`);
            break;
        case 'done':
        case 'mark':
        case 'check':
            let index: number = parseInt(operands[0] || "", 10);
            if (toDoList.markTaskAsDone(index)) {
                console.log('updating list item');
            }
            else {
                console.log('List item not found');
            }
            break;
        case 'list':
        case 'print':
            toDoList.printTaskList();
            break;
        case 'exit':
        case 'quit':
            console.log();
            rl.close();
            break;
        default:
            console.log('Invalid command');
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Closing...');
    // print the list before closing:
    toDoList.printTaskList();
    exit(0);
})