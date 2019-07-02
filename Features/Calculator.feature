Feature: Calculator Feature

   Verifying the calculator functionality
    @Test
   Scenario Outline: Verifying the Add functionality
   Given Open browser and enter url
   When Enter numbers "<a>" and "<b>"
   When Select the "<option>" Click on Go button
   Then Capture the value from the table and Validate the "<result>"
   Examples:
   | a        | b   | result  |   option            |
   | 2        | 3   |   5     |   ADDITION          |
   | 5        | 2   |   10    |   MULTIPLICATION    |
   | 6        | 3   |   2     |   DIVISION          |
   | 10       | 4   |   6     |   SUBTRACTION       |