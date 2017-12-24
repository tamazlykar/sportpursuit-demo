import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NavigationMenuComponent } from './navigation-menu.component';
import { NavigationMenuService } from './navigation-menu.service';
import { MenuItemComponent } from './components/menu-item';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
    NavigationMenuComponent,
    MenuItemComponent
  ],
  exports: [
    NavigationMenuComponent
  ],
  providers: [
    NavigationMenuService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class NavigationMenuModule { }
