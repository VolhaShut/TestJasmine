import { element, by, browser, ExpectedConditions } from 'protractor';

export class Menu {
  button_solutions=element(by.css('ul.tile-menu > li:first-child > a'));
  button_industries=element(by.css('ul.tile-menu > li:nth-child(2) > a'));
  button_about=element(by.css('ul.tile-menu > li:nth-child(3) > a'));
  button_ideas=element(by.css('ul.tile-menu > li:nth-child(4) > a'));
  button_careers=element(by.css('ul.tile-menu > li:nth-child(5) > a'));
  button_contact=element(by.css('ul.tile-menu > li:nth-child(6) > a'));

  
  title_solutions='Solutions';
  title_industries='Industries';
  title_about='About';
  title_ideas='Ideas';
  title_careers='Careers';
  title_contact='Contact';

  getTitle(){
     return browser.getTitle();
  }
}
