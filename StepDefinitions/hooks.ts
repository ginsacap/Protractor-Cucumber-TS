import { After, Before } from "cucumber";
import { browser } from "protractor";
const VERSION: number = 2016030600;
export default VERSION;
Before({tags:"@Regression"}, function () {
  browser.manage().window().maximize();
  console.log("Execution started");
  
});
After(async function (scenario) {
  console.log("Execution Completed");
  if (scenario.result.status === "failed")
  {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  }
  
});


// After({tags:"@Regression"}, function () {
//   console.log("Execution Completed");
  
// });
