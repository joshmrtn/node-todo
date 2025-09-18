import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';

const rl = createInterface({
    input: stdin,
    output: stdout
})

rl.setPrompt('Enter your command: ');
rl.prompt();

// the to-do list:
const toDoList: string[] = [];

rl.on('line', (line) => {
    // trim whitespace
    const input = line.trim();

    // split input into command and argument
    const [command, ...operands] = input.split(' ');
    switch (command?.toLowerCase()) {
        case 'add':
            console.log('you entered the add command');
            const item = operands.join(' '); // join item if it had spaces
            toDoList.push(item);
            console.log(`Added "${item}" to the list.`);
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
    console.log('To Do List:')
    for (const item of toDoList) {
        console.log(`[ ] - ${item}`)
    }
    exit(0);
})