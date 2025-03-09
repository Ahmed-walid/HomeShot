const puppeteer = require('puppeteer');

async function takeScreenshot(url, filename) {
  // Launch the browser
  const browser = await puppeteer.launch();
  
  // Create a new page
  const page = await browser.newPage();
  
  // Navigate to the URL
  await page.goto(url);
  
  // Take a screenshot
  await page.screenshot({ path: filename });
  
  // Close the browser
  await browser.close();
}

// Usage example: Take a screenshot of a webpage
takeScreenshot('https://www.youtube.com', 'example-screenshot.png')
  .then(() => console.log('Screenshot taken!'))
  .catch((err) => console.error('Error:', err));
