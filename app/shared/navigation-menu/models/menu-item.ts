export interface IMenuItem {
  label: string;
  column: number;
  iconFont: string;
  level: string;
  url: string;
  type: string;
  children: IMenuItem[];
}
