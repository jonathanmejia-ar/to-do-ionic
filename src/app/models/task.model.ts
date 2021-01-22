import { ItemTask } from "./item-task.model";

export class Task {

    id: number;
    title: string;
    createdAt: Date;
    completed: boolean;
    completedAt: Date;
    itemList: ItemTask[];

    constructor(title: string) {
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
        this.id = new Date().getTime();
        this.itemList = [];

    }
}