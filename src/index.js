import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
const rl = createInterface({
    input: stdin,
    output: stdout
});
rl.setPrompt('Enter your command: ');
rl.prompt();
class TaskItem {
    name;
    isDone = false;
    constructor(name) {
        this.name = name;
    }
}
// the to-do list:
const toDoList = [];
rl.on('line', (line) => {
    // trim whitespace
    const input = line.trim();
    // split input into command and argument
    const [command, ...operands] = input.split(' ');
    switch (command?.toLowerCase()) {
        case 'add':
            console.log('you entered the add command');
            const item = operands.join(' '); // join item if it had spaces
            toDoList.push(new TaskItem(item));
            console.log(`Added "${item}" to the list.`);
            break;
        case 'done':
        case 'mark':
        case 'check':
            let index = parseInt(operands[0] || "", 10);
            if (typeof index === 'undefined' || index < 0 || index >= toDoList.length) {
                // invalid input - print message
                console.log(`invalid input - number must be in the range 0-${toDoList.length - 1}`);
                break;
            }
            else {
                const listItem = toDoList[index];
                if (listItem) {
                    // valid input - update list item
                    console.log('updating list item');
                    listItem.isDone = true;
                }
                else {
                    console.log('List item not found');
                }
            }
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
    console.log('To Do List:');
    for (const item of toDoList) {
        console.log(`[${(item.isDone ? "X" : " ")}] - ${item.name}`);
    }
    exit(0);
});
//# sourceMappingURL=index.js.map