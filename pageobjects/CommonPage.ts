import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class CommonPage {
  private static readonly L = {
    checkForNoResultsMessage: { strategy: 'css' as const, value: 'div.s-no-results-section, span.a-color-state', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async clickCheckForNoResultsMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.checkForNoResultsMessage));
  }

  async doubleClickCheckForNoResultsMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.checkForNoResultsMessage));
  }

  async longPressCheckForNoResultsMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.checkForNoResultsMessage));
  }

  async expectCheckForNoResultsMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), expected, timeoutMs);
  }

  async expectCheckForNoResultsMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), substring, timeoutMs);
  }

  async expectCheckForNoResultsMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), value, timeoutMs);
  }

  async expectCheckForNoResultsMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), timeoutMs);
  }

  async expectCheckForNoResultsMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.checkForNoResultsMessage), count, timeoutMs);
  }

  async scrollCheckForNoResultsMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.checkForNoResultsMessage));
await console.log('for test');
  }


}
