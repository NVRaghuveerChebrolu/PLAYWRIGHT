const {test,expect} = require('@playwright/test');

test('First PlayWright Test',async({browser})=>
{
//playwright code here
//fixtures are global variables availables acress project
//browser is wrapped in { } torecognize it as a playwright fixture.
//we need to create a new context 
//chrome - plugins
//newcontext - similiar to new instance
//chrome - Plugins/ cookies

const context = await browser.newContext()
const page = await context.newPage();
const userName = page.locator("#username");
const cardTitles = await page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//css  
//To enter any thig in the text boxes we can use type or fill
await userName.fill("rahulshetty");
await page.locator("[type='password']").fill("learning");
await page.locator("#signInBtn").click();
//below locator is not immediately present. playwright will wait till the locator is present automatically
// below is similart to explicit wait in selenium
console.log(await page.locator("[style*='block']").textContent());
//below is the how we can extract the text and validate
//In playwright expect is used for assertions
await expect(page.locator("[style*='block']")).toContainText('Incorrect username');
await userName.fill(""); //clear or wipes off the existing content in the text box
await userName.fill("rahulshettyacademy"); 
await page.locator("[type='password']").fill("");
await page.locator("[type='password']").fill("learning");
await page.locator("#signInBtn").click();
//filtering one weblements when CSS is identifying multiple web Elements
//playwright will check if the specfied element is available, if Not Found error was occured, again
//playwright will think that it need to wait for a element so it waiits and found it. 
console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(0).textContent());
console.log(await cardTitles.nth(1).textContent());
//all the pridycts in list format
//here playwright may return : 
// 0 when playwright is not able to detect any elements
// 5 when playwright is able to detect 5 elements
// Global wait is not applicable 
const allTitles = await cardTitles.allTextContents();// retruns list which can be 0 or 100 values. 
console.log(allTitles);
});

test('Page PlayWright Test',async({page})=>
{
await page.goto("https://google.com");
//get titkle and put assertion
console.log(await page.title());
await expect(page).toHaveTitle("Google"); //this will wait for expect time out provided in config.js file
});


test.only('UI Controls Drop Downs',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const userName = page.locator("#username");
const signIn = page.locator("#signInBtn");
const documentlink=page.locator("[href*='documents-request']"); 
const dropdown = page.locator("select.form-control");
await dropdown.selectOption("consult");
// await page.locator(".radiotextsty").last().click();
// await page.locator("#okayBtn").click();
expect(page.locator(".radiotextsty")).last().toBeChecked();
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).not.toBeChecked();
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await expect(documentlink).toHaveAttribute("class","blinkingText");
});

test.only('UI Controls Child Windows',async({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage();
    const userName = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink = page.locator("[href*='documents-request']");
    
    //if we have dependency on multiple steps to perform any action we use promise.all
    //to make sure that all the steps are completed before moving to next step

    const[newPage]=Promise.all(
    [
        context.waitForEvent('page'),//listen for any page pending,rejected,fulfilled
        documentlink.click(),//new page is opened
    ])
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0];   
    console.log(domain);
    await page.locator("#username").type(domain);
    page.pause();
    console.log(await page.locator("#username").textContent());
    
});