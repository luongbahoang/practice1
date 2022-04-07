import {Component, OnInit} from '@angular/core';
import {StaffServiceService} from '../../../../service/staffService.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditStaffComponent} from '../../../pop-up/Staff/edit-staff/edit-staff.component';
import {NewStaffComponent} from '../../../pop-up/Staff/new-staff/new-staff.component';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit {
  hide = true;
  searchKey="";
  constructor(private staffService: StaffServiceService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  toggle() {
    this.hide = !this.hide;
    this.staffService.hide = !this.staffService.hide;
  }
  createStaff(){
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    this.dialog.open(NewStaffComponent, config);
  }
  applyFilter(){
    this.staffService.search.next(this.searchKey)
  }
  onSearchClear(){
    this.searchKey="";
    this.staffService.search.next(this.searchKey)
  }

}
