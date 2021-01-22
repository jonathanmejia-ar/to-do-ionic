import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemTask } from 'src/app/models/item-task.model';
import { Task } from 'src/app/models/task.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html'
})
export class AddPage implements OnInit {

  taskActive: Task;
  itemModel: '';

  constructor(private wishesService: WishesService,
    private activatedRoute: ActivatedRoute) {

    const taskId = this.activatedRoute.snapshot.paramMap.get('taskId');
    this.taskActive = this.wishesService.getTask(taskId);
  }

  ngOnInit() {
  }

  addItem() {
    if (this.itemModel.length === 0) {
      return;
    }
    const newItem = new ItemTask(this.itemModel);
    this.taskActive.itemList.push(newItem);
    this.itemModel = '';
    this.wishesService.saveStorage();
  }

  checkChange() {
    const pending = this.taskActive.itemList.filter(ItemsData => !ItemsData.completed).length;
    if (pending === 0) {
      this.taskActive.completedAt = new Date();
      this.taskActive.completed = true;
    } else {
      this.taskActive.completedAt = null;
      this.taskActive.completed = false;
    }
    this.wishesService.saveStorage();
  }

  deleteItem(index: number) {
    this.taskActive.itemList.splice(index, 1);
    this.wishesService.saveStorage();
  }

}
