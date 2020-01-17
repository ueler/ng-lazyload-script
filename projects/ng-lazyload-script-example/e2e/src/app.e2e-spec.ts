import {AppPage} from './app.po';
import {browser, ExpectedConditions, logging} from 'protractor';
import { uniq } from 'lodash';

describe('example app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should eventually change text (one click)', () => {
    page.navigateTo();

    expect(page.getChangerTextBox().getText()).toEqual('A new text should appear here...');

    page.clickTextChangerButton();

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getChangerTextBox(),
        'A new text (set by text changer util which was lazy loaded)'),
      10000);
  });

  it('should eventually append text twice (two immediate clicks)', () => {
    page.navigateTo();

    expect(page.getAppenderTextBox().getText()).toEqual('Text should be appended here...');

    page.clickTextAppenderButton();
    page.clickTextAppenderButton();

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getAppenderTextBox(),
        'Text should be appended here...appended textappended text'),
      10000);
  });

  it('should eventually append text twice (two clicks with wait between)', () => {
    page.navigateTo();

    expect(page.getAppenderTextBox().getText()).toEqual('Text should be appended here...');

    page.clickTextAppenderButton();

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getAppenderTextBox(),
        'Text should be appended here...appended text'),
      10000);

    page.clickTextAppenderButton();

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getAppenderTextBox(),
        'Text should be appended here...appended textappended text'),
      10000);
  });

  it('should eventually change text and eventually append text', () => {
    page.navigateTo();

    expect(page.getAppenderTextBox().getText()).toEqual('Text should be appended here...');

    page.clickTextAppenderButton();
    page.clickTextChangerButton();

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getChangerTextBox(),
        'A new text (set by text changer util which was lazy loaded)'),
      10000);

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getAppenderTextBox(),
        'Text should be appended here...appended text'),
      10000);
  });

  afterEach(async () => {
    // Check that there are no duplicate script tags
    const allScriptTags = page.getAllScriptTags();

    const allScriptSources = await allScriptTags.getAttribute('src');
    const uniqueScriptSources = uniq(allScriptSources);

    expect(allScriptSources.length).toBe(uniqueScriptSources.length);

    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
