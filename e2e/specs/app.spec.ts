import { browser, ExpectedConditions  } from 'protractor';
import {Menu} from '../support/components/app.component';
import {SearchCareer} from '../support/components/searchCareer';
import {IndexPage} from '../support/pages/index.page';
/// <reference path="./node_modules/@types/node/index.d.ts" />
import * as fs from "fs";
import { BrowserModule } from '@angular/platform-browser';


describe('EPAM.COM Tests', () => {

  let menu: Menu;
  let search:SearchCareer;

  beforeAll(() => {
    menu = new Menu();
    search=new SearchCareer();
    IndexPage.openPage();
  });

  beforeEach(() => {
   // IndexPage.openPage();
  });

  it('should open index page', () => {    
    expect(browser.getTitle()).toEqual(IndexPage.title);
  });

  it('should open about page',  () => {
    menu.button_about.click();
    menu.button_about.click();
    expect(menu.getTitle()).toEqual(menu.title_about);
  });

  it('should open careers page',  () => {
    menu.button_careers.click();
    expect(menu.getTitle()).toEqual(menu.title_careers);
  });

  it('should open solutions page',  () => {
      menu.button_solutions.click();
    menu.button_solutions.click();
    expect(menu.getTitle()).toEqual(menu.title_solutions);
  });

  it('should open industries page',  () => {
      menu.button_industries.click();
    menu.button_industries.click();
    expect(menu.getTitle()).toEqual(menu.title_industries);
  });

  it('should open ideas page',  () => {
    menu.button_ideas.click();
    expect(menu.getTitle()).toEqual(menu.title_ideas);
  });

  it('should open contact page',  () => {
    menu.button_contact.click();
    expect(menu.getTitle()).toEqual(menu.title_contact);
  });

  it('should autocomplete vacancy',  () => {
    menu.button_careers.click();
    search.searchVacancy("javascript");
    expect(search.autocomplete.getText().then(function(text){
       return text.toLowerCase();
     })).toContain("javascript");
    browser.sleep(3000);
  });
  
  it('should find vacancy', () => {
     menu.button_careers.click();
     search.searchVacancy("javascript");
     search.button_search.click();
     browser.wait(ExpectedConditions.visibilityOf(search.result), 30000);
     expect(search.result.getText().then(function(text){
       return text.toLowerCase();
     })).toContain("javascript");
     browser.sleep(3000);
   });

   it('should check search and result', () =>{
      menu.button_careers.click();
      search.searchVacancy("javascript");
      search.button_search.click();
      browser.wait(ExpectedConditions.visibilityOf(search.result), 30000);
      expect(search.search_for.getText()).toContain("javascript");
   })

});
