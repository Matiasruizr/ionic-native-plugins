import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  fact: string = ''; 
  newTodo: string = '';
  todos: any[] = [];
  TODO_API: string = 'https://dummyjson.com/todos';
  TODO_LIMIT: number= 3;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // First call has been done using fetch API
    this.getFact();
    // Second call has been done using Angular HttpClient with the new subscribe syntax
    this.getTodos();
  }

  async getFact() {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      this.fact = data.fact;
    } catch (error) {
      console.error('Error loading cat fact', error);
    }
  }

  async getTodos() {
    this.http.get(`${this.TODO_API}?limit=${this.TODO_LIMIT}`).subscribe({
      next: (data) => {
       const response = data as { todos: any[] };
        this.todos = response.todos;
      },
      error: (error) => {
        console.error('Error loading todos', error);
      },
    });
  }

  async updateTodo(todo: any) {
    // Update only the completed attribute
    this.http
      .patch(`${this.TODO_API}/${todo.id}`, { completed: todo.completed })
      .subscribe({
        next: (data) => {
          const response = data as { todo: any };
          const index = this.todos.findIndex((t) => t.id === response.todo.id);
          this.todos[index] = response.todo;
        },
        error: (error) => {
          console.error('Error updating todo', error);
        },
      });
  }

  async deleteTodo(todo: any) {
    this.http.delete(`${this.TODO_API}/${todo.id}`).subscribe({
      next: () => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      },
      error: (error) => {
        console.error('Error deleting todo', error);
      },
    });
  }

  async addTodo() {
    console.log('Adding todo', this.newTodo)
    this.http
      .post(this.TODO_API, { todo: this.newTodo, completed: false })
      .subscribe({
        next: (data) => {
          const response = data as { todo: any };
          this.todos.unshift(response.todo);
          this.newTodo = '';
        },
        error: (error) => {
          this.todos.unshift({ id: Math.random(), todo: this.newTodo, completed: false });
          console.error('Error adding todo', error);
        },
          // Only for demo purposes, add todo anyway, beacuse the API need pro version to use post requests
      });
  }

}
