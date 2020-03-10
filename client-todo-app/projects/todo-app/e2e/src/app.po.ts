import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  public getTitleText(): Promise<string> {
    return element(by.css('cta-root .content span')).getText() as Promise<string>;
  }
}
