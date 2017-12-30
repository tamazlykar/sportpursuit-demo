import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { WebView } from "ui/web-view";
import "rxjs/add/operator/switchMap";

import { URL } from '../shared/config';

@Component({
  selector: 'WebViewPage',
  moduleId: module.id,
  templateUrl: './web-view.component.html'
})
export class WebViewComponent implements OnInit, AfterViewInit {
  public url = URL;
  public link: string = '';
  @ViewChild("myWebView") public webViewRef: ElementRef;

  constructor(private pageRoute: PageRoute, private routerExtensions: RouterExtensions) {}

  public ngOnInit() {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach(params => this.link = params['url']);
  }

  public ngAfterViewInit() {
    const webview: WebView = this.webViewRef.nativeElement;

    webview.on(WebView.loadStartedEvent, () => {
      // "setDomStorageEnabled" needs to be set for correct website loading
      // Othervise you will get Errors and some js scripts won't be executed inside WebView
      if (webview.android) {
        webview.android.getSettings().setDomStorageEnabled(true);
      }
    });
}

  public onNavBtnTap() {
    this.routerExtensions.backToPreviousPage();
  }
}
