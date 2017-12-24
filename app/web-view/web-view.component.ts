import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { URL } from '../shared/config';

@Component({
  selector: 'WebViewPage',
  moduleId: module.id,
  templateUrl: './web-view.component.html'
})
export class WebViewComponent implements OnInit {
  public url = URL;
  public link: string = '';

  constructor(private pageRoute: PageRoute, private routerExtensions: RouterExtensions) {}

  public ngOnInit() {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach(params => this.link = params['url']);

  }

  public onNavBtnTap() {
    this.routerExtensions.backToPreviousPage();
  }
}
