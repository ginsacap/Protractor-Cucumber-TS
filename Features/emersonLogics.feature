Feature: Shop and Category

   Check the Category under Shop menu option.
   @EmersonLink
   Scenario Outline: Count all the links of the home page
   Given Open the browser and enter the "<url>" in address bar.
   When Retreive the count of all the links in the home page
   Then Check whether the links are broken or workning
   Examples:
   |                url              |
   | https://www.emersonecologics.com|
   
   @Emerson
   Scenario Outline: Verifying Category under Shop menu option.
   Given Open the browser and enter the "<url>".
   When Validate the page "<title>".
   When Select Shop menu option then select category.
   When Select the AminoAcids option under category.
   Then validate the item code of the Amino Acids product.

   Examples:
   |                url              |         title      |    itemCode    | 
   | https://www.emersonecologics.com| Emerson Ecologics™ |      79556     |