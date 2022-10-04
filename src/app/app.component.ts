import { Component } from '@angular/core';
import { Product } from "./app.module"
import { Customers } from "./customers";

@Component({
  selector: 'app-root',
  template: `
    <kendo-grid
      [kendoGridBinding]="gridData"
      [pageSize]="10"
      [pageable]="true"
      [sortable]="true"
      [filterable]="true"
      [groupable]="true"
      [height]="420"
    >
      <kendo-grid-column field="CompanyName" [width]="140"></kendo-grid-column>
      <kendo-grid-column field="ContactName" [width]="120"></kendo-grid-column>
      <kendo-grid-column field="City" [width]="100"></kendo-grid-column>
      <kendo-grid-column field="ContactTitle" [width]="130"></kendo-grid-column>
    </kendo-grid>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-angular-app';
  public gridData: unknown[] = Customers;
  // public gridData: Product[] = [
  //   {
  //       ProductID: 1,
  //       ProductName: 'Chai',
  //       UnitPrice: 18,
  //       Category: {
  //           CategoryID: 1,
  //           CategoryName: 'Beverages'
  //       }
// ];
}
