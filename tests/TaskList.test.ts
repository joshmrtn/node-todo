
import { describe, it, expect } from "vitest";
import { TaskList } from "../src/TaskList.js";

describe("TaskList", () => {
    it("should print task list without throwing", () => {
        const taskList = new TaskList();
        taskList.addTask("Write tests");
        expect(() => taskList.printTaskList()).not.toThrow();
    });
});