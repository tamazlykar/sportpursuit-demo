import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { MyDrawerItemComponent } from "./my-drawer-item/my-drawer-item.component";
import { MyDrawerComponent } from "./my-drawer/my-drawer.component";
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NavigationMenuService } from './navigation-menu/navigation-menu.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent,
        NavigationMenuComponent
    ],
    providers: [],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule,
        NavigationMenuComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
