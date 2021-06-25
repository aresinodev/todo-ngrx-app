import { createAction, props } from '@ngrx/store';

export type variousFilters = "all" | "completed" | "pending";

export const setFilter = createAction('[FILTER] Set filter', props<{ filter: variousFilters }>());