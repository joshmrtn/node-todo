import type { Task } from './Task.js'
// to-do list item definition:
export class TaskItem implements Task {
    name: string;
    isDone: boolean = false; 
    constructor(name: string) {
        this.name = name;
    }
}