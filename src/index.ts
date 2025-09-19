import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';

const rl = createInterface({
    input: stdin,
    output: stdout
})

rl.setPrompt('Enter your command: ');
rl.prompt();

// to-do list item definition:
interface Task {
    name: string;
    isDone: boolean;
}
class TaskItem implements Task {
    name: string;
    isDone: boolean = false; 
    constructor(name: string) {
        this.name = name;
    }
}


// the to-do list:
const toDoList: TaskItem[] = [];

// to-do list print function
function printTaskList(sourceList: TaskItem[]): void {
    console.log("----------           To-do list:           ---------");
    for (let i = 0; i < sourceList.length; i++) {
        const listItem = sourceList[i];
        console.log(`(${i}): [${(listItem?.isDone ? "X" : " ")}] - ${listItem?.name}`);
    }
    console.log("----------------------------------------------------");
}

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
            let index: number = parseInt(operands[0] || "", 10);
            if (typeof index === 'undefined' || index < 0 || index >= toDoList.length) {
                // invalid input - print message
                console.log(`invalid input - number must be in the range 0-${toDoList.length - 1}`);
                break;
            }
            else {
                const listItem = toDoList[index]
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
        case 'list':
        case 'print':
            printTaskList(toDoList);
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
    printTaskList(toDoList);
    exit(0);
})