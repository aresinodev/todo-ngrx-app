import { Pipe, PipeTransform } from '@angular/core';
import { variousFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: variousFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
        break;

        case 'pending':
        return todos.filter(todo => !todo.completed);
        break;

      default:
        return todos;
        break;
    }
  }
}
