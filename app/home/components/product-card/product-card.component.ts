import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";
import { ITopSalesBanner, IFlashSaleItem } from '../../models';

@Component({
  selector: 'ProductCard',
  moduleId: module.id,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductCardComponent {
  @Input() public product: ITopSalesBanner | IFlashSaleItem;
  @Input() public isStretched: boolean = false;
  @Input() public height: number = 180;
  @Input() public width: number = 250;

  constructor(private router: Router) {}

  public onTap() {
    this.router.navigate(['/web-view', this.product.webUrl]);
  }
}
