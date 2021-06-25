import { createReducer, on } from '@ngrx/store';

import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Robar el escudo del capitán América')
];
 
const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggleTodo, (state, { id }) => {

    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.editTodo, (state, { id, text }) => {

    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.toggleAll, (state, { completed }) => state.map(todo => ({
      ...todo,
      completed
    }))
  ),
  on(actions.deleteCompleted, (state) => state.filter(todo => !todo.completed))
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
