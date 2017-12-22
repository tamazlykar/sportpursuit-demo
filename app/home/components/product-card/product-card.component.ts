import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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

  public onTap() {}
}
