"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as reporter from "cucumber-html-reporter";
let reporter = require("cucumber-html-reporter");
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
        tags: ["@Smoke or @Regression"],
        format: 'json:./cucumberreport.json',
        require: ['./StepDefinitions/*.js'],
        //require:['path/to/step/definitions/**/*.steps.js'],
        strict: true
    },
    onComplete: () => {
        let options = {
            theme: 'hierarchy',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                // "Browser": 'browserName',
                "Platform": "Windows 8",
                "Parallel": "Scenarios",
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscURBQXFEO0FBQ3JELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBR3RDLFFBQUEsTUFBTSxHQUNqQjtJQUNFLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFlBQVksRUFBRTtRQUNiLFdBQVcsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFO1FBQ0wsdUJBQXVCO0tBQ3hCO0lBRUQsWUFBWSxFQUNaO1FBQ0UsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDL0IsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNuQyxxREFBcUQ7UUFDckQsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFFZixJQUFJLE9BQU8sR0FDWDtZQUNFLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFDUjtnQkFDRSxhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsNEJBQTRCO2dCQUM1QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFdBQVc7YUFFeEI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBRUYsQ0FBQyJ9