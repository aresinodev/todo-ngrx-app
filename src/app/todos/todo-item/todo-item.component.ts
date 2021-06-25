import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('textBoxInput') textBoxInput!: ElementRef;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggleTodo({ id: this.todo.id }));
    });
  }

  edit(): void {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.textBoxInput.nativeElement.select();
    }, 1);
  }

  endEdition(): void {
    this.editing = false;

    if(this.txtInput.valid && this.txtInput.value !== this.todo.text) {
      this.store.dispatch(actions.editTodo({  id: this.todo.id, text: this.txtInput.value }));
    }
  }

  delete(): void {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id}));
  }
}
