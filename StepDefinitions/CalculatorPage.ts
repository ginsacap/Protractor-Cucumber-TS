import { element, by, ElementFinder, ElementArrayFinder, ExpectedConditions, browser } from 'protractor';

export class ElementLocators{
  txtFirst: ElementFinder;
  txtSecond: ElementFinder;
  btnGo: ElementFinder;
  lstOption: ElementArrayFinder;
  tblValue: ElementFinder;

  constructor() {
    this.txtFirst = element(by.model('first'));
    this.txtSecond = element(by.model('second'));
    this.btnGo = element(by.id('gobutton'));
    this.lstOption = element.all(by.css("select[ng-model='operator']> option"));
    this.tblValue = element(by.repeater('result in memory'));
    //.element(by.css("nth:child(3)"))
}
 async waitForElement(element: ElementFinder, timeout: number) {
    await browser.wait(ExpectedConditions.presenceOf(element), timeout);
}

}