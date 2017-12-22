import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { TopSalesBannersComponent } from './components/top-sales-banners';
import { ProductCardComponent } from './components/product-card';
import { BestsellersComponent } from './components/bestsellers';
import { FlashSalesComponent } from './components/flash-sales';

import { HomeService } from './home.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    TopSalesBannersComponent,
    ProductCardComponent,
    BestsellersComponent,
    FlashSalesComponent
  ],
  providers: [HomeService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
