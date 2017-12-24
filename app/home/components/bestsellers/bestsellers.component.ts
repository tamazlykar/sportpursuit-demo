import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from "@angular/router";
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
  private link = 'catalog/product/view/id/';

  constructor(private router: Router) {}

  public onTap(bestseller: IBestseller) {
    this.router.navigate(['/web-view', this.link + bestseller.entity_id]);
  }
}
