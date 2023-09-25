const puppeteer = require("puppeteer");

const TEST_ITR = 5;

const clearAndSetColorField = async (page, selector) => {
  const inputField = selector;
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  await page.$eval(inputField, (input) => {
    input.value = "";
  });
  await page.type(inputField, color);
  await page.keyboard.press("Enter");
};

const test = async () => {
  // Launch a headless Chromium browser
  const browser = await puppeteer.launch({
    headless: false,
  });

  // Create a new page/tab
  const page = await browser.newPage();
  //   await page.setViewport({ width: 1600, height: 900 });

  // Navigate to a website
  await page.goto("http://localhost:5173/");

  // Take a screenshot
  await page.screenshot({ path: "example.png" });

  // Find the div element with the class "toggle_btn"
  const toggleButton = await page.$(".toggle_btn");

  if (toggleButton) {
    // Click the element
    await toggleButton.click();
    console.log("Clicked the toggle button");
  } else {
    console.error("Toggle button not found");
  }

  // Locate the input field using a selector
  const inputSelector = 'input[type="text"]';
  const passwordInputSelector = 'input[type="password"]';

  // Type text into the input field
  await page.type(inputSelector, "apple");
  await page.type(passwordInputSelector, "123");

  const signinButton = await page.$("#signin_button");

  if (signinButton) {
    // Click the element
    await signinButton.click();
    console.log("SignIn button clicked");
  } else {
    console.error("SignIn button not found");
  }

  console.log("Wait for 3 seconds");
  await page.waitForTimeout(3000);

  const getStartedBtn = await page.$("div#get-started-btn");
  if (getStartedBtn) {
    // Click the element
    await getStartedBtn.click();
    console.log("getStartedBtn clicked");
  } else {
    console.error("getStartedBtn not found");
  }

  console.log("Wait for 7 seconds");
  await page.waitForTimeout(7000);

  await clearAndSetColorField(page, 'input[id="body"]');
  await clearAndSetColorField(page, 'input[id="tire"]');
  await clearAndSetColorField(page, 'input[id="rim"]');
  await clearAndSetColorField(page, 'input[id="line"]');

  console.log("Wait for 3 seconds");
  await page.waitForTimeout(3000);

  const logoutBtn = await page.$("#logout");
  if (logoutBtn) {
    // Click the element
    await logoutBtn.click();
    console.log("logoutBtn clicked");
  } else {
    console.error("logoutBtn not found");
  }

  console.log("Wait for 1 seconds");
  await page.waitForTimeout(1000);

  // Wait and Close the browser
  await browser.close();
};

const run_tests = async () => {
  for (let i = 0; i < TEST_ITR; i++) {
    console.log(`Running test ${i + 1}`);
    await test();
  }
};

run_tests();
