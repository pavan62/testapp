import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  user: any;
imageUrl;
  constructor(private  userService: UserService) { }

  ngOnInit() {
    this.user = this.userService;
    this.imageUrl=this.userService.getimage();
  }
  hi(){}
}