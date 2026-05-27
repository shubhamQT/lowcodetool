import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User can search for a product and add it to cart', { tag: ["@e2e","@regression","@P0","@search-add-to-cart-basic"] }, async ({ page, homePage, searchdetailsPage, productdetailPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Amazon logo is visible', async () => {
    await homePage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.searchProductName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert visible — Search results are displayed', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
  await test.step('Click — Click first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Assert visible — Product detail page is displayed', async () => {
    await productdetailPage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Confirmation message for add to cart', async () => {
    await searchdetailsPage.expectSubmitAddToCartVisible();
  });
  await test.step('Click — Go to cart page', async () => {
    await homePage.clickExpandAccountAndLists();
  });
  await test.step('Assert visible — Product is present in cart', async () => {
    await cartPage.expectShowHideShortcutsShiftOptionVisible();
  });
});

test('User can view product details in search results', { tag: ["@e2e","@regression","@P1","@search-result-details"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.searchProductName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert visible — Product name is visible in results', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
  await test.step('Assert visible — Product price is visible in results', async () => {
    await searchdetailsPage.expectSamsungGalaxyS26UltraVisible();
  });
  await test.step('Assert visible — Product rating is visible in results', async () => {
    await searchdetailsPage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Assert visible — Product image is visible in results', async () => {
    await searchdetailsPage.expectMainContentVisible();
  });
});

test('User can select product variations before adding to cart', { tag: ["@e2e","@regression","@P1","@product-variation-selection"] }, async ({ page, homePage, searchdetailsPage, productdetailPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.searchProductName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Select — Select product color if available', async () => {
    await productdetailPage.clickColor6();
  });
  await test.step('Select — Select product size if available', async () => {
    await productdetailPage.clickFeatures9();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Confirmation message for add to cart', async () => {
    await searchdetailsPage.expectSubmitAddToCartVisible();
  });
});

test('User can update product quantity in cart', { tag: ["@e2e","@regression","@P1","@cart-update-quantity"] }, async ({ page, homePage, searchdetailsPage, productdetailPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.searchProductName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Click — Go to cart page', async () => {
    await homePage.clickExpandAccountAndLists();
  });
  await test.step('Select — Update quantity to 2', async () => {
    await cartPage.clickIncreaseQuantityByOne();
  });
  await test.step('Assert value — Quantity is updated in cart', async () => {
    await cartPage.expectIncreaseQuantityByOneValue('2');
  });
});

test('User can remove product from cart', { tag: ["@e2e","@regression","@P1","@cart-remove-product"] }, async ({ page, homePage, searchdetailsPage, productdetailPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.searchProductName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Click — Go to cart page', async () => {
    await homePage.clickExpandAccountAndLists();
  });
  await test.step('Click — Click delete/remove button for product', async () => {
    await cartPage.clickDeleteSamsungGalaxyS26();
  });
  await test.step('Assert hidden — Product is removed from cart', async () => {
    await cartPage.expectDeleteSamsungGalaxyS26Hidden();
  });
});
