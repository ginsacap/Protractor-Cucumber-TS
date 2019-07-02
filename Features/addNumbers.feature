
Feature: Calculator Feature
Verifying the Addition Functionality

@Regression
Scenario Outline: Adding two numbers
Given Open browser and enter "<URL>"
When Enter two numbers "<a>", "<b>" and "<option>"
Then Verify the "<c>" after entering two numbers

Examples:
|                           URL              |   a      |    b     |    c   |   option          |
| http://juliemr.github.io/protractor-demo/  |   2      |    3     |    5   |   ADDITION        |
| http://juliemr.github.io/protractor-demo/  |   4      |    5     |    20   |   MULTIPLICATION  |