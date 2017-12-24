import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { HomeService } from './home.service';
import { ITopSalesBanner, IFlashSaleItem, IBestseller } from './models';
import { login, LoginResult } from "ui/dialogs";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable//forkJoin';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public topSalesBanners: ITopSalesBanner[];
  public bestsellers: IBestseller[];
  public flashSales: IFlashSaleItem[];
  public isLoading = true;

  @ViewChild("drawer") private drawerComponent: RadSideDrawerComponent;

  constructor(private homeService: HomeService) {}

  public ngOnInit(): void {
    this.loadData();
  }

  public onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
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

  private loadData() {
    const tasks = [];
    tasks.push(this.homeService.getTopSalesBanners());
    tasks.push(this.homeService.getBestsellers());
    tasks.push(this.homeService.getFlashSales());

    Observable.forkJoin(...tasks)
      .subscribe((data: Array<any>) => {
        this.topSalesBanners = data[0];
        this.bestsellers = data[1];
        this.flashSales = data[2];
        this.isLoading = false;
      });
  }

  // private loadData() {
  //   const tasks = [];
  //   this.homeService.getTopSalesBanners()
  //     .subscribe(data => this.topSalesBanners = data);
  //   this.homeService.getBestsellers()
  //     .subscribe(data => this.bestsellers = data);
  //   this.homeService.getFlashSales()
  //     .subscribe(data => this.flashSales = data);
  // }
}
