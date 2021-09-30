export class shoppingCart {
  constructor() {
    this.url = "http://automationpractice.com/index.php";
  }

  //Web Elements
  static searchBox = "#search_query_top";
  static searchIcon = "button.btn.btn-default.button-search";
  static productSort = "#selectProductSort";
  static productName = "a.product-name";
  static productQuantity = "i.icon-plus";
  static productSize = "#group_1";
  static productColor = "#color_15";
  static addToCartButton = "#add_to_cart";
  static proceedToCheckoutButton = "a.btn.btn-default.button.button-medium";
  static productTotalPrice = "#total_price_container";

  //Open URL 'http://automationpractice.com/index.php'
  visit() {
    cy.visit(this.url);
    cy.viewport(1920, 1080);
  }

  //Search by Product Name 'Printed Summer Dress'
  searchProduct() {
    cy.get(shoppingCart.searchBox).should("be.visible").click();

    cy.fixture("shoppingCartDetails").then((productName) => {
      cy.get(shoppingCart.searchBox).type(productName.searchInput);
    });

    cy.get(shoppingCart.searchIcon).click();
  }

  //Sort by Lowest Price
  sortProduct() {
    cy.fixture("shoppingCartDetails").then((sort) => {
      cy.get(shoppingCart.productSort)
        .should("be.visible")
        .select(sort.sortByLowPrice);
    });
  }

  //Select Cheapest Product
  selectProduct() {
    cy.get(shoppingCart.productName).eq(0).click();
  }

  //Change Product Quantity from 1 to 2
  changeProductQuantity() {
    cy.get(shoppingCart.productQuantity).should("be.visible").click();
  }

  //Change Product Size from S to M
  changeProductSize() {
    cy.fixture("shoppingCartDetails").then((size) => {
      cy.get(shoppingCart.productSize).select(size.productSizeMedium);
    });
  }

  //Change Product Colour from Yellow to Green
  changeProductColor() {
    cy.get(shoppingCart.productColor).click();
  }

  //Add to Cart
  addToCart() {
    cy.get(shoppingCart.addToCartButton).click();
  }

  //Proceed to Checkout
  proceedToCheckout() {
    cy.get(shoppingCart.proceedToCheckoutButton).should("be.visible").click();
  }

  //Verify Product Total Price is $34.80
  assertProductPrice() {
    cy.fixture("shoppingCartDetails").then((totalPrice) => {
      cy.get(shoppingCart.productTotalPrice)
        .should("be.visible")
        .should("contain", totalPrice.productValue);
    });
  }
}
