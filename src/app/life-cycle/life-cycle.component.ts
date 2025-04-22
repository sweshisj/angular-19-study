import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent {
  constructor() {
    console.log("constructor - creation phase")
  }
  ngOnInit() {
    console.log("ngoninit - runs once after angular has initialized all the component's inputs")
  }
  ngOnDestroy() {
    console.log("destroy - runs once before the component is destroyed")
  }
  ngOnChanges() {
    console.log("ng on change - runs for every changes")
  }
}
