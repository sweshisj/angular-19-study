import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, UserComponent, LoginComponent, CommonModule, CurrencyConvertorPipe, LifeCycleComponent],
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

  users = ['Swe', 'Ruban', 'Django', 'Dhyaan', 'Dheera']
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

  // constructor() {
  //   effect(() => {
  //     console.log(this.a1)
  //     console.log(this.a2())
  //   }
  //   )
  // }
  updateValue() {
    this.a1 = 200;
    this.a2.set(200);
  }

  //types with signal
  a3 = signal<number | string>(10);
  a4: WritableSignal<number | string | boolean> = signal(10)

  updateType() {
    this.a3.set("swe")
    this.a4.set("swesh")
    this.a2.update(val => val + 1)
  }

  //computed signal - read only
  a5: Signal<number> = computed(() => 20)
  num1 = signal(10);
  num2 = signal(30);
  sum = computed(() => this.num1() + this.num2())
  updateComp() {
    console.log(this.sum()) //40
    this.num1.set(100)
    console.log(this.sum())//130 ----in normal signal, it remains 40
  }

  //effect
  effectname = signal("sweshika")
  constructor() {
    effect(() => {

    })
  }

  //two way binding
  twdata: string = ""

  //todo list
  task = ""
  taskList: { id: number, name: string }[] = []
  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, name: this.task })
    this.task = ""
  }
  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id)
  }

  //dynamic styling
  dynamicColor: string = "green"
  dynamicFont: string = "30px"

  //child->parent
  data: string[] | undefined;
  handleData(d: any) {
    console.log(d)
    this.data = d;
  }

  //pipe
  lc = "sweshika"
  uc = "SWESHIKA"
  today = new Date();
  amount = 10
}
