import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { HomeService } from './home.service';
import { ScrollView, ScrollEventData } from "ui/scroll-view";
import { EventData } from "tns-core-modules/data/observable/observable";
import { ITopSalesBanner, IFlashSaleItem, IBestseller } from './models';
import { login, LoginResult } from "ui/dialogs";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  public topSalesBanners: ITopSalesBanner[];
  public bestsellers: IBestseller[];
  public flashSales: IFlashSaleItem[];

  @ViewChild("drawer") private drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;

  constructor(private homeService: HomeService) {}

  public ngOnInit(): void {
    this._sideDrawerTransition = new SlideInOnTopTransition();
    this.loadData();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  public onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }

  public onTap(args: EventData) {
    // using the unique id assigned via the view-model
    console.log(args.object.get("id"));
  }

  public onTapAuth() {
    const options = {
      title: "Login",
      message: "Mock login screen",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    };

    login(options);
  }

  public onScroll(args: ScrollEventData) {
      console.log("scrollX: " + args.scrollX + "; scrollY: " + args.scrollY);
  }

  public onScrollLoaded(args) {
      // scroll to specific position of the horizontal scroll list
      const scrollOffset = 330;
      (<ScrollView>args.object).scrollToHorizontalOffset(scrollOffset, true);
  }

  private loadData() {
    this.homeService.getTopSalesBanners()
      .subscribe(data => this.topSalesBanners = data);
    this.homeService.getBestsellers()
      .subscribe(data => this.bestsellers = data);
    this.homeService.getFlashSales()
      .subscribe(data => this.flashSales = data);
  }
}
