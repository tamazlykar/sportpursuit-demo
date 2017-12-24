import { Component, OnInit } from '@angular/core';
import { NavigationMenuService } from './navigation-menu.service';
import { IMenuItem } from './models/menu-item';

@Component({
  selector: 'NavigationMenu',
  moduleId: module.id,
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})

export class NavigationMenuComponent implements OnInit {
  private menuItems: IMenuItem[];

  constructor(private menuService: NavigationMenuService) { }

  public ngOnInit() {
    this.menuService.getMenu()
      .subscribe(data => this.menuItems = data);
  }
}
