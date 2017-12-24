import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { WebViewRoutingModule } from './web-view-routing.module';

import { WebViewComponent } from './web-view.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    WebViewRoutingModule
  ],
  declarations: [WebViewComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WebViewModule { }
