import { browser, by, element } from 'protractor';

export class TestingAngular2DatabindingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
