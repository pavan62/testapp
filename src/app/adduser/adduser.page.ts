import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {
arra=[{
  "name":"Rakshith u Rai","phone":"987654321","email":"RakshithRai@gmail.com","imageurl": "https://www.iiitd.ac.in/sites/default/files/public/faculty/rakeshc.jpg"},
  {
  "name":"Prasanna Kulal","phone":"9876546845","email":"prasannakulal45@gmail.com","imageurl": "https://avatars2.githubusercontent.com/u/32484352?s=460&u=8be777b9a92e3cb2e7b3bec12ef042b469ac6bfc&v=4"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
