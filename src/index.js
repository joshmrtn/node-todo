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
        default:
            console.log('Invalid command');
            break;
    }
    rl.prompt();
});
//# sourceMappingURL=index.js.map