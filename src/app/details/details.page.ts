import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
address;
  user: any;
  imageUrl;
  constructor(private  userService: UserService) { }

  ngOnInit() {
    this.user = this.userService;
    this.imageUrl=this.userService.getimage();
    this.address=this.userService.getaddr();
  }
}