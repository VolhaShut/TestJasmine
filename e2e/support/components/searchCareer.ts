import { element, by, browser, ExpectedConditions } from 'protractor';

export class SearchCareer {

    button_careers=element(by.css('ul.tile-menu > li:nth-child(5) > a'));
    input_search=element(by.css('.job-search-input'));
    autocomplete=element(by.className('autocomplete-suggestion'));
    button_search=element(by.css('.job-search-button.location-search-submit'));
 //   result=element(by.css('ul.search-result-list>li:nth-child(1)> div > a'));
    search_for=element(by.className('searched-for'));
    result=element(by.className('position-name hot'));
    submitBtn = element(by.className('section-ui section-color-white   section-padding-small'));

   scrollIntoSubmitBtnView () {
    return browser.executeScript('arguments[0].scrollIntoView(true);',this.submitBtn.getWebElement());
   };

    searchVacancy(vacancy:string){
        browser.wait(ExpectedConditions.visibilityOf(this.submitBtn), 30000);
        this.scrollIntoSubmitBtnView ();
        this.input_search.click();
        this.input_search.sendKeys(vacancy);
        browser.wait(ExpectedConditions.visibilityOf(this.autocomplete), 30000);
        
    };


}