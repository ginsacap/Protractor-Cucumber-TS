
Feature: Calculator Feature
Verifying the Addition Functionality

@Regression
Scenario Outline: Adding two numbers
Given Open browser and enter "<URL>"
When Enter two numbers "<a>" and "<b>"
Then Verify the "<c>" after entering two numbers

Examples:
|                           URL              |   a      |    b     |    c   |
| http://juliemr.github.io/protractor-demo/  |   2      |    3     |    5   |
| http://juliemr.github.io/protractor-demo/  |   4      |    5     |    8   |