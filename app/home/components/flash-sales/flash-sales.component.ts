import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFlashSaleItem } from '../../models';

@Component({
  selector: 'FlashSales',
  moduleId: module.id,
  templateUrl: 'flash-sales.component.html',
  styleUrls: ['./flash-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashSalesComponent {
  @Input() public sales: IFlashSaleItem[];
}
