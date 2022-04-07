import { Component, OnInit } from '@angular/core';
import {StaffServiceService} from '../../../service/staffService.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private staffService:StaffServiceService) {

  }

  ngOnInit() {
  }
  onTitle(){
    // this.staffService.title=this.staffService.title+
  }
}
