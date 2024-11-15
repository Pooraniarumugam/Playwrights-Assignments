import {expect, test} from '@playwright/test'

test('Load Saleforce',async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("pooranikanagarj@testleaf.com")
    await page.locator("#password").fill("Saisirisha@92")
    await page.locator("//input[@id='Login']").click()
    //click App Launcher
    if( await page.locator("//div[@class='slds-icon-waffle']").isEnabled()){
      console.log("Login sucessfully and move to home page")
      await page.locator("//div[@class='slds-icon-waffle']").click();
    }
   await page.locator("//button[@class='slds-button']").click();
   await page.locator("//input[@class='slds-input']").fill("Marketing");

   await page.locator("//div[@class='slds-truncate']/a").click();
   await page.locator("(//*[@class='slds-icon slds-icon-text-default slds-icon_xx-small'])[2]").click();
   await page.locator("//span[text()='New Lead']").click();
   await page.locator("(//div[@role='listbox'])[1]/parent::div/div/button/span").click();
   await page.locator("(//div[@role='listbox'])[1]/lightning-base-combobox-item[4]/span/span").click();
   await page.locator("//input[@name='firstName']").fill("Poorani");


   await page.locator("//input[@name='lastName']").fill("Kanagaraj");
   await page.locator("//input[@name='Company']").fill("HSBC");
   await page.locator("//button[@aria-label='Lead Status']").click();
   await page.locator("//div[@aria-label='Lead Status']/lightning-base-combobox-item[2]/span/span").click();

   //Save the Form
   await page.locator("//button[@name='SaveEdit']").click();
   //await expect(page.getByText('Poorani Kanagaraj')).toBeVisible();
  
   await page.locator("//lightning-button-menu[@class='menu-button-item slds-dropdown-trigger slds-dropdown-trigger_click']/button").click();
   //await page.locator("//runtime_platform_actions-action-renderer[@title='Convert']").click();

   await page.locator("(//div[@class='slds-dropdown__item']/a/span)[7]").click();


   await page.locator("//span[@title='Opportunity']").click();
   await page.locator("//span[text()='Opportunity Name']/parent::label/parent::div/input").clear();
   await page.locator("//span[text()='Opportunity Name']/parent::label/parent::div/input").fill("sampletest");


  // Click Convert
  await page.locator("//button[@class='slds-button slds-button_brand']").click();

  // Go to Leeds
  await page.locator("//button[@class='slds-button slds-button_brand']").click();

  
  await page.locator("//input[@name='Lead-search-input']").fill("sampletest");
  await page.locator("//input[@name='Lead-search-input']").press('Enter');

  await page.locator("//span[text()='No items to display.']").isVisible();

  if(await page.locator("//span[text()='No items to display.']").innerText()=='No items to display.'){
    console.log("No items to display. is displayed ")
  }else{
    console.log("No items to display. is not displayed ")
  }

  await expect(page.locator("//span[text()='No items to display.']")).toHaveText('No items to display.');


  await page.locator("//a[@title='Opportunities']").click();

  await page.locator("//input[@name='Opportunity-search-input']").fill("sampletest");
  await page.locator("//input[@name='Opportunity-search-input']").press('Enter');
  

})