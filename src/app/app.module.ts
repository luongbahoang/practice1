import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {SharedModule} from './all/sharedComponent/sharedModule.module';
import {SideNavComponent} from './all/component/side-nav/side-nav/side-nav.component';
import {NavBarComponent} from './all/component/nav-bar/nav-bar/nav-bar.component';
import {ContentComponent} from './all/component/content/content.component';
import {HeaderContentComponent} from './all/component/content/header-content/header-content/header-content.component';
import {BoxContentComponent} from './all/component/content/box-content/box-content/box-content.component';


import {StaffServiceService} from './all/service/staffService.service';
import {MatTabsModule} from '@angular/material/tabs';
import {EditStaffComponent} from './all/component/pop-up/Staff/edit-staff/edit-staff.component';
import {NewStaffComponent} from './all/component/pop-up/Staff/new-staff/new-staff.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { GeneralComponent } from './all/component/content/general/general.component';
import { HomeComponent } from './all/component/home/home.component';
import { HighlightDirective } from './all/directive/highlight.directive';
import { StructureDirective } from './all/directive/structure.directive';
import {DatePipe} from '@angular/common';
import { ConfirmDialogComponent } from './all/component/pop-up/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {TreeviewModule} from 'ngx-treeview';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavBarComponent,
    ContentComponent,
    HeaderContentComponent,
    BoxContentComponent,

    EditStaffComponent,
    NewStaffComponent,
    GeneralComponent,
    HomeComponent,
    HighlightDirective,
    StructureDirective,
    ConfirmDialogComponent


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        MatTabsModule,
        MatDividerModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
      NgxPaginationModule,
      TreeviewModule.forRoot()

    ],
  providers: [StaffServiceService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class AppModule {
}
