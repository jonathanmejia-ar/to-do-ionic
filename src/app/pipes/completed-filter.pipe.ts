import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {

  transform(tasks: Task[], completed: boolean = true): Task[] {
    return tasks.filter(tasksData => tasksData.completed === completed);
  }

}
