import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class RegistrationComponent {

  users: any[] = [];
  model: any = {};
  confirmPassword = '';
  editIndex: number | null = null;

  onSubmit() {
    if (this.model.password !== this.confirmPassword) return;

    if (this.editIndex === null) {
      this.users.push({ ...this.model });
    } else {
      this.users[this.editIndex] = { ...this.model };
      this.editIndex = null;
    }

    this.model = {};
    this.confirmPassword = '';
  }

  editUser(index: number) {
    this.model = { ...this.users[index] };
    this.confirmPassword = this.model.password;
    this.editIndex = index;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
