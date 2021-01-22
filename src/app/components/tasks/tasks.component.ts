import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {


  @ViewChild(IonList) task: IonList;
  @Input() completed = true;

  constructor(public wishesService: WishesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() { }

  selectedTask(task: Task) {
    if (this.completed === true) {
      this.router.navigateByUrl(`/tabs/tab2/add/${task.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${task.id}`);
    }
  }

  deleteTask(task: Task) {
    this.wishesService.deleteTask(task);
  }

  async editTask(task: Task) {
    const alert = await this.alertCtrl.create({
      header: 'Edit Task',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: task.title,
          placeholder: 'Task name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
            this.task.closeSlidingItems();
          }

        },
        {
          text: 'Update',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            task.title = data.title;

            this.wishesService.saveStorage();
            this.task.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}
