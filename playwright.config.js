// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({  //config is a varaible which is holding all the info required to run the test cases
  testDir: './tests', //what tests to run
  timeout:40*1000, //applicable to the entire project for components and steps in playwright. Global time out for entire test case
  expect : {
     timeout:5000, // time out applicable for all assertions
  },
  reporter : 'html', // reports in html format after test cases execution
  use: {
    browserName: 'chromium',
   // browserName: 'firefox' //decides which brower to pick and execute
   // browserName: 'webkit',  //for safari the playwright webkit engine derived from safari
    //headless: true, // by default the test cases will be executed in headless even if you are not specifing this
    headless: false, // execution will happen in browser.If we specifiy this then no need to specifiy --headed in the terminal 
    // screenshot: 'only-on-failure', //screenshot will be taken only when test case fails
    screenshot: 'on', //screenshot will be taken for all test cases
    // video: 'retain-on-failure', //video will be recorded only when test case fails
    //video: 'on', //video will be recorded for all test cases
    // trace: 'retain-on-failure', //trace will be recorded only when test case fails
    trace: 'on', //trace will be recorded for all test cases
  
  },
  /* Run tests in files in parallel */
  // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
  // },

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  //   /* Test against mobile viewports. */
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

  //   /* Test against branded browsers. */
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   // },
  // ],

  // /* Run your local dev server before starting the tests */
  // // webServer: {
  // //   command: 'npm run start',
  // //   url: 'http://localhost:3000',
  // //   reuseExistingServer: !process.env.CI,
  // // },

});
module.exports=config //exporting beacuse to make it available across the project