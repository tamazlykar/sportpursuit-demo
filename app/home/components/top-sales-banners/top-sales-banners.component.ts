import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ITopSalesBanner } from '../../models';

@Component({
  selector: "TopSalesBanners",
  moduleId: module.id,
  templateUrl: "./top-sales-banners.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopSalesBannersComponent {
  @Input() public banners: ITopSalesBanner[];
}
