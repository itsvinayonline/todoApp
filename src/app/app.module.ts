import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'todoList', component: TodoComponent},
  {path: '**', redirectTo: '/login'}
];


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
