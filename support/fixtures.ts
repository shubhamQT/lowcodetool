import { test as base, expect } from "@playwright/test";
import { CartPage } from "../pageobjects/CartPage";
import { CommonPage } from "../pageobjects/CommonPage";
import { HomePage } from "../pageobjects/HomePage";
import { ProductdetailPage } from "../pageobjects/ProductdetailPage";
import { SearchdetailsPage } from "../pageobjects/SearchdetailsPage";

type AppFixtures = {
  cartPage: CartPage;
  commonPage: CommonPage;
  homePage: HomePage;
  productdetailPage: ProductdetailPage;
  searchdetailsPage: SearchdetailsPage;
};

export const test = base.extend<AppFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productdetailPage: async ({ page }, use) => {
    await use(new ProductdetailPage(page));
  },
  searchdetailsPage: async ({ page }, use) => {
    await use(new SearchdetailsPage(page));
  },
});

export { expect };
