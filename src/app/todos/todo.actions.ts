import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[TODO] create todo', props<{ text: string }>());
export const toggleTodo = createAction('[TODO] toggle todo', props<{ id: number }>());
export const editTodo = createAction('[TODO] edit todo', props<{ id: number, text: string }>());
export const deleteTodo = createAction('[TODO] delete todo', props<{ id: number }>());
export const toggleAll = createAction('[TODO] toggle all todo', props<{ completed: boolean }>());
export const deleteCompleted = createAction('[TODO] delete completed todos');
