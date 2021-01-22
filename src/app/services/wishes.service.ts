import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  taskList: Task[] = [];

  constructor() {

    this.loadStorage();
  }

  createTask(title: string) {
    const newTask = new Task(title);
    this.taskList.push(newTask);
    this.saveStorage();
    return newTask.id;
  }

  getTask(taskId: string | number) {
    let id = Number(taskId);
    return this.taskList.find(task => task.id === id);
  }

  deleteTask(task: Task) {
    this.taskList = this.taskList.filter(taskData => taskData.id !== task.id);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.taskList));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.taskList = JSON.parse(localStorage.getItem('data'));
    }
  }

}
