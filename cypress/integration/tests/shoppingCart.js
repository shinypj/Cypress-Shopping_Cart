import { shoppingCart } from "../page-helpers/shoppingCart-helper";

describe("Add Product to Cart", () => {
  const storePage = new shoppingCart();

  it("Verify the Product Total Price in Cart", () => {
    storePage.visit();
    storePage.searchProduct();
    storePage.sortProduct();
    storePage.selectProduct();
    storePage.changeProductQuantity();
    storePage.changeProductSize();
    storePage.changeProductColor();
    storePage.addToCart();
    storePage.proceedToCheckout();
    storePage.assertProductPrice();
  });
});
