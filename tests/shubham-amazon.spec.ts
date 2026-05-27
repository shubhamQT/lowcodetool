import { test, expect } from '../support/fixtures';

test('Search for a non-existent product should show no results', { tag: ["@negative","@regression","@P1","@invalid-product-search"] }, async ({ page, cartPage, homePage, commonPage }) => {
  await test.step('Navigate to URL — Open Amazon India homepage', async () => {
    await page.goto('https://www.amazon.in/');
  });
  await test.step('Fill — Enter gibberish in search bar — (input#twotabsearchtextbox)', async () => {
    await cartPage.fillFieldKeywords('42425346576876869797979798685');
  });
  await test.step('Click — Click search button — (input#nav-search-submit-button)', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert text (exact) — Check for no results message — (div.s-no-results-section, span.a-color-state)', async () => {
    await commonPage.expectCheckForNoResultsMessageText('did not match any products');
  });
});
