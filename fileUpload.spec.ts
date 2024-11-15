import {expect, test} from '@playwright/test'
import path from 'path'

test('File upload Home Assignment',async({page})=>{

    //Load the Browser
    await page.goto("https://login.salesforce.com/")
    //Enter Username & password
    await page.locator("#username").fill("pooranikanagarj@testleaf.com")
    await page.locator("#password").fill("Saisirisha@92")
    await page.locator("//input[@id='Login']").click()
    
    //click App Launcher
    await page.locator("//div[@class='slds-icon-waffle']").isEnabled();
      
    await page.locator("//div[@class='slds-icon-waffle']").click();
    
    await page.locator("//button[@class='slds-button']").click();
    //Enter Accounts in App Launcher search box
    await page.locator("//input[@class='slds-input']").fill("Accounts");
    await page.locator("//a[@class='al-tab-item']").click();
    //Click New
    await page.locator("//a[@title='New']").click();
    await page.locator("//input[@name='Name']").fill("current Acc");
    // Click On Dropdown
    await page.getByText('Rating').click();
    // Store all element in one  
    let dropDownList = await page.locator('//div[@aria-label="Rating"]/lightning-base-combobox-item/span[2]/span').all()
    for(const dropVal of dropDownList){

        let dropText=await dropVal.innerText()
        console.log("DropDownValu="+dropText);
        if(dropText=='Warm'){
            await dropVal.click();
            break;

        }

    }
    await page.getByText('Type').click();
   
   let Typeelements= await page.locator("//div[@aria-label='Type']/lightning-base-combobox-item/span[2]/span").all();
   for(const typeWebEle of Typeelements){
    let typeVal=await typeWebEle.innerText();
    console.log("DropDownValu="+typeVal);
    if(typeVal=='Prospect'){
        await typeWebEle.click();
        break;
    }
   }
    await page.getByText('Industry').click();
   // xpath click dropdown
    //await page.locator("//div[@aria-label='Industry']/lightning-base-combobox-item[4]/span[2]/span").click();
    let industryList =  await page.locator("//div[@aria-label='Industry']/lightning-base-combobox-item/span[2]/span").all();
    for(const droplist of industryList){
        
        let dropvalues=await droplist.innerText();
        console.log("Valu=" + dropvalues);
        if(dropvalues =='Banking'){
            await droplist.click();
            break;
        }
    }
    await page.getByText('Ownership').click();
    await page.locator("//div[@aria-label='Ownership']/lightning-base-combobox-item[2]/span[2]/span").click();
    await page.locator("//button[@name='SaveEdit']").click();
    //Upload text file
    await page.locator(".slds-form-element__control").filter({hasText:"Or drop files"}).locator("//span[@part='button']")
    .setInputFiles(path.join(__dirname,"fileupload.txt"));

    await page.locator("//span[text()='Done']").click();

    await page.waitForTimeout(20000);

})