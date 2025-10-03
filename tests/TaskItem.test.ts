import { describe, it, expect } from "vitest";
import { TaskItem } from "../src/TaskItem.js";

describe("TaskItem", () => {
    it("should create a task with the correct name and default isDone = false", () => {
        const task = new TaskItem("Write tests");
        expect(task.name).toBe("Write tests");
        expect(task.isDone).toBe(false);
    });

    it("should allow marking a task as done", () => {
        const task = new TaskItem("Finish homework");
        task.isDone = true;
        expect(task.isDone).toBe(true);
    });
});