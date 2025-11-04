const {test,expect} = require('@playwright/test');

test('@Web Client App login', async ({page}) => {
const products = page.locator(".card-body");
const productName = 'ZARA COAT 3';  
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("anshika@gmail.com");
await page.locator("#userPassword").fill("Iamking@000");
await page.locator("[value='Login']").click();
console.log(await page.title());
//await page.waitForLoadState('networkidle');
// waits untill all the services calls are made in the back end or for a specific netwrok activity to be done.
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();//it fectches and prints all text contents with in .card-body elements. 
console.log(titles);
const count = await products.count();
for(let i=0;i<count;i++){
  if(await products.nth(i).locator("b").textContent() === productName){
    //click on add to cart
    await products.nth(i).locator("text= Add To Cart").click();
    break;
  }
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Country']").type("ind",{delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
});

