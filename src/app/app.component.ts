import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tutorial';
  username: string = ""
  count: number = 0;
  handleIncrement() {
    this.count += 1
  }
  handleDecrement() {
    this.count -= 1
  }
  handleReset() {
    this.count = 0
  }
  handleCounter(val: string) {
    if (val == "minus") {
      this.count > 0 ? this.count -= 1 : 0;
    } else if (val == "plus") {
      this.count += 1
    } else {
      this.count = 0
    }
  }
  getUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value
  }
  setUsername() {
    this.username = "Peter"
  }
  getUserNameWTemplate(val: string) {
    console.log(this.username)
  }

  display: boolean = false;
  toggle() {
    this.display = !this.display
  }

  color: string = 'black';
  handleColor(val: string) {
    this.color = val;
  }

  users = ['Swe', 'Ruban', 'Django']
  students = [{ name: 'Swe', age: 26 }, { name: 'Ruban', age: 28 }, { name: 'Django', age: 6 }]

  getName(name: string) {
    console.log(name)
  }

  //event
  handleEvent(event: Event) {
    console.log("function called" + event.type)
    console.log("function called" + (event.target as HTMLInputElement).value)
  }
  //signal
  a1 = 100;
  a2 = signal(100);

  constructor() {
    effect(() => {
      console.log(this.a1)
      console.log(this.a2())
    }
    )
  }
  updateValue() {
    this.a1 = 200;
    this.a2.set(200);
  }

  //types with signal
  a3 = signal<number | string>(10);
  a4:WritableSignal<number|string|boolean> = signal(10)
  
  updateType() {
    this.a3.set("swe")
    this.a4.set("swesh")
    this.a2.update(val=>val+1)
  }

  //computed signal - read only
  a5:Signal<number> = computed(()=>20)
  num1=signal(10);
  num2 = signal(30);
  sum = computed(()=>this.num1()+this.num2())
  updateComp() {
    console.log(this.sum()) //40
    this.num1.set(100)
    console.log(this.sum())//130 ----in normal signal, it remains 40
  }
}
