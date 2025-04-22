import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() getData = new EventEmitter;
  data = ["swe", "ruban"]
  passData(){
    this.getData.emit(this.data)
  }
}
