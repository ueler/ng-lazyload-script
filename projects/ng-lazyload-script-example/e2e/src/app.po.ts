import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTextBox() {
    return element(by.id('text-box'));
  }

  clickButton() {
    return element(by.id('button')).click();
  }
}
