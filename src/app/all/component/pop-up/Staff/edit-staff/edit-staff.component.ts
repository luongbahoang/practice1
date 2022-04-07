import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

import {StaffServiceService} from '../../../../service/staffService.service';
import {StaffModel} from '../../../../model/StaffModel';
import {DatePipe} from '@angular/common';
import {NotificationService} from '../../../../service/notification.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  staff:StaffModel;
  formSubmit: FormGroup;
  genders=['None','Nam','Nữ'];
  types=[{key: "intern",value:'Thực tập sinh'},{key:"partner",value:'Cộng tác viên'},{key:'offical',value:'Nhân viên chính thức'}];
  statuses=[{key:true,value:'Đang làm việc'},{key:false,value:'Nghỉ việc'}]
  oldStaff:any;
  constructor(private dialogRef: MatDialogRef<EditStaffComponent>,
              private staffService:StaffServiceService,
              private datePipe:DatePipe,
              private notification:NotificationService) {

  }

  ngOnInit(): void {
    this.staffService.staff.subscribe(data=> {
      this.oldStaff = data
    }
  )

    this.formSubmit = new FormGroup({
      fullName: new FormControl(this.oldStaff.fullName),
      personalEmail: new FormControl(this.oldStaff.email),
      phoneNumber: new FormControl(this.oldStaff.phoneNumber),
      typeContract: new FormControl(this.oldStaff.typeContract),
      code: new FormControl(this.oldStaff.code),
      gender: new FormControl(this.oldStaff.gender),
      cmnd: new FormControl(this.oldStaff.cmnd),
      town: new FormControl(this.oldStaff.town),
      country: new FormControl(this.oldStaff.country),
      religion: new FormControl(this.oldStaff.religion),
      year: new FormControl(this.oldStaff.year),
      birthplace: new FormControl(this.oldStaff.birthplace),
      marital_status: new FormControl(this.oldStaff.marital_status),
      academic_standard: new FormControl(this.oldStaff.academic_standard),
      education_level: new FormControl(this.oldStaff.education_level),
      ethnic: new FormControl(this.oldStaff.ethnic),
      status: new FormControl(this.oldStaff.status),
    });
  }

  onSubmit() {
     this.staff = new StaffModel(
      this.formSubmit.value.fullName, this.formSubmit.value.userName,
       this.formSubmit.value.password  ,this.formSubmit.value.personalEmail,
      this.formSubmit.value.phoneNumber, this.formSubmit.value.typeContract,
      this.formSubmit.value.code, this.formSubmit.value.gender,
      this.formSubmit.value.address, this.formSubmit.value.cmnd,
      this.formSubmit.value.town, this.formSubmit.value.hireDate,
      this.formSubmit.value.country, this.formSubmit.value.religion,
       this.datePipe.transform(this.formSubmit.value.year, 'yyyy-MM-dd'),
       this.formSubmit.value.birthplace, this.formSubmit.value.marital_status,
       this.formSubmit.value.academic_standard, this.formSubmit.value.education_level,
       this.formSubmit.value.ethnic,'','','', this.formSubmit.value.status)

  this.staffService.editStaff(this.oldStaff.id,this.staff).subscribe(()=>{
    this.notification.success(":: Cập nhật thông tin nhân viên thành công")
    this.onClose();
    this.staffService.active.next("")
  })
  }

  onClose() {
    this.dialogRef.close();
  }
}
