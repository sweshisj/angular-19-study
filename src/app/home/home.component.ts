import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){

  }
  goToProfile(){
    this.router.navigate(['profile'], {queryParams:{btnName:'Ruban'}})
  }
  users=[{
    id:1,
    name:'Sweshi',
    age: 26
  },
  {
    id:2,
    name:'Ruban',
    age: 28
  },
  {
    id:3,
    name:'Django',
    age: 4
  }]
  
}
