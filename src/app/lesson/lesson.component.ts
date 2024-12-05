import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-lesson',
  imports: [FormsModule, CommonModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  public arrValue: User[] = [];
  public nameForm: string = '';
  public passwordForm: string = '';
  public emailForm: string = '';
  public index!: number;
  public checkButtonBoolean: boolean = true;
  public checkButtonBooleanDelete: boolean = false;

  addUser(): void{
    let obj: User = {
      login: this.nameForm,
      password: this.passwordForm,
      email: this.emailForm
    }
    this.arrValue.push(obj);
    this.nameForm = '';
    this.passwordForm = '';
    this.emailForm = '';
  }
  deleteUser(i: number): void{
    this.arrValue.splice(i, 1);
  }
  editUser(i: number): void{
    this.nameForm = this.arrValue[i].login;
    this.passwordForm = this.arrValue[i].password;
    this.emailForm = this.arrValue[i].email;
    this.index = i;
    this.checkButtonBoolean = false;
    this.checkButtonBooleanDelete = true;
  }
  saveEditUser(): void{
    let obj: User = {
      login: this.nameForm,
      password: this.passwordForm,
      email: this.emailForm
    }
    this.arrValue[this.index] = obj;
    this.nameForm = '';
    this.passwordForm = '';
    this.emailForm = '';
    this.checkButtonBoolean = true;
    this.checkButtonBooleanDelete = false;
  }

}
