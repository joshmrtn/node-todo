import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
const rl = createInterface({
    input: stdin,
    output: stdout
});
rl.setPrompt('Enter your command: ');
rl.prompt();
rl.on('line', (line) => {
    switch (line.trim()) {
        case 'add':
            console.log('you entered the add command');
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
    exit(0);
});
//# sourceMappingURL=index.js.map