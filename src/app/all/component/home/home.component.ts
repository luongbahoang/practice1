import {Component, Input, OnInit} from '@angular/core';
import {TreeviewItem,TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


constructor() {


  }

  ngOnInit(): void {
    this.items = this.getItems([this.simpleItems, this.simpleItems2]);
    }
  getItems(parentChildObj) {
    let itemsArray = [];
    parentChildObj.forEach(set => {
      itemsArray.push(new TreeviewItem(set))

    });
    return itemsArray;
  }
  items: any;

  simpleItems = {
    text: 'parent-1',
    value: 'p1',
    checked: false,
    collapsed: false,
    children: [
      {
        text: 'child-1',
        value: 'c1'
      }, {
        text: 'child-2',
        value: 'c2',
        children: [
          {
            text: 'child-1-2',
            value: 'c12'
          },
          {
            text: 'child-1-2',
            value: 'c12',
            disabled: true,
            collapsed: true,
            checked: false,
            children: [
              {
                text: 'child-1-2',
                value: 'c12'
              },
              {
                text: 'child-1-2',
                value: 'c12'
              }
            ]
          }
        ]
      },
    ]
  };

  simpleItems2 = {
    text: 'parent-2',
    value: 'p2',
    collapsed: false,
    checked: true,
    children: [
      {
        text: 'child-1',
        value: 'c1'
      }, {
        text: 'child-2',
        value: 'c2',
        children: [
          {
            text: 'child-1-2',
            value: 'c12'
          },
          {
            text: 'child-1-2',
            value: 'c12',
            disabled: false,
            collapsed: false,
            checked: false,
            children: [
              {
                text: 'child-1-2',
                value: 'c12'
              },
              {
                text: 'child-1-2',
                value: 'c12'
              }
            ]
          }
        ]
      },
    ]
  };

config ={
  hasAllCheckBox: false,
  hasFilter: true,
  hasCollapseExpand: false,
  decoupleChildFromParent: false,
  maxHeight: 500,
  hasDivider:true
}
  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];
}
