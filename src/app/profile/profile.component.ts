import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName: string | null = ""
  btnName: string | null = ""
  routeName: string | null = ""
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('name')
    this.route.queryParams.subscribe(params => {
      this.btnName = params['btnName']
    })
    this.route.data.subscribe(params=>{
      this.routeName = params['routeName']
    })

  }
}
