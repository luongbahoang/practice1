import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {StaffServiceService} from '../../../../service/staffService.service';
import {DatePipe} from '@angular/common';
import {StaffModel} from '../../../../model/StaffModel';
import {NotificationService} from '../../../../service/notification.service';

@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {
  genders = ['None', 'Nam', 'Nữ'];
  types = [{key: 'intern', value: 'Thực tập sinh'}, {key: 'partner', value: 'Cộng tác viên'}, {
    key: 'offical',
    value: 'Nhân viên chính thức'
  }];
  positions = [{key: 'FE', value: 'FE'}, {key: 'BE', value: 'BE'}, {key: 'CTO', value: 'CTO'}];
  formSubmit!: FormGroup;
  newStaff!: StaffModel;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<NewStaffComponent>,
              private staffService: StaffServiceService,
              private datePipe: DatePipe,
              private notification:NotificationService) {
  }

  ngOnInit(): void {
    this.formSubmit = this.fb.group({
      code: '',
      fullName: '',
      gender: 'None',
      userName: '',
      password: '',
      position: '',
      type: '',
      hireDate: '',
      comment: ''
    });
  }
select(item:any){
  console.log("aaaaaaaaaa",item);
}
  onSubmit() {
    this.newStaff = new StaffModel(
      this.formSubmit.value.fullName, this.formSubmit.value.userName,
      this.formSubmit.value.password, '', '',
      this.formSubmit.value.type,
      this.formSubmit.value.code,
      this.formSubmit.value.gender, '', '', '',
      this.datePipe.transform(this.formSubmit.value.hireDate, 'yyyy-MM-dd'),
      '', '', '', '', '',
      '', '', '',
      this.formSubmit.value.department,
      this.formSubmit.value.comment,
      this.formSubmit.value.position,true);

     this.staffService.createStaff(this.newStaff).subscribe(() => {
      this.notification.success(":: Tạo mới nhân viên thành công!!!")
      this.onClose()
      this.staffService.active.next('');
    });
  }

  onClear() {
    this.formSubmit = this.fb.group({
      code: '',
      fullName: '',
      gender: 'None',
      userName: '',
      department: '',
      position: '',
      type: '',
      hireDate: '',
      comment: ''
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
