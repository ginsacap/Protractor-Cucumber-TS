"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        browserName: 'chrome',
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../Features/*.feature'
    ],
    cucumberOpts: {
        tags: "@Regression",
        require: ['./StepDefinitions/*.js'],
        //require:['path/to/step/definitions/**/*.steps.js'],
        strict: true
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBRWxDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLGVBQWUsRUFBQyw4QkFBOEI7SUFDOUMsWUFBWSxFQUFFO1FBQ2IsV0FBVyxFQUFFLFFBQVE7S0FDckI7SUFDRCxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxLQUFLLEVBQUU7UUFDTCx1QkFBdUI7S0FDeEI7SUFFRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsYUFBYTtRQUNuQixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNuQyxxREFBcUQ7UUFDckQsTUFBTSxFQUFFLElBQUk7S0FFYjtJQUNELFNBQVMsRUFBRTtRQUNULG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUMifQ==