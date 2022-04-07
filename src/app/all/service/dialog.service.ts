import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../component/pop-up/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(mes:string){
    return this.dialog.open(ConfirmDialogComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      position:{top:"50px"},
      data:{
        message:mes
      }
    })
  }
}
