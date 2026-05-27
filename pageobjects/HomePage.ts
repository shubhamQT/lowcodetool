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

export class HomePage {
  private static readonly L = {
    searchOpt: { strategy: 'text' as const, value: 'Search opt + /', actionKind: 'text' as const },
    searchOptionForwardSlash: { strategy: 'css' as const, value: '#nav-assist-search', actionKind: 'link' as const },
    showHideShortcutsShiftOption: { strategy: 'css' as const, value: '#nav-assist-show-shortcuts', actionKind: 'button' as const },
    fieldKeywords: { strategy: 'css' as const, value: '#twotabsearchtextbox', actionKind: 'textbox' as const },
    navSearchSubmit: { strategy: 'css' as const, value: '#nav-search-submit-button', actionKind: 'generic' as const },
    expandToChangeLanguage: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    expandAccountAndLists: { strategy: 'label' as const, value: 'Expand Account and Lists', actionKind: 'button' as const },
    primeDetails: { strategy: 'label' as const, value: 'Prime Details', actionKind: 'button' as const },
    watchNow: { strategy: 'testId' as const, value: 'OverlayClick', actionKind: 'generic' as const },
    tapWatchNowTo: { strategy: 'testId' as const, value: 'watchNow', actionKind: 'button' as const },
    unmute: { strategy: 'label' as const, value: 'Unmute', actionKind: 'button' as const },
    play: { strategy: 'label' as const, value: 'Play', actionKind: 'button' as const },
    blissClubWomenHighRise: { strategy: 'role' as const, value: 'BlissClub Women High Rise Straight Pants', role: 'button', actionKind: 'button' as const },
    aVINAWomenCasualVNeck: { strategy: 'role' as const, value: 'AVINA Women Casual V-Neck Crop top', role: 'button', actionKind: 'button' as const },
    blissClubUltimateFlarePants: { strategy: 'text' as const, value: 'BlissClub Ultimate Flare Pants Lite Tall for Women Above 5\'5 ft', actionKind: 'generic' as const },
    aahwanWomenSRoyalPolyester: { strategy: 'role' as const, value: 'Aahwan Women\'s Royal Polyester Regular Fit Cropped Top', role: 'button', actionKind: 'button' as const },
    rIHANIFABRED: { strategy: 'role' as const, value: 'RIHANI FAB RED & Black Checkered Shirt for Women', role: 'button', actionKind: 'button' as const },
    mARSMatteLipLiner: { strategy: 'role' as const, value: 'MARS Matte Lip Liner', role: 'button', actionKind: 'button' as const },
    shoetopiaStylishTrasparentDetailed: { strategy: 'text' as const, value: 'Shoetopia Stylish Trasparent Detailed Block Heels For Women & Girls', actionKind: 'generic' as const },
    aahwanOrangeSolidRound: { strategy: 'text' as const, value: 'Aahwan Orange Solid Round Neck Solid Bodycon Midi Dress for Women\'s & Girl\'s', actionKind: 'generic' as const },
    aahwanWomenPolyesterModern: { strategy: 'text' as const, value: 'Aahwan Women Polyester Modern Fit Solid Front Button Long Sleeve Casual Shirt', actionKind: 'generic' as const },
    titleWatchMoreLivestreamsLinkTextSee: { strategy: 'label' as const, value: 'Title:Watch more livestreams LinkText:See more', actionKind: 'generic' as const },
    watchMoreLivestreams: { strategy: 'role' as const, value: 'Watch more livestreams', role: 'button', actionKind: 'button' as const },
    backToTop: { strategy: 'css' as const, value: '#navBackToTop', actionKind: 'button' as const },
    expandToChangeLanguage2: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextSearchOpt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async expectSearchOptVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.searchOpt), expected, timeoutMs);
  }

  async expectSearchOptContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.searchOpt), substring, timeoutMs);
  }

  async scrollSearchOptIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async clickSearchOptionForwardSlash(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async doubleClickSearchOptionForwardSlash(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async expectSearchOptionForwardSlashVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.searchOptionForwardSlash), expected, timeoutMs);
  }

  async expectSearchOptionForwardSlashContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.searchOptionForwardSlash), substring, timeoutMs);
  }

  async scrollSearchOptionForwardSlashIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async clickShowHideShortcutsShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async doubleClickShowHideShortcutsShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), expected, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), substring, timeoutMs);
  }

  async scrollShowHideShortcutsShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async fillFieldKeywords(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords), value);
  }

  async clearFieldKeywords(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords));
  }

  async typeTextFieldKeywords(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords), value);
  }

  async expectFieldKeywordsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async scrollFieldKeywordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords));
  }

  async clickNavSearchSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async doubleClickNavSearchSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.navSearchSubmit), expected, timeoutMs);
  }

  async expectNavSearchSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.navSearchSubmit), substring, timeoutMs);
  }

  async scrollNavSearchSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async clickExpandToChangeLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async doubleClickExpandToChangeLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.expandToChangeLanguage), expected, timeoutMs);
  }

  async expectExpandToChangeLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.expandToChangeLanguage), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async clickExpandAccountAndLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async doubleClickExpandAccountAndLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.expandAccountAndLists), expected, timeoutMs);
  }

  async expectExpandAccountAndListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.expandAccountAndLists), substring, timeoutMs);
  }

  async scrollExpandAccountAndListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async clickPrimeDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async doubleClickPrimeDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async expectPrimeDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.primeDetails), expected, timeoutMs);
  }

  async expectPrimeDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.primeDetails), substring, timeoutMs);
  }

  async scrollPrimeDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async clickWatchNow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async doubleClickWatchNow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async expectWatchNowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.watchNow), expected, timeoutMs);
  }

  async expectWatchNowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.watchNow), substring, timeoutMs);
  }

  async scrollWatchNowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async clickTapWatchNowTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async doubleClickTapWatchNowTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async expectTapWatchNowToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.tapWatchNowTo), expected, timeoutMs);
  }

  async expectTapWatchNowToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.tapWatchNowTo), substring, timeoutMs);
  }

  async scrollTapWatchNowToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async clickUnmute(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async doubleClickUnmute(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async expectUnmuteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.unmute), expected, timeoutMs);
  }

  async expectUnmuteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.unmute), substring, timeoutMs);
  }

  async scrollUnmuteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async clickPlay(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async doubleClickPlay(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async expectPlayVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.play), expected, timeoutMs);
  }

  async expectPlayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.play), substring, timeoutMs);
  }

  async scrollPlayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async clickBlissClubWomenHighRise(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.blissClubWomenHighRise));
  }

  async doubleClickBlissClubWomenHighRise(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.blissClubWomenHighRise));
  }

  async expectBlissClubWomenHighRiseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.blissClubWomenHighRise), expected, timeoutMs);
  }

  async expectBlissClubWomenHighRiseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.blissClubWomenHighRise), substring, timeoutMs);
  }

  async scrollBlissClubWomenHighRiseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.blissClubWomenHighRise));
  }

  async clickAVINAWomenCasualVNeck(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck));
  }

  async doubleClickAVINAWomenCasualVNeck(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck));
  }

  async expectAVINAWomenCasualVNeckVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), expected, timeoutMs);
  }

  async expectAVINAWomenCasualVNeckContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), substring, timeoutMs);
  }

  async scrollAVINAWomenCasualVNeckIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck));
  }

  async clickBlissClubUltimateFlarePants(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants));
  }

  async doubleClickBlissClubUltimateFlarePants(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants));
  }

  async expectBlissClubUltimateFlarePantsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), expected, timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), substring, timeoutMs);
  }

  async scrollBlissClubUltimateFlarePantsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants));
  }

  async clickAahwanWomenSRoyalPolyester(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester));
  }

  async doubleClickAahwanWomenSRoyalPolyester(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester));
  }

  async expectAahwanWomenSRoyalPolyesterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), expected, timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), substring, timeoutMs);
  }

  async scrollAahwanWomenSRoyalPolyesterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester));
  }

  async clickRIHANIFABRED(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.rIHANIFABRED));
  }

  async doubleClickRIHANIFABRED(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.rIHANIFABRED));
  }

  async expectRIHANIFABREDVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.rIHANIFABRED), expected, timeoutMs);
  }

  async expectRIHANIFABREDContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.rIHANIFABRED), substring, timeoutMs);
  }

  async scrollRIHANIFABREDIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.rIHANIFABRED));
  }

  async clickMARSMatteLipLiner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.mARSMatteLipLiner));
  }

  async doubleClickMARSMatteLipLiner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.mARSMatteLipLiner));
  }

  async expectMARSMatteLipLinerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.mARSMatteLipLiner), expected, timeoutMs);
  }

  async expectMARSMatteLipLinerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.mARSMatteLipLiner), substring, timeoutMs);
  }

  async scrollMARSMatteLipLinerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.mARSMatteLipLiner));
  }

  async clickShoetopiaStylishTrasparentDetailed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed));
  }

  async doubleClickShoetopiaStylishTrasparentDetailed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed));
  }

  async expectShoetopiaStylishTrasparentDetailedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), expected, timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), substring, timeoutMs);
  }

  async scrollShoetopiaStylishTrasparentDetailedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed));
  }

  async clickAahwanOrangeSolidRound(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound));
  }

  async doubleClickAahwanOrangeSolidRound(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound));
  }

  async expectAahwanOrangeSolidRoundVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), expected, timeoutMs);
  }

  async expectAahwanOrangeSolidRoundContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), substring, timeoutMs);
  }

  async scrollAahwanOrangeSolidRoundIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound));
  }

  async clickAahwanWomenPolyesterModern(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern));
  }

  async doubleClickAahwanWomenPolyesterModern(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern));
  }

  async expectAahwanWomenPolyesterModernVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), expected, timeoutMs);
  }

  async expectAahwanWomenPolyesterModernContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), substring, timeoutMs);
  }

  async scrollAahwanWomenPolyesterModernIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern));
  }

  async clickTitleWatchMoreLivestreamsLinkTextSee(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async doubleClickTitleWatchMoreLivestreamsLinkTextSee(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), expected, timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), substring, timeoutMs);
  }

  async scrollTitleWatchMoreLivestreamsLinkTextSeeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async clickWatchMoreLivestreams(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async doubleClickWatchMoreLivestreams(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async expectWatchMoreLivestreamsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.watchMoreLivestreams), expected, timeoutMs);
  }

  async expectWatchMoreLivestreamsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.watchMoreLivestreams), substring, timeoutMs);
  }

  async scrollWatchMoreLivestreamsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async clickBackToTop(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async doubleClickBackToTop(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async expectBackToTopVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.backToTop), expected, timeoutMs);
  }

  async expectBackToTopContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.backToTop), substring, timeoutMs);
  }

  async scrollBackToTopIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async clickExpandToChangeLanguage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async doubleClickExpandToChangeLanguage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.expandToChangeLanguage2), expected, timeoutMs);
  }

  async expectExpandToChangeLanguage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.expandToChangeLanguage2), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }


  async clickSearchOpt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async doubleClickSearchOpt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async longPressSearchOpt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async expectSearchOptValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.searchOpt), value, timeoutMs);
  }

  async expectSearchOptEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.searchOpt), count, timeoutMs);
  }

  async longPressSearchOptionForwardSlash(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async expectSearchOptionForwardSlashValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.searchOptionForwardSlash), value, timeoutMs);
  }

  async expectSearchOptionForwardSlashEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.searchOptionForwardSlash), count, timeoutMs);
  }

  async longPressShowHideShortcutsShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), value, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), count, timeoutMs);
  }

  async expectFieldKeywordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.fieldKeywords), substring, timeoutMs);
  }

  async expectFieldKeywordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.fieldKeywords), count, timeoutMs);
  }

  async longPressNavSearchSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.navSearchSubmit), value, timeoutMs);
  }

  async expectNavSearchSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.navSearchSubmit), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.expandToChangeLanguage), value, timeoutMs);
  }

  async expectExpandToChangeLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.expandToChangeLanguage), count, timeoutMs);
  }

  async longPressExpandAccountAndLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.expandAccountAndLists), value, timeoutMs);
  }

  async expectExpandAccountAndListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.expandAccountAndLists), count, timeoutMs);
  }

  async longPressPrimeDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async expectPrimeDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.primeDetails), value, timeoutMs);
  }

  async expectPrimeDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.primeDetails), count, timeoutMs);
  }

  async longPressWatchNow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async expectWatchNowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.watchNow), value, timeoutMs);
  }

  async expectWatchNowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.watchNow), count, timeoutMs);
  }

  async longPressTapWatchNowTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async expectTapWatchNowToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.tapWatchNowTo), value, timeoutMs);
  }

  async expectTapWatchNowToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.tapWatchNowTo), count, timeoutMs);
  }

  async longPressUnmute(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async expectUnmuteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.unmute), value, timeoutMs);
  }

  async expectUnmuteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.unmute), count, timeoutMs);
  }

  async longPressPlay(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async expectPlayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.play), value, timeoutMs);
  }

  async expectPlayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.play), count, timeoutMs);
  }

  async longPressBlissClubWomenHighRise(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.blissClubWomenHighRise));
  }

  async expectBlissClubWomenHighRiseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.blissClubWomenHighRise), value, timeoutMs);
  }

  async expectBlissClubWomenHighRiseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.blissClubWomenHighRise), timeoutMs);
  }

  async expectBlissClubWomenHighRiseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.blissClubWomenHighRise), count, timeoutMs);
  }

  async longPressAVINAWomenCasualVNeck(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck));
  }

  async expectAVINAWomenCasualVNeckValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), value, timeoutMs);
  }

  async expectAVINAWomenCasualVNeckChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), timeoutMs);
  }

  async expectAVINAWomenCasualVNeckCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.aVINAWomenCasualVNeck), count, timeoutMs);
  }

  async longPressBlissClubUltimateFlarePants(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants));
  }

  async expectBlissClubUltimateFlarePantsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), value, timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), timeoutMs);
  }

  async expectBlissClubUltimateFlarePantsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.blissClubUltimateFlarePants), count, timeoutMs);
  }

  async longPressAahwanWomenSRoyalPolyester(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester));
  }

  async expectAahwanWomenSRoyalPolyesterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), value, timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), timeoutMs);
  }

  async expectAahwanWomenSRoyalPolyesterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.aahwanWomenSRoyalPolyester), count, timeoutMs);
  }

  async longPressRIHANIFABRED(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.rIHANIFABRED));
  }

  async expectRIHANIFABREDValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.rIHANIFABRED), value, timeoutMs);
  }

  async expectRIHANIFABREDChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.rIHANIFABRED), timeoutMs);
  }

  async expectRIHANIFABREDCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.rIHANIFABRED), count, timeoutMs);
  }

  async longPressMARSMatteLipLiner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.mARSMatteLipLiner));
  }

  async expectMARSMatteLipLinerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.mARSMatteLipLiner), value, timeoutMs);
  }

  async expectMARSMatteLipLinerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.mARSMatteLipLiner), timeoutMs);
  }

  async expectMARSMatteLipLinerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.mARSMatteLipLiner), count, timeoutMs);
  }

  async longPressShoetopiaStylishTrasparentDetailed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed));
  }

  async expectShoetopiaStylishTrasparentDetailedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), value, timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), timeoutMs);
  }

  async expectShoetopiaStylishTrasparentDetailedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.shoetopiaStylishTrasparentDetailed), count, timeoutMs);
  }

  async longPressAahwanOrangeSolidRound(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound));
  }

  async expectAahwanOrangeSolidRoundValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), value, timeoutMs);
  }

  async expectAahwanOrangeSolidRoundChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), timeoutMs);
  }

  async expectAahwanOrangeSolidRoundCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.aahwanOrangeSolidRound), count, timeoutMs);
  }

  async longPressAahwanWomenPolyesterModern(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern));
  }

  async expectAahwanWomenPolyesterModernValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), value, timeoutMs);
  }

  async expectAahwanWomenPolyesterModernChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), timeoutMs);
  }

  async expectAahwanWomenPolyesterModernCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.aahwanWomenPolyesterModern), count, timeoutMs);
  }

  async longPressTitleWatchMoreLivestreamsLinkTextSee(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), value, timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), count, timeoutMs);
  }

  async longPressWatchMoreLivestreams(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async expectWatchMoreLivestreamsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.watchMoreLivestreams), value, timeoutMs);
  }

  async expectWatchMoreLivestreamsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.watchMoreLivestreams), count, timeoutMs);
  }

  async longPressBackToTop(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async expectBackToTopValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.backToTop), value, timeoutMs);
  }

  async expectBackToTopChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.backToTop), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.expandToChangeLanguage2), value, timeoutMs);
  }

  async expectExpandToChangeLanguage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.expandToChangeLanguage2), count, timeoutMs);
  }

}
