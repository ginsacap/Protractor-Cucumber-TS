"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBRWxDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFlBQVksRUFBRTtRQUNiLFdBQVcsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFO1FBQ0wsdUJBQXVCO0tBQ3hCO0lBRUQsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLGFBQWE7UUFDbkIsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7UUFDbkMscURBQXFEO1FBQ3JELE1BQU0sRUFBRSxJQUFJO0tBRWI7SUFDRCxTQUFTLEVBQUU7UUFDVCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFDIn0=