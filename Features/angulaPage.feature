
Feature: Verifying the home page of Angular JS
@Smoke
Scenario Outline: Validate the Home page of the Angular JS website
Given Open the browser and enter "<URL>" to get the Home Page
When Click on header link
And Navigate to angular page
Then Enter "<key>" in search box.
Examples:
|           URL           |  key   | 
| https://angularjs.org/  | Hello  |
| https://angularjs.org/  |   Hi   |


   