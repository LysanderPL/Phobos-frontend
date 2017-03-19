import { browser, element, by } from 'protractor';

export class PhobosFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-overview h1')).getText();
  }
}
