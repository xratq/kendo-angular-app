import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from "@angular/forms";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class Product {
  public ProductID: number;
  public ProductName = "";
  public Discontinued? = false;
  public UnitsInStock?: number;
  public UnitPrice = 0;
  public Category = {
    CategoryID: 0,
    CategoryName: "",
  };
}
