import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required])
  })
  submitData() {

  }

  get name(){
    return this.profileForm.get('name')
  }
  get password(){
    return this.profileForm.get('password')
  }
  get email(){
    return this.profileForm.get('email')
  }
}
