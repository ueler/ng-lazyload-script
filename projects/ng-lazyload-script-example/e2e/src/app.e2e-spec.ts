import {AppPage} from './app.po';
import {browser, ExpectedConditions, logging} from 'protractor';

describe('example app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should eventually change text', () => {
    page.navigateTo();

    expect(page.getTextBox().getText()).toEqual('A new text should appear here...');

    page.clickButton();

    browser.wait(
      ExpectedConditions.textToBePresentInElement(
        page.getTextBox(),
        'A new text (set by text changer util which was lazy loaded)'),
      10000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
