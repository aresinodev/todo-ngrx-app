import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";

import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filter/filter.reducer";
import { variousFilters } from "./filter/filter.actions";

export interface AppState {
    todos: Todo[],
    filter: variousFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}