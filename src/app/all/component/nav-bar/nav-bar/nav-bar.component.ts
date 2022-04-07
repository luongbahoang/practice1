import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {StaffServiceService} from '../../../service/staffService.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  title!: string;
  public values = [];


  constructor(private staffService: StaffServiceService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.route.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let cas = e.url.split('/');
        this.mapping(cas);
      }
    });
  }

  mapping(objs) {
    this.values=[]
    const uniqueSet = new Set(objs);
    const backToArray = [...uniqueSet];
    return backToArray.forEach(item => {
      if (item === '') {
        this.values.push({linkm: '/home', label: 'Trang chủ'});
      }
      if (item === 'nhansu') {
        this.values.push({linkm: '/nhansu', label: 'Nhân sự'});
      }
      if (item === 'tongquan') {
        this.values.push({linkm: '/nhansu/tongquan', label: 'Tổng quan'});
      }
    });
  }




}
