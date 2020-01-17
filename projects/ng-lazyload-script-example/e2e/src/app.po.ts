import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getChangerTextBox() {
    return element(by.id('text-box-text-changer'));
  }

  getAppenderTextBox() {
    return element(by.id('text-box-text-appender'));
  }

  clickTextChangerButton() {
    return element(by.id('textChangerButton')).click();
  }

  clickTextAppenderButton() {
    return element(by.id('textAppenderButton')).click();
  }

  getAllScriptTags() {
    return element.all(by.tagName('script'));
  }
}
