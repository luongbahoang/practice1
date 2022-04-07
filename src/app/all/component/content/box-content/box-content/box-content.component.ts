import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditStaffComponent} from '../../../pop-up/Staff/edit-staff/edit-staff.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {StaffServiceService} from '../../../../service/staffService.service';
import {DialogService} from '../../../../service/dialog.service';
import {StaffModel} from '../../../../model/StaffModel';
import {NotificationService} from '../../../../service/notification.service';


@Component({
  selector: 'app-box-content',
  templateUrl: './box-content.component.html',
  styleUrls: ['./box-content.component.scss']
})

export class BoxContentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'code', 'start', 'phoneNumber', 'address', 'status', 'action'];
  collection = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  hide = true;
  staffs=[];
  dataSource: any;
  itemInPage=[3,6,9];

  page: number=3;
  p: number=1;
  constructor(private dialog: MatDialog,
              private staffService: StaffServiceService,
              private dialogService:DialogService,
              private notification:NotificationService) {
  }


  ngOnInit() {

    this.getAllStaff();
    this.staffService.active.subscribe(()=>
      this.getAllStaff())
  }

  editStaff(staff:StaffModel) {
    this.staffService.staff.next(staff)
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    this.dialog.open(EditStaffComponent, config);
  }
  deleteStaff(id:number){
  this.dialogService.openConfirmDialog(`Bạn có chắc muốn xóa nhân viên có id = ${id}`).afterClosed().
  subscribe(
    res=>{
      if (res){
        this.staffService.deleteStaff(id).subscribe(()=>{
         this.notification.warn(":: Xóa nhân viên thành công")
          this.getAllStaff()
        })
      }
    }
  )

  }
  ngDoCheck(): void {
    this.hide = this.staffService.hide;
  }
  getAllStaff() {
    this.staffService.getAllStaff().subscribe(data => {
      this.staffService.search.subscribe(search=>{
        this.staffs=[]
        data.forEach(item=>{
          if(item.userName.indexOf(search.trim().toLowerCase())!=-1)
          return this.staffs.push(item)
        })
      })
        // this.staffs = data;
        this.dataSource = new MatTableDataSource<StaffModel>(this.staffs);
        this.dataSource.paginator = this.paginator;
      }
    );
  }


}
