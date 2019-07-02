Feature: Registering to qaclickacademy

Register to qaclickacademy as a student
@Registration
Scenario Outline: Verify the registration process
Given Open the browser and enter the qaclickacademy "<url>"
When After getting the registration page read the data from excel
And Enter the data from excel file to the form fields
Then Check whether the registration is successful or not
Examples:
|                           url                    | 
| https://qaclickacademy.github.io/protocommerce/  |