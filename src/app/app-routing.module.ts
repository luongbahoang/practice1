import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './all/component/content/content.component';
import {EditStaffComponent} from './all/component/pop-up/Staff/edit-staff/edit-staff.component';
import {NewStaffComponent} from './all/component/pop-up/Staff/new-staff/new-staff.component';
import {BoxContentComponent} from './all/component/content/box-content/box-content/box-content.component';
import {GeneralComponent} from './all/component/content/general/general.component';
import {HomeComponent} from './all/component/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nhansu', component: ContentComponent,children:[
    {path:"tongquan",component:GeneralComponent}]
  },
  {path: 'new', component: NewStaffComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
