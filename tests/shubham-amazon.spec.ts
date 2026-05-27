import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User can search for a product and add it to cart', { tag: ["@e2e", "@regression", "@P0", "@search-add-to-cart-basic"] }, async ({ page, homePage, searchdetailsPage, productdetailPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Amazon logo is visible', async () => {
    await homePage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
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
    await cartPage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Click — Go to cart page', async () => {
    await cartPage.clickExpandAccountAndLists();
  });
  await test.step('Assert visible — Product is present in cart', async () => {
    await cartPage.expectShowHideShortcutsShiftOptionVisible();
  });
});

test('User can view product details in search results', { tag: ["@e2e", "@regression", "@P1", "@search-result-details"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert visible — Product name is visible in results', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
  await test.step('Assert visible — Product price is visible in results', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
  await test.step('Assert visible — Product rating is visible in results', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
  await test.step('Assert visible — Product image is visible in results', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
});

test('User can select product variations before adding to cart', { tag: ["@e2e", "@regression", "@P1", "@product-variation-selection"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Select — Select product color if available', async () => {
    await searchdetailsPage.selectS('Black');
  });
  await test.step('Select — Select product size if available', async () => {
    await searchdetailsPage.selectS('256GB');
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Confirmation message for add to cart', async () => {
    await searchdetailsPage.expectSubmitAddToCartVisible();
  });
});

test('User can update product quantity in cart', { tag: ["@e2e", "@regression", "@P1", "@cart-update-quantity"] }, async ({ page, homePage, searchdetailsPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
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
    await cartPage.clickExpandAccountAndLists();
  });
  await test.step('Select — Update quantity to 2', async () => {
    await cartPage.fillFieldKeywords('2');
  });
  await test.step('Assert value — Quantity is updated in cart', async () => {
    await cartPage.expectFieldKeywordsValue('2');
  });
});

test('User can remove product from cart', { tag: ["@e2e", "@regression", "@P1", "@cart-remove-product"] }, async ({ page, homePage, searchdetailsPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
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
    await cartPage.clickExpandAccountAndLists();
  });
  await test.step('Click — Click delete/remove button for product', async () => {
    await cartPage.clickDeleteSamsungGalaxyS26();
  });
  await test.step('Assert hidden — Product is removed from cart', async () => {
    await cartPage.expectDeleteSamsungGalaxyS26Hidden();
  });
});

test('Open Amazon India homepage and verify visibility', { tag: ["@smoke", "@regression", "@P0", "@open-amazon-homepage"] }, async ({ page, homePage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Verify Amazon logo is visible', async () => {
    await homePage.expectShowHideShortcutsShiftOptionVisible();
  });
});

test('Search for a product and verify search results are displayed', { tag: ["@smoke", "@regression", "@P0", "@search-product-and-view-results"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert visible — Verify search results are displayed', async () => {
    await searchdetailsPage.expectResultsVisible();
  });
});

test('Open product detail page from search results', { tag: ["@smoke", "@regression", "@P0", "@view-product-detail-page"] }, async ({ page, homePage, searchdetailsPage, productdetailPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in search results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Assert visible — Verify product title is visible on PDP', async () => {
    await productdetailPage.expectShowHideShortcutsShiftOptionVisible();
  });
});

test('Add product to cart from product detail page', { tag: ["@smoke", "@regression", "@P0", "@add-product-to-cart"] }, async ({ page, homePage, searchdetailsPage, productdetailPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in search results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Verify confirmation message or cart count is updated', async () => {
    await searchdetailsPage.expectSubmitAddToCartVisible();
  });
});

test('Verify product is present in cart and can be updated or removed', { tag: ["@smoke", "@regression", "@P0", "@verify-cart-contents"] }, async ({ page, cartPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Click — Click cart icon', async () => {
    await cartPage.clickExpandAccountAndLists();
  });
  await test.step('Assert contains — Verify product name in cart', async () => {
    await cartPage.expectShowHideShortcutsShiftOptionContainsText(testData.productName);
  });
  await test.step('Click — Click quantity dropdown', async () => {
    await cartPage.clickIncreaseQuantityByOne();
  });
  await test.step('Select — Select quantity 1', async () => {
    await cartPage.fillFieldKeywords('1');
  });
});

test('Search with empty query should show error or no results', { tag: ["@negative", "@regression", "@P0", "@empty-search-query"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Leave search bar empty', async () => {
    await homePage.fillFieldKeywords('');
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert text — Check for error message or no results text', async () => {
    await searchdetailsPage.expectResultsText('No results for');
  });
});

test('Search for a non-existent product should show no results', { tag: ["@negative", "@regression", "@P1", "@invalid-product-search"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter gibberish in search bar', async () => {
    await homePage.fillFieldKeywords('123123123123213123123123123123');
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert text — Check for no results message', async () => {
    await searchdetailsPage.expectResultsText('did not match any products');
  });
});

test('Add to cart without selecting required variation should show error', { tag: ["@negative", "@regression", "@P0", "@add-to-cart-without-variation"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Search for a product with variations', async () => {
    await homePage.fillFieldKeywords('t-shirt');
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click on first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Click — Click Add to Cart without selecting size/color', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Check for variation selection error message', async () => {
    await searchdetailsPage.expectSubmitAddToCartVisible();
  });
});

test('Add to cart as unauthenticated user should prompt login or allow guest', { tag: ["@negative", "@regression", "@P1", "@add-to-cart-unauthenticated"] }, async ({ page, homePage, searchdetailsPage }) => {
  await test.step('Open — Open Amazon India homepage in incognito/private mode', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Search for samsung s26 ultra', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click on first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Click — Click Add to Cart', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Check for login prompt or guest checkout option', async () => {
    await searchdetailsPage.expectSubmitAddToCartVisible();
  });
});

test('Update cart with invalid quantity should show error', { tag: ["@negative", "@regression", "@P1", "@invalid-quantity-update"] }, async ({ page, homePage, searchdetailsPage, cartPage }) => {
  await test.step('Open — Open Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Search for samsung s26 ultra', async () => {
    await homePage.fillFieldKeywords(testData.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click on first product in results', async () => {
    await searchdetailsPage.clickSamsungGalaxyS26Ultra();
  });
  await test.step('Click — Click Add to Cart', async () => {
    await searchdetailsPage.clickSubmitAddToCart();
  });
  await test.step('Click — Go to cart page', async () => {
    await cartPage.clickExpandAccountAndLists();
  });
  await test.step('Fill — Enter invalid quantity (e.g., 0 or 9999)', async () => {
    await cartPage.fillFieldKeywords('0');
  });
  await test.step('Click — Click update button', async () => {
    await cartPage.clickIncreaseQuantityByOne();
  });
  await test.step('Assert visible — Check for quantity error message', async () => {
    await cartPage.expectShowHideShortcutsShiftOptionVisible();
  });
});
