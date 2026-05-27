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

export class ProductdetailPage {
  private static readonly L = {
    showHideShortcutsShiftOption: { strategy: 'css' as const, value: '#nav-assist-show-shortcuts', actionKind: 'button' as const },
    fieldKeywords: { strategy: 'css' as const, value: '#twotabsearchtextbox', actionKind: 'textbox' as const },
    expandToChangeLanguage: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    expandAccountAndLists: { strategy: 'label' as const, value: 'Expand Account and Lists', actionKind: 'button' as const },
    primeDetails: { strategy: 'label' as const, value: 'Prime Details', actionKind: 'button' as const },
    mobilesAccessoriesYou: { strategy: 'label' as const, value: 'Mobiles & Accessories, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    laptopsAccessoriesYou: { strategy: 'label' as const, value: 'Laptops & Accessories, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    tVHomeEntertainment2: { strategy: 'label' as const, value: 'TV & Home Entertainment, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    audioYouAreCurrently: { strategy: 'label' as const, value: 'Audio, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    camerasYouAreCurrently: { strategy: 'label' as const, value: 'Cameras, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    computerPeripheralsYouAre: { strategy: 'label' as const, value: 'Computer Peripherals, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    smartTechnologyYouAre: { strategy: 'label' as const, value: 'Smart Technology, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    musicalInstrumentsYouAre: { strategy: 'label' as const, value: 'Musical Instruments, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    officeStationeryYou: { strategy: 'label' as const, value: 'Office & Stationery, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    withExchangeUpTo: { strategy: 'role' as const, value: 'With Exchange Up to 46,700.00 off', role: 'button', actionKind: 'button' as const },
    withoutExchange1309990013999900: { strategy: 'role' as const, value: 'Without Exchange 130,999.00 139,999.00', role: 'button', actionKind: 'button' as const },
    offeringID1: { strategy: 'css' as const, value: '#mbb-offeringID-1', actionKind: 'checkbox' as const },
    clickToPlayVideo2: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo4: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo6: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo8: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo10: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo12: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    performance34: { strategy: 'role' as const, value: 'Performance(34)', role: 'button', actionKind: 'button' as const },
    camera22: { strategy: 'role' as const, value: 'Camera(22)', role: 'button', actionKind: 'button' as const },
    batteryLife11: { strategy: 'role' as const, value: 'Battery life(11)', role: 'button', actionKind: 'button' as const },
    valueForMoney10: { strategy: 'role' as const, value: 'Value for money(10)', role: 'button', actionKind: 'button' as const },
    features9: { strategy: 'role' as const, value: 'Features(9)', role: 'button', actionKind: 'button' as const },
    privacyScreen7: { strategy: 'role' as const, value: 'Privacy screen(7)', role: 'button', actionKind: 'button' as const },
    color6: { strategy: 'role' as const, value: 'Color(6)', role: 'button', actionKind: 'button' as const },
    design6: { strategy: 'role' as const, value: 'Design(6)', role: 'button', actionKind: 'button' as const },
    backToTop: { strategy: 'css' as const, value: '#navBackToTop', actionKind: 'button' as const },
    expandToChangeLanguage2: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShowHideShortcutsShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption));
  }

  async doubleClickShowHideShortcutsShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), expected, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), substring, timeoutMs);
  }

  async scrollShowHideShortcutsShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption));
  }

  async fillFieldKeywords(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ProductdetailPage.L.fieldKeywords), value);
  }

  async clearFieldKeywords(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ProductdetailPage.L.fieldKeywords));
  }

  async typeTextFieldKeywords(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ProductdetailPage.L.fieldKeywords), value);
  }

  async expectFieldKeywordsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async scrollFieldKeywordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.fieldKeywords));
  }

  async clickExpandToChangeLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage));
  }

  async doubleClickExpandToChangeLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), expected, timeoutMs);
  }

  async expectExpandToChangeLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage));
  }

  async clickExpandAccountAndLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists));
  }

  async doubleClickExpandAccountAndLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), expected, timeoutMs);
  }

  async expectExpandAccountAndListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), substring, timeoutMs);
  }

  async scrollExpandAccountAndListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists));
  }

  async clickPrimeDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.primeDetails));
  }

  async doubleClickPrimeDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.primeDetails));
  }

  async expectPrimeDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.primeDetails), expected, timeoutMs);
  }

  async expectPrimeDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.primeDetails), substring, timeoutMs);
  }

  async scrollPrimeDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.primeDetails));
  }

  async clickMobilesAccessoriesYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou));
  }

  async doubleClickMobilesAccessoriesYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou));
  }

  async expectMobilesAccessoriesYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), expected, timeoutMs);
  }

  async expectMobilesAccessoriesYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), substring, timeoutMs);
  }

  async scrollMobilesAccessoriesYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou));
  }

  async clickLaptopsAccessoriesYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou));
  }

  async doubleClickLaptopsAccessoriesYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou));
  }

  async expectLaptopsAccessoriesYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), expected, timeoutMs);
  }

  async expectLaptopsAccessoriesYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), substring, timeoutMs);
  }

  async scrollLaptopsAccessoriesYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou));
  }

  async clickTVHomeEntertainment2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2));
  }

  async doubleClickTVHomeEntertainment2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2));
  }

  async expectTVHomeEntertainment2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), expected, timeoutMs);
  }

  async expectTVHomeEntertainment2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), substring, timeoutMs);
  }

  async scrollTVHomeEntertainment2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2));
  }

  async clickAudioYouAreCurrently(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently));
  }

  async doubleClickAudioYouAreCurrently(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently));
  }

  async expectAudioYouAreCurrentlyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), expected, timeoutMs);
  }

  async expectAudioYouAreCurrentlyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), substring, timeoutMs);
  }

  async scrollAudioYouAreCurrentlyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently));
  }

  async clickCamerasYouAreCurrently(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently));
  }

  async doubleClickCamerasYouAreCurrently(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently));
  }

  async expectCamerasYouAreCurrentlyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), expected, timeoutMs);
  }

  async expectCamerasYouAreCurrentlyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), substring, timeoutMs);
  }

  async scrollCamerasYouAreCurrentlyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently));
  }

  async clickComputerPeripheralsYouAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre));
  }

  async doubleClickComputerPeripheralsYouAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre));
  }

  async expectComputerPeripheralsYouAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), expected, timeoutMs);
  }

  async expectComputerPeripheralsYouAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), substring, timeoutMs);
  }

  async scrollComputerPeripheralsYouAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre));
  }

  async clickSmartTechnologyYouAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre));
  }

  async doubleClickSmartTechnologyYouAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre));
  }

  async expectSmartTechnologyYouAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), expected, timeoutMs);
  }

  async expectSmartTechnologyYouAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), substring, timeoutMs);
  }

  async scrollSmartTechnologyYouAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre));
  }

  async clickMusicalInstrumentsYouAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre));
  }

  async doubleClickMusicalInstrumentsYouAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre));
  }

  async expectMusicalInstrumentsYouAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), expected, timeoutMs);
  }

  async expectMusicalInstrumentsYouAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), substring, timeoutMs);
  }

  async scrollMusicalInstrumentsYouAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre));
  }

  async clickOfficeStationeryYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.officeStationeryYou));
  }

  async doubleClickOfficeStationeryYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.officeStationeryYou));
  }

  async expectOfficeStationeryYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), expected, timeoutMs);
  }

  async expectOfficeStationeryYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), substring, timeoutMs);
  }

  async scrollOfficeStationeryYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.officeStationeryYou));
  }

  async clickWithExchangeUpTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo));
  }

  async doubleClickWithExchangeUpTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo));
  }

  async expectWithExchangeUpToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), expected, timeoutMs);
  }

  async expectWithExchangeUpToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), substring, timeoutMs);
  }

  async scrollWithExchangeUpToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo));
  }

  async clickWithoutExchange1309990013999900(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900));
  }

  async doubleClickWithoutExchange1309990013999900(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900));
  }

  async expectWithoutExchange1309990013999900Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), expected, timeoutMs);
  }

  async expectWithoutExchange1309990013999900ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), substring, timeoutMs);
  }

  async scrollWithoutExchange1309990013999900IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900));
  }

  async checkOfferingID1(): Promise<void> {
    await checkWhenVisible(webLocator(this.page, ProductdetailPage.L.offeringID1));
  }

  async uncheckOfferingID1(): Promise<void> {
    await uncheckWhenVisible(webLocator(this.page, ProductdetailPage.L.offeringID1));
  }

  async expectOfferingID1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async scrollOfferingID1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.offeringID1));
  }

  async clickClickToPlayVideo2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2));
  }

  async doubleClickClickToPlayVideo2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2));
  }

  async expectClickToPlayVideo2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), expected, timeoutMs);
  }

  async expectClickToPlayVideo2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), substring, timeoutMs);
  }

  async scrollClickToPlayVideo2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2));
  }

  async clickClickToPlayVideo4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4));
  }

  async doubleClickClickToPlayVideo4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4));
  }

  async expectClickToPlayVideo4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), expected, timeoutMs);
  }

  async expectClickToPlayVideo4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), substring, timeoutMs);
  }

  async scrollClickToPlayVideo4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4));
  }

  async clickClickToPlayVideo6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6));
  }

  async doubleClickClickToPlayVideo6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6));
  }

  async expectClickToPlayVideo6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), expected, timeoutMs);
  }

  async expectClickToPlayVideo6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), substring, timeoutMs);
  }

  async scrollClickToPlayVideo6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6));
  }

  async clickClickToPlayVideo8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8));
  }

  async doubleClickClickToPlayVideo8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8));
  }

  async expectClickToPlayVideo8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), expected, timeoutMs);
  }

  async expectClickToPlayVideo8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), substring, timeoutMs);
  }

  async scrollClickToPlayVideo8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8));
  }

  async clickClickToPlayVideo10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10));
  }

  async doubleClickClickToPlayVideo10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10));
  }

  async expectClickToPlayVideo10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), expected, timeoutMs);
  }

  async expectClickToPlayVideo10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), substring, timeoutMs);
  }

  async scrollClickToPlayVideo10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10));
  }

  async clickClickToPlayVideo12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12));
  }

  async doubleClickClickToPlayVideo12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12));
  }

  async expectClickToPlayVideo12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), expected, timeoutMs);
  }

  async expectClickToPlayVideo12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), substring, timeoutMs);
  }

  async scrollClickToPlayVideo12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12));
  }

  async clickPerformance34(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.performance34));
  }

  async doubleClickPerformance34(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.performance34));
  }

  async expectPerformance34Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.performance34), expected, timeoutMs);
  }

  async expectPerformance34ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.performance34), substring, timeoutMs);
  }

  async scrollPerformance34IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.performance34));
  }

  async clickCamera22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.camera22));
  }

  async doubleClickCamera22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.camera22));
  }

  async expectCamera22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.camera22), expected, timeoutMs);
  }

  async expectCamera22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.camera22), substring, timeoutMs);
  }

  async scrollCamera22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.camera22));
  }

  async clickBatteryLife11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.batteryLife11));
  }

  async doubleClickBatteryLife11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.batteryLife11));
  }

  async expectBatteryLife11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.batteryLife11), expected, timeoutMs);
  }

  async expectBatteryLife11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.batteryLife11), substring, timeoutMs);
  }

  async scrollBatteryLife11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.batteryLife11));
  }

  async clickValueForMoney10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.valueForMoney10));
  }

  async doubleClickValueForMoney10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.valueForMoney10));
  }

  async expectValueForMoney10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.valueForMoney10), expected, timeoutMs);
  }

  async expectValueForMoney10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.valueForMoney10), substring, timeoutMs);
  }

  async scrollValueForMoney10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.valueForMoney10));
  }

  async clickFeatures9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.features9));
  }

  async doubleClickFeatures9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.features9));
  }

  async expectFeatures9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.features9), expected, timeoutMs);
  }

  async expectFeatures9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.features9), substring, timeoutMs);
  }

  async scrollFeatures9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.features9));
  }

  async clickPrivacyScreen7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.privacyScreen7));
  }

  async doubleClickPrivacyScreen7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.privacyScreen7));
  }

  async expectPrivacyScreen7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.privacyScreen7), expected, timeoutMs);
  }

  async expectPrivacyScreen7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.privacyScreen7), substring, timeoutMs);
  }

  async scrollPrivacyScreen7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.privacyScreen7));
  }

  async clickColor6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.color6));
  }

  async doubleClickColor6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.color6));
  }

  async expectColor6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.color6), expected, timeoutMs);
  }

  async expectColor6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.color6), substring, timeoutMs);
  }

  async scrollColor6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.color6));
  }

  async clickDesign6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.design6));
  }

  async doubleClickDesign6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.design6));
  }

  async expectDesign6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.design6), expected, timeoutMs);
  }

  async expectDesign6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.design6), substring, timeoutMs);
  }

  async scrollDesign6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.design6));
  }

  async clickBackToTop(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.backToTop));
  }

  async doubleClickBackToTop(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.backToTop));
  }

  async expectBackToTopVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.backToTop), expected, timeoutMs);
  }

  async expectBackToTopContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.backToTop), substring, timeoutMs);
  }

  async scrollBackToTopIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.backToTop));
  }

  async clickExpandToChangeLanguage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2));
  }

  async doubleClickExpandToChangeLanguage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), expected, timeoutMs);
  }

  async expectExpandToChangeLanguage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2));
  }


  async longPressShowHideShortcutsShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), value, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.showHideShortcutsShiftOption), count, timeoutMs);
  }

  async expectFieldKeywordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.fieldKeywords), substring, timeoutMs);
  }

  async expectFieldKeywordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.fieldKeywords), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), value, timeoutMs);
  }

  async expectExpandToChangeLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage), count, timeoutMs);
  }

  async longPressExpandAccountAndLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), value, timeoutMs);
  }

  async expectExpandAccountAndListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.expandAccountAndLists), count, timeoutMs);
  }

  async longPressPrimeDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.primeDetails));
  }

  async expectPrimeDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.primeDetails), value, timeoutMs);
  }

  async expectPrimeDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.primeDetails), count, timeoutMs);
  }

  async longPressMobilesAccessoriesYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou));
  }

  async expectMobilesAccessoriesYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), value, timeoutMs);
  }

  async expectMobilesAccessoriesYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.mobilesAccessoriesYou), count, timeoutMs);
  }

  async longPressLaptopsAccessoriesYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou));
  }

  async expectLaptopsAccessoriesYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), value, timeoutMs);
  }

  async expectLaptopsAccessoriesYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.laptopsAccessoriesYou), count, timeoutMs);
  }

  async longPressTVHomeEntertainment2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2));
  }

  async expectTVHomeEntertainment2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), value, timeoutMs);
  }

  async expectTVHomeEntertainment2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.tVHomeEntertainment2), count, timeoutMs);
  }

  async longPressAudioYouAreCurrently(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently));
  }

  async expectAudioYouAreCurrentlyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), value, timeoutMs);
  }

  async expectAudioYouAreCurrentlyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.audioYouAreCurrently), count, timeoutMs);
  }

  async longPressCamerasYouAreCurrently(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently));
  }

  async expectCamerasYouAreCurrentlyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), value, timeoutMs);
  }

  async expectCamerasYouAreCurrentlyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.camerasYouAreCurrently), count, timeoutMs);
  }

  async longPressComputerPeripheralsYouAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre));
  }

  async expectComputerPeripheralsYouAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), value, timeoutMs);
  }

  async expectComputerPeripheralsYouAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.computerPeripheralsYouAre), count, timeoutMs);
  }

  async longPressSmartTechnologyYouAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre));
  }

  async expectSmartTechnologyYouAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), value, timeoutMs);
  }

  async expectSmartTechnologyYouAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.smartTechnologyYouAre), count, timeoutMs);
  }

  async longPressMusicalInstrumentsYouAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre));
  }

  async expectMusicalInstrumentsYouAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), value, timeoutMs);
  }

  async expectMusicalInstrumentsYouAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.musicalInstrumentsYouAre), count, timeoutMs);
  }

  async longPressOfficeStationeryYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.officeStationeryYou));
  }

  async expectOfficeStationeryYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), value, timeoutMs);
  }

  async expectOfficeStationeryYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.officeStationeryYou), count, timeoutMs);
  }

  async longPressWithExchangeUpTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo));
  }

  async expectWithExchangeUpToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), value, timeoutMs);
  }

  async expectWithExchangeUpToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.withExchangeUpTo), count, timeoutMs);
  }

  async longPressWithoutExchange1309990013999900(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900));
  }

  async expectWithoutExchange1309990013999900Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), value, timeoutMs);
  }

  async expectWithoutExchange1309990013999900Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), timeoutMs);
  }

  async expectWithoutExchange1309990013999900Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.withoutExchange1309990013999900), count, timeoutMs);
  }

  async expectOfferingID1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.offeringID1), expected, timeoutMs);
  }

  async expectOfferingID1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.offeringID1), substring, timeoutMs);
  }

  async expectOfferingID1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.offeringID1), value, timeoutMs);
  }

  async expectOfferingID1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.offeringID1), count, timeoutMs);
  }

  async longPressClickToPlayVideo2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2));
  }

  async expectClickToPlayVideo2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), value, timeoutMs);
  }

  async expectClickToPlayVideo2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), timeoutMs);
  }

  async expectClickToPlayVideo2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo2), count, timeoutMs);
  }

  async longPressClickToPlayVideo4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4));
  }

  async expectClickToPlayVideo4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), value, timeoutMs);
  }

  async expectClickToPlayVideo4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), timeoutMs);
  }

  async expectClickToPlayVideo4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo4), count, timeoutMs);
  }

  async longPressClickToPlayVideo6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6));
  }

  async expectClickToPlayVideo6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), value, timeoutMs);
  }

  async expectClickToPlayVideo6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), timeoutMs);
  }

  async expectClickToPlayVideo6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo6), count, timeoutMs);
  }

  async longPressClickToPlayVideo8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8));
  }

  async expectClickToPlayVideo8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), value, timeoutMs);
  }

  async expectClickToPlayVideo8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), timeoutMs);
  }

  async expectClickToPlayVideo8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo8), count, timeoutMs);
  }

  async longPressClickToPlayVideo10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10));
  }

  async expectClickToPlayVideo10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), value, timeoutMs);
  }

  async expectClickToPlayVideo10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), timeoutMs);
  }

  async expectClickToPlayVideo10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo10), count, timeoutMs);
  }

  async longPressClickToPlayVideo12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12));
  }

  async expectClickToPlayVideo12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), value, timeoutMs);
  }

  async expectClickToPlayVideo12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), timeoutMs);
  }

  async expectClickToPlayVideo12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.clickToPlayVideo12), count, timeoutMs);
  }

  async longPressPerformance34(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.performance34));
  }

  async expectPerformance34Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.performance34), value, timeoutMs);
  }

  async expectPerformance34Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.performance34), count, timeoutMs);
  }

  async longPressCamera22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.camera22));
  }

  async expectCamera22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.camera22), value, timeoutMs);
  }

  async expectCamera22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.camera22), count, timeoutMs);
  }

  async longPressBatteryLife11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.batteryLife11));
  }

  async expectBatteryLife11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.batteryLife11), value, timeoutMs);
  }

  async expectBatteryLife11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.batteryLife11), count, timeoutMs);
  }

  async longPressValueForMoney10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.valueForMoney10));
  }

  async expectValueForMoney10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.valueForMoney10), value, timeoutMs);
  }

  async expectValueForMoney10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.valueForMoney10), count, timeoutMs);
  }

  async longPressFeatures9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.features9));
  }

  async expectFeatures9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.features9), value, timeoutMs);
  }

  async expectFeatures9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.features9), count, timeoutMs);
  }

  async longPressPrivacyScreen7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.privacyScreen7));
  }

  async expectPrivacyScreen7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.privacyScreen7), value, timeoutMs);
  }

  async expectPrivacyScreen7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.privacyScreen7), count, timeoutMs);
  }

  async longPressColor6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.color6));
  }

  async expectColor6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.color6), value, timeoutMs);
  }

  async expectColor6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.color6), timeoutMs);
  }

  async expectColor6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.color6), count, timeoutMs);
  }

  async longPressDesign6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.design6));
  }

  async expectDesign6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.design6), value, timeoutMs);
  }

  async expectDesign6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.design6), count, timeoutMs);
  }

  async longPressBackToTop(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.backToTop));
  }

  async expectBackToTopValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.backToTop), value, timeoutMs);
  }

  async expectBackToTopChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.backToTop), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), value, timeoutMs);
  }

  async expectExpandToChangeLanguage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.expandToChangeLanguage2), count, timeoutMs);
  }

}
