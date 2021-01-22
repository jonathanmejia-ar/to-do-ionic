import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html'
})
export class Tab1Page {

  constructor(public wishesService: WishesService,
    private alertController: AlertController,
    private router: Router) {
  }

  async addTask() {
    const alert = await this.alertController.create({
      header: 'New Task',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Task Name'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Create',
        handler: (data) => {
          if (data.title.length !== 0) {
            console.log(data.title);
            const taskId = this.wishesService.createTask(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${taskId}`);
          } else {
            return;
          }
        }
      }]
    });

    alert.present();
  }

}
