import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { NavigationMenuModule } from './navigation-menu/navigation-menu.module';
import { CacheService } from './services/cache.service';
import { HttpService } from './services/http.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NavigationMenuModule
    ],
    declarations: [],
    providers: [
      CacheService,
      HttpService
    ],
    exports: [
        NativeScriptUISideDrawerModule,
        NavigationMenuModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
