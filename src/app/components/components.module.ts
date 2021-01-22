import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
    declarations: [
        TasksComponent
    ],
    exports: [
        TasksComponent
    ],
    imports: [
        CommonModule,
        IonicModule
        , PipesModule
    ]
})
export class ComponentsModule { }
