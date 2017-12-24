import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as utilsModule from "utils/utils";
import { IMenuItem } from '../../models/menu-item';
import { FontAwesome } from '../../../font-awesome';
import { URL } from '../../../config';

@Component({
  selector: 'MenuItem',
  moduleId: module.id,
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() public item: IMenuItem;
  @Input() public isFirstLevel = true;
  public childrenCollapsed = true;

  public hasChildElements() {
    return this.item.children.length > 0;
  }

  public hasIcon() {
    return this.item.iconFont.length > 0;
  }

  public onTap() {
    if (this.hasChildElements()) {
      this.childrenCollapsed = !this.childrenCollapsed;
    } else {
      if (this.item.url.length > 0) {
        utilsModule.openUrl(URL + this.item.url);
      }
    }
  }

  public getIconCode(): string {
    return String.fromCharCode(FontAwesome.getHexCode(this.item.iconFont));
  }
}
