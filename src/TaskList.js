import { TaskItem } from "./TaskItem.js";
export class TaskList {
    items = [];
    addTask(name) {
        this.items.push(new TaskItem(name));
    }
    markTaskAsDone(index) {
        if (index > this.items.length || index < 0) {
            return false;
        }
        else {
            let item = this.items[index];
            if (item) {
                item.isDone = true;
                return true;
            }
        }
        return false;
    }
    printTaskList() {
        console.log("----------           To-do list:           ---------");
        for (let i = 0; i < this.items.length; i++) {
            const listItem = this.items[i];
            console.log(`(${i}): [${listItem?.isDone ? "X" : " "}] - ${listItem?.name}`);
        }
        console.log("----------------------------------------------------");
    }
}
//# sourceMappingURL=TaskList.js.map