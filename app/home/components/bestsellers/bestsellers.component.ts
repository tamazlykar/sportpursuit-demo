import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBestseller } from '../../models';

@Component({
  selector: 'Bestsellers',
  moduleId: module.id,
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestsellersComponent {
  @Input() public bestsellers: IBestseller[];
}
