import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MyTodosComponent } from './pages/my-todos/my-todos.component';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "my-todos",
        component: MyTodosComponent
    },
    {
        path: "edit-todo/:id",
        component: EditTodoComponent
    }
];
