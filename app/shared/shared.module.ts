import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { MyDrawerItemComponent } from "./my-drawer-item/my-drawer-item.component";
import { MyDrawerComponent } from "./my-drawer/my-drawer.component";
import { NavigationMenuModule } from './navigation-menu/navigation-menu.module';
import { CacheService } from './services/cache.service';
import { HttpService } from './services/http.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NavigationMenuModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent
    ],
    providers: [
      CacheService,
      HttpService
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule,
        NavigationMenuModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
