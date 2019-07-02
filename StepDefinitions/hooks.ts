import { After, Before } from "cucumber";
import { browser } from "protractor";
import { url } from "inspector";
const VERSION: number = 2016030600;
export default VERSION;
Before({tags:"@Test"}, function () {
  browser.manage().window().maximize();
  //browser.get("http://juliemr.github.io/protractor-demo/");
  
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
