
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
